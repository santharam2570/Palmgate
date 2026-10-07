"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { sendEnquiry } from "@/lib/enquiry";
import { sapBatches, sapModes, sapTracks, type SapTrackId } from "@/lib/sap-course";
import { site } from "@/lib/site";
import { Field, inputClass } from "./FormField";

export type SapIntent = "enquiry" | "register";

const intents: { id: SapIntent; label: string; subject: string }[] = [
  { id: "register", label: "Register for a batch", subject: "SAP course registration" },
  { id: "enquiry", label: "Course enquiry", subject: "SAP course enquiry" },
];

const backgrounds = [
  "Student / fresh graduate",
  "Finance or accounting professional",
  "Procurement or supply chain professional",
  "Sales or logistics professional",
  "SAP end user",
  "Software developer / IT professional",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

type SapEnquiryFormProps = {
  intent: SapIntent;
  onIntentChange: (intent: SapIntent) => void;
  track: SapTrackId;
  onTrackChange: (track: SapTrackId) => void;
};

export function SapEnquiryForm({ intent, onIntentChange, track, onTrackChange }: SapEnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const course = sapTracks.find((t) => t.id === track) ?? sapTracks[0];
  const currentIntent = intents.find((i) => i.id === intent) ?? intents[0];
  const registering = intent === "register";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    setStatus("sending");
    try {
      await sendEnquiry(`${currentIntent.subject}: ${course.title}`, data);
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
        <h3 className="mt-6 font-display text-2xl font-bold text-ink-950">
          {registering ? "Your seat request is in!" : "Thank you!"}
        </h3>
        <p className="mt-2 max-w-sm text-ink-500">
          {registering
            ? `Our training team will call you within one business day to confirm your ${course.tab} batch and share payment details.`
            : "A course advisor will get back to you within one business day."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-palm-700 hover:text-palm-600"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="enquiryType" value={currentIntent.subject} />
      <input type="hidden" name="course" value={course.title} />

      <div
        role="radiogroup"
        aria-label="Request type"
        className="grid grid-cols-2 gap-1 rounded-xl border border-ink-100 bg-ink-50/60 p-1 sm:col-span-2"
      >
        {intents.map((option) => (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={intent === option.id}
            onClick={() => onIntentChange(option.id)}
            className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-[color,box-shadow] duration-300 ${
              intent === option.id ? "bg-palm-gradient text-white shadow-md shadow-palm-600/25" : "text-ink-500 hover:text-ink-900"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <Field label="Full name" htmlFor="sap-name">
        <input id="sap-name" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
      </Field>
      <Field label="Email" htmlFor="sap-email">
        <input id="sap-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
      </Field>
      <Field label="Phone / WhatsApp" htmlFor="sap-phone">
        <input id="sap-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+971 50 123 4567" className={inputClass} />
      </Field>
      <Field label="Course" htmlFor="sap-course">
        <select
          id="sap-course"
          value={track}
          onChange={(e) => onTrackChange(e.target.value as SapTrackId)}
          className={inputClass}
        >
          {sapTracks.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Preferred batch" htmlFor="sap-batch">
        <select id="sap-batch" name="batch" required={registering} defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a batch
          </option>
          {sapBatches.map((b) => (
            <option key={b.id} value={`${b.label} (${b.schedule})`}>
              {b.label} · {b.schedule}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </Field>
      <Field label="Learning mode" htmlFor="sap-mode">
        <select id="sap-mode" name="mode" required={registering} defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a mode
          </option>
          {sapModes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Your background" htmlFor="sap-background" className="sm:col-span-2">
        <select id="sap-background" name="background" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select what describes you best
          </option>
          {backgrounds.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>
      <Field label={registering ? "Anything we should know? (optional)" : "Your question"} htmlFor="sap-message" className="sm:col-span-2">
        <textarea
          id="sap-message"
          name="message"
          required={!registering}
          rows={3}
          placeholder={registering ? "Preferred start month, instalment plan, corporate billing…" : "Ask about eligibility, fees, batches or placements"}
          className={`${inputClass} resize-none`}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">
          {registering ? "No payment now. We'll confirm your seat first." : "We reply within one business day."}
        </p>
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
              {registering ? "Reserve my seat" : "Send enquiry"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
