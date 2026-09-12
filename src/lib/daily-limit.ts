const counts = new Map<string, { day: string; count: number }>();

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

// Per-instance in-memory daily counter — same cold-start/per-instance
// caveat as the chat route's burst rate limiter: resets whenever the
// serverless function instance recycles. Accepted best-effort tradeoff
// for a low-traffic personal site, matching the existing rate-limit design.
export function checkAndIncrementDailyLimit(key: string, max: number): boolean {
  const day = today();
  const entry = counts.get(key);

  if (!entry || entry.day !== day) {
    counts.set(key, { day, count: 1 });
    return true;
  }

  if (entry.count >= max) return false;

  entry.count += 1;
  return true;
}
