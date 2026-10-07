import { CalendarCheck, FileText, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

const nextSteps = [
  { icon: MessageSquare, title: "Free consultation", body: "A 30-minute call with a consultant to understand your goals." },
  { icon: FileText, title: "Clear proposal", body: "Scope, timeline and a fixed quote within 3 business days." },
  { icon: CalendarCheck, title: "Kick-off", body: "Your dedicated team starts building, with weekly demos." },
];

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial opacity-60" />
      <div aria-hidden className="glow absolute -bottom-72 left-0 -z-10 size-[56rem] text-palm-600/30" />
      <div aria-hidden className="glow absolute -top-48 -right-40 -z-10 size-[40rem] text-palm-400/15" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-palm-400/30 bg-palm-400/10 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] text-palm-300 uppercase">
            <span className="size-1.5 rounded-full bg-palm-400 shadow-[0_0_10px] shadow-palm-400" />
            Let&apos;s talk
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] font-bold tracking-tight text-balance text-white sm:text-5xl">
            Ready to open the <span className="text-gradient">gate</span> to your next system?
          </h2>
          <p className="mt-5 text-lg text-ink-400">
            Tell us what you need. Whether it&apos;s a new ERP, a CRM rollout or a custom Python platform, we&apos;ll show you the
            fastest path to get there.
          </p>

          <ol className="mt-10 space-y-6">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-palm-400/30 bg-palm-400/10 text-palm-300">
                  <step.icon className="size-5" />
                  <span className="absolute -top-2 -right-2 inline-flex size-5 items-center justify-center rounded-full bg-palm-gradient text-[0.65rem] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-display font-bold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-400">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-ink-400">
            Prefer email?{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-palm-300 hover:text-palm-200">
              {site.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="relative rounded-[2rem] bg-white p-6 shadow-[0_0_0_1px_rgb(48_204_249/0.35),0_0_60px_-8px_rgb(38_102_239/0.6)] sm:p-10">
              <h3 className="font-display text-2xl font-bold text-ink-950">Request a free consultation</h3>
              <p className="mt-1.5 mb-8 text-sm text-ink-500">Fill in the form and we&apos;ll be in touch within one business day.</p>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
