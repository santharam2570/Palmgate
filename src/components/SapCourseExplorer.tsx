"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircleQuestion,
  type LucideIcon,
} from "lucide-react";
import { formatAed, sapBatches, sapFeeIncludes, sapTracks, trackHours, type SapTrackId } from "@/lib/sap-course";
import { offices } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SapEnquiryForm, type SapIntent } from "./SapEnquiryForm";

const enrolSteps = [
  { title: "Free counselling call", body: "We check your background and recommend the right track." },
  { title: "Attend a demo class", body: "Sit in on a live session before you commit." },
  { title: "Confirm your batch", body: "Pay in full or in two instalments to lock in your seat." },
];

export function SapCourseExplorer({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<SapTrackId>("fico");
  const [formTrack, setFormTrack] = useState<SapTrackId>("fico");
  const [intent, setIntent] = useState<SapIntent>("register");
  const current = sapTracks.find((t) => t.id === active) ?? sapTracks[0];
  const hours = trackHours(current);

  function selectTrack(id: SapTrackId) {
    setActive(id);
    setFormTrack(id);
  }

  function openForm(next: SapIntent) {
    setIntent(next);
    setFormTrack(current.id);
  }

  return (
    <>
      <Reveal className="flex justify-center">
        <div
          role="tablist"
          aria-label="SAP courses"
          className="grid w-full max-w-md grid-cols-4 gap-1 rounded-2xl border border-ink-100 bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto sm:max-w-none"
        >
          {sapTracks.map((t) => (
            <button
              key={t.id}
              role="tab"
              id={`sap-tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls={`sap-panel-${t.id}`}
              onClick={() => selectTrack(t.id)}
              className={`rounded-xl px-2 py-2.5 text-sm font-semibold whitespace-nowrap transition-[color,box-shadow] duration-300 sm:px-7 ${
                active === t.id ? "bg-palm-gradient text-white shadow-lg shadow-palm-600/25" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              SAP {t.tab}
            </button>
          ))}
        </div>
      </Reveal>

      <div
        key={current.id}
        role="tabpanel"
        id={`sap-panel-${current.id}`}
        aria-labelledby={`sap-tab-${current.id}`}
        className="mt-12 grid animate-fade-up items-start gap-10 lg:grid-cols-[1fr_25rem] lg:gap-12"
      >
        <div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-palm-50 px-3 py-1 text-palm-700">{current.level}</span>
            <span className="rounded-full bg-ink-50 px-3 py-1 text-ink-700">{hours} hours</span>
            <span className="rounded-full bg-ink-50 px-3 py-1 text-ink-700">{current.syllabus.length} modules</span>
          </div>
          <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">{current.title}</h3>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">{current.summary}</p>
          <p className="mt-4 text-sm text-ink-500">
            <span className="font-semibold text-ink-800">Who it&apos;s for:</span> {current.audience}
          </p>

          <h4 className="mt-10 font-display text-lg font-bold text-ink-950">What you&apos;ll be able to do</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {current.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-3.5 text-sm font-medium text-ink-700 shadow-sm">
                <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-palm-600" />
                {o}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-end justify-between gap-4">
            <h4 className="font-display text-lg font-bold text-ink-950">Syllabus</h4>
            <p className="text-sm text-ink-500">
              {current.syllabus.length} modules · {hours} hours
            </p>
          </div>
          <ol className="mt-4 space-y-3">
            {current.syllabus.map((module, i) => (
              <li key={module.title}>
                <details
                  open={i === 0}
                  className="group rounded-2xl border border-ink-100 bg-white transition-[border-color,box-shadow] duration-300 open:border-palm-400/50 open:shadow-lg open:shadow-palm-600/10"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-palm-50 font-display text-sm font-bold text-palm-700 transition group-open:bg-palm-gradient group-open:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display font-semibold text-ink-950">{module.title}</span>
                    <span className="hidden text-xs font-semibold text-ink-400 sm:inline">{module.hours} hrs</span>
                    <ChevronDown className="size-5 shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <ul className="grid gap-2 px-4 pb-5 sm:grid-cols-2 sm:pr-5 sm:pl-[4.75rem]">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5 text-sm text-ink-500">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-palm-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ol>
        </div>

        <aside className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-950 p-6 shadow-2xl shadow-palm-900/30 sm:p-8">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
            <div aria-hidden className="glow absolute -top-32 -right-32 size-80 text-palm-500/30" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">Course details</p>

              <div className="mt-6 space-y-5 text-sm">
                <DetailRow icon={Clock3} label="Duration">
                  {hours} hours of live, instructor-led training
                </DetailRow>
                <DetailRow icon={CalendarDays} label="Batches">
                  <ul className="space-y-1.5">
                    {sapBatches.map((b) => (
                      <li key={b.id} className="flex flex-wrap justify-between gap-x-3">
                        <span>
                          <span className="font-semibold text-white">{b.label}</span> · {b.schedule}
                        </span>
                        <span className="text-palm-300">{Math.ceil(hours / b.hoursPerWeek)} weeks</span>
                      </li>
                    ))}
                  </ul>
                </DetailRow>
                <DetailRow icon={MapPin} label="Mode">
                  Classroom in {offices.map((o) => o.city).join(" or ")}, or live online
                </DetailRow>
                <DetailRow icon={Award} label="Certification">
                  {current.certification}
                </DetailRow>
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">Course fee</p>
                <div className="mt-3 flex items-baseline justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-display text-2xl font-bold text-white">{formatAed(current.fees.aed)}</p>
                  <p className="text-xs text-ink-400">Classroom or online</p>
                </div>
                <p className="mt-2.5 text-xs text-ink-400">Two interest-free instalments available.</p>

                <ul className="mt-5 space-y-2">
                  {sapFeeIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-100">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-300" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 grid gap-2.5">
                <a
                  href="#sap-enquiry"
                  onClick={() => openForm("register")}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-palm-gradient px-5 py-3.5 font-semibold text-white shadow-lg shadow-palm-600/30 transition-shadow hover:shadow-palm-400/50"
                >
                  Register for SAP {current.tab}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#sap-enquiry"
                  onClick={() => openForm("enquiry")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-palm-400/50 hover:bg-white/5"
                >
                  <MessageCircleQuestion className="size-4" /> Ask a question
                </a>
              </div>
              <p className="mt-4 text-center text-[0.7rem] text-ink-400">
                SAP&apos;s official certification exam fee is paid directly to SAP and isn&apos;t included.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {children}

      <Reveal className="mt-24">
        <div
          id="sap-enquiry"
          className="relative isolate grid gap-10 overflow-hidden rounded-[2rem] bg-ink-950 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-14"
        >
          <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial opacity-60" />
          <div aria-hidden className="glow absolute -bottom-64 -left-40 -z-10 size-[40rem] text-palm-600/30" />

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">Enrol</p>
            <h3 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
              Reserve your seat in the <span className="text-gradient">next batch</span>
            </h3>
            <p className="mt-4 text-ink-400">
              Register now or send us your questions. Seats are limited to 15 per batch and fill up on a first-come basis.
            </p>

            <ol className="mt-8 space-y-5">
              {enrolSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-palm-400/30 bg-palm-400/10 font-display text-sm font-bold text-palm-300">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold text-white">{step.title}</p>
                    <p className="mt-0.5 text-sm text-ink-400">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {offices.map((o) => (
                <a
                  key={o.id}
                  href={`tel:${o.phone.replace(/\s/g, "")}`}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-palm-400/40"
                >
                  <p className="text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">{o.city}</p>
                  <p className="mt-0.5 font-semibold text-white">{o.phone}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_0_0_1px_rgb(48_204_249/0.35),0_0_60px_-8px_rgb(38_102_239/0.6)] sm:p-8">
            <SapEnquiryForm intent={intent} onIntentChange={setIntent} track={formTrack} onTrackChange={setFormTrack} />
          </div>
        </div>
      </Reveal>
    </>
  );
}

function DetailRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3.5">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-palm-400/30 bg-palm-400/10 text-palm-300">
        <Icon className="size-4.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-ink-400">{label}</p>
        <div className="mt-1 text-ink-100">{children}</div>
      </div>
    </div>
  );
}
