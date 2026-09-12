import { checkAndIncrementDailyLimit } from "@/lib/daily-limit";

const DAILY_LIMIT = 15;

// The actual email send still happens client-side via EmailJS's browser SDK
// (it validates the request's Origin against the allowed origins configured
// in the EmailJS dashboard, which only works for real browser requests —
// proxying the send itself through this server would need a private key
// this project doesn't have configured). This route only gates *how many*
// sends are allowed per day: the client calls it first and only proceeds to
// EmailJS if the quota isn't exhausted yet.
export async function POST() {
  if (!checkAndIncrementDailyLimit("contact", DAILY_LIMIT)) {
    return Response.json(
      {
        error:
          "The contact form has reached its daily message limit — please reach out directly via email or social media instead.",
      },
      { status: 429 },
    );
  }

  return Response.json({ ok: true });
}
