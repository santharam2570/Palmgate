"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { enquiryTypes, sendEnquiry, type EnquiryAudience, type EnquiryField, type EnquiryTypeId } from "@/lib/enquiry";
import { site } from "@/lib/site";
import { Field, inputClass } from "./FormField";

type Status = "idle" | "sending" | "sent" | "error";

const audienceLabels: Record<EnquiryAudience, string> = {
  business: "For businesses",
  individual: "For individuals",
};

type EnquiryFormProps = {
  types: EnquiryTypeId[];
  grouped?: boolean;
};

export function EnquiryForm({ types, grouped = false }: EnquiryFormProps) {
  const uid = useId();
  const options = enquiryTypes.filter((t) => types.includes(t.id));
  const [selected, setSelected] = useState<EnquiryTypeId>(options[0].id);
  const [status, setStatus] = useState<Status>("idle");
  const current = options.find((t) => t.id === selected) ?? options[0];
  const isBusiness = current.audience === "business";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    setStatus("sending");
    try {
      await sendEnquiry(`${current.subject} | ${site.legalName} website`, { enquiryType: current.subject, ...data });
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
          Your enquiry is on its way. Our team will review your requirements and get back to you with the appropriate next steps.
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

  const groups: { audience: EnquiryAudience | null; items: typeof options }[] = grouped
    ? (["business", "individual"] as const).map((audience) => ({ audience, items: options.filter((o) => o.audience === audience) }))
    : [{ audience: null, items: options }];

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      {options.length > 1 && (
        <div role="radiogroup" aria-label="Enquiry type" className="space-y-3 sm:col-span-2">
          {groups.map((group) => (
            <div key={group.audience ?? "all"}>
              {group.audience && (
                <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.18em] text-ink-400 uppercase">{audienceLabels[group.audience]}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {group.items.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={selected === option.id}
                    onClick={() => setSelected(option.id)}
                    className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition-[color,background-color,border-color,box-shadow] duration-300 ${
                      selected === option.id
                        ? "border-transparent bg-palm-gradient text-white shadow-md shadow-palm-600/25"
                        : "border-ink-100 bg-ink-50/60 text-ink-500 hover:border-palm-400/40 hover:text-ink-900"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <Field label="Full name" htmlFor={`${uid}-name`}>
        <input id={`${uid}-name`} name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
      </Field>
      <Field label={isBusiness ? "Work email" : "Email"} htmlFor={`${uid}-email`}>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={isBusiness ? "you@company.com" : "you@example.com"}
          className={inputClass}
        />
      </Field>
      <Field label="Phone / WhatsApp" htmlFor={`${uid}-phone`}>
        <input id={`${uid}-phone`} name="phone" type="tel" required autoComplete="tel" placeholder="+971 50 123 4567" className={inputClass} />
      </Field>
      {isBusiness ? (
        <Field label="Company" htmlFor={`${uid}-company`}>
          <input id={`${uid}-company`} name="company" required autoComplete="organization" placeholder="Company name" className={inputClass} />
        </Field>
      ) : (
        <Field label="Country of residence" htmlFor={`${uid}-country`}>
          <input id={`${uid}-country`} name="country" autoComplete="country-name" placeholder="e.g. United Arab Emirates" className={inputClass} />
        </Field>
      )}

      {current.fields.map((field, i) => (
        <EnquiryInput
          key={`${current.id}-${field.name}`}
          id={`${uid}-${field.name}`}
          field={field}
          wide={current.fields.length % 2 === 1 && i === current.fields.length - 1}
        />
      ))}

      <Field label={current.messageLabel} htmlFor={`${uid}-message`} className="sm:col-span-2">
        <textarea
          key={current.id}
          id={`${uid}-message`}
          name="message"
          required
          rows={4}
          placeholder={current.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">Your details stay confidential and are used only to respond to your enquiry.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-palm-gradient px-7 py-3.5 font-semibold text-white shadow-lg shadow-palm-600/30 transition-shadow hover:shadow-palm-400/50 disabled:opacity-70"
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

function EnquiryInput({ id, field, wide }: { id: string; field: EnquiryField; wide: boolean }) {
  return (
    <Field label={field.label} htmlFor={id} className={wide ? "sm:col-span-2" : ""}>
      {field.kind === "select" ? (
        <select id={id} name={field.name} required={field.required} defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select an option
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.kind}
          min={field.kind === "number" ? 1 : undefined}
          required={field.required}
          placeholder={field.placeholder}
          className={inputClass}
        />
      )}
    </Field>
  );
}
