"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { sendEnquiry } from "@/lib/enquiry";
import { services, site } from "@/lib/site";
import { Field, inputClass } from "./FormField";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    setStatus("sending");
    try {
      await sendEnquiry(`Project enquiry: ${data.service || "General"}`, data);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="size-9" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink-950">Thank you!</h3>
        <p className="mt-2 max-w-sm text-ink-500">
          Your enquiry is on its way. A PalmGate consultant will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-palm-700 hover:text-palm-600"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Full name" htmlFor="name">
        <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
      </Field>
      <Field label="Work email" htmlFor="email">
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
      </Field>
      <Field label="Phone / WhatsApp" htmlFor="phone">
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+971 50 123 4567" className={inputClass} />
      </Field>
      <Field label="Company" htmlFor="company">
        <input id="company" name="company" autoComplete="organization" placeholder="Company name" className={inputClass} />
      </Field>
      <Field label="I'm interested in" htmlFor="service" className="sm:col-span-2">
        <select id="service" name="service" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </Field>
      <Field label="Tell us about your project" htmlFor="message" className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What would you like to build or improve?"
          className={`${inputClass} resize-none`}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">We reply within one business day. Your details stay confidential.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-palm-gradient px-7 py-3.5 font-semibold text-white shadow-lg shadow-palm-600/30 transition-shadow hover:shadow-palm-400/50 disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send enquiry <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-rose-600 sm:col-span-2">
          Something went wrong. Please try again or email us at {site.email}.
        </p>
      )}
    </form>
  );
}
