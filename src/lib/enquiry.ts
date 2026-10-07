import { site } from "./site";

// When the Python (FastAPI/Django) backend is live, set NEXT_PUBLIC_CONTACT_ENDPOINT
// to its URL; it receives each form as JSON. Until then, submissions open the user's mail app.
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export async function sendEnquiry(subject: string, data: Record<string, string>) {
  if (!ENDPOINT) {
    const body = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}
