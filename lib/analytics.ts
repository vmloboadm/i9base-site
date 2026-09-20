export function track(event: string, data?: Record<string, string>) {
  try {
    const payload = JSON.stringify({
      event,
      data: data ?? {},
      url:
        typeof window !== "undefined"
          ? window.location.pathname
          : "",
      ts: new Date().toISOString(),
    });
    if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
      navigator.sendBeacon(
        "/api/track",
        new Blob([payload], { type: "application/json" })
      );
    } else {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    /* analytics nunca pode quebrar a página */
  }
}
