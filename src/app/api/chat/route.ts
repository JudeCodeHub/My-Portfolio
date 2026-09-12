import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "@/data/about-me";
import { checkAndIncrementDailyLimit } from "@/lib/daily-limit";

const MODEL = "gemini-3.6-flash";
const MAX_OUTPUT_TOKENS = 512;
const MAX_HISTORY_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 4000;
const MAX_TOTAL_CHARS = 16000;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const DAILY_LIMIT = 100;

const requestLog = new Map<string, number[]>();

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);

  if (requestLog.size > 500) {
    for (const [key, times] of requestLog) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        requestLog.delete(key);
      }
    }
  }

  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function sanitizeMessages(rawMessages: unknown): ChatMessage[] | null {
  if (!Array.isArray(rawMessages)) return null;

  const trimmed: ChatMessage[] = rawMessages
    .filter(
      (m): m is ChatMessage =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_MESSAGE_CHARS),
    }));

  const totalChars = trimmed.reduce((sum, m) => sum + m.content.length, 0);
  if (totalChars > MAX_TOTAL_CHARS) return null;

  return trimmed;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      {
        error:
          "You're sending messages too quickly — please wait a moment and try again.",
      },
      { status: 429 },
    );
  }

  if (!checkAndIncrementDailyLimit("chat", DAILY_LIMIT)) {
    return Response.json(
      {
        error:
          "The chat assistant has reached its message limit for today — please try again tomorrow, or reach out directly via the Contact section.",
      },
      { status: 429 },
    );
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set.");
    return Response.json(
      { error: "Chat is temporarily unavailable." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = sanitizeMessages(
    (body as { messages?: unknown } | null)?.messages,
  );
  if (!messages || messages.length === 0) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  let stream;
  try {
    stream = await ai.models.generateContentStream({
      model: MODEL,
      contents,
      config: {
        systemInstruction: buildSystemPrompt(),
        maxOutputTokens: MAX_OUTPUT_TOKENS,
      },
    });
  } catch (err) {
    console.error("Gemini API error:", err);
    return Response.json(
      {
        error:
          "The assistant is having trouble responding right now. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  const encoder = new TextEncoder();
  const responseStream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const text = chunk.text;
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err) {
        console.error("Gemini streaming error:", err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(responseStream, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
