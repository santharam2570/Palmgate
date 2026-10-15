import { ArrowRight, Check, Info, Mail, Phone, Quote } from "lucide-react";
import type { ReactNode } from "react";
import type { CapabilitySection, Service } from "@/lib/services";
import { site, telHref } from "@/lib/site";
import { EnquiryForm } from "./EnquiryForm";
import { serviceIcons } from "./icons";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const letter = (i: number) => String.fromCharCode(65 + i);

export function ServicePage({ service, children }: { service: Service; children?: ReactNode }) {
  const Icon = serviceIcons[service.id];
  return (
    <>
      <PageHero
        breadcrumb={service.navLabel}
        eyebrow={`${service.number} · ${service.navLabel}`}
        icon={Icon}
        title={service.pageTitle}
        headline={service.headline}
        actions={service.ctas}
      >
        <nav aria-label="On this page" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          <p className="text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">On this page</p>
          <ol className="mt-4 space-y-1">
            {service.sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-ink-100/80 transition hover:bg-white/5 hover:text-white"
                >
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-white/5 font-display text-xs font-bold text-palm-300 transition group-hover:bg-palm-gradient group-hover:text-white">
                    {letter(i)}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageHero>

      <Overview service={service} />

      <section id="capabilities" className="relative scroll-mt-20 overflow-hidden bg-ink-50 py-24 sm:py-28">
        <div aria-hidden className="glow absolute -top-60 -right-60 size-[46rem] text-palm-200/50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we offer" title={service.capabilitiesHeading} />
          <div className="mt-14 space-y-6">
            {service.sections.map((section, i) => (
              <CapabilityCard key={section.id} section={section} index={i} />
            ))}
          </div>
        </div>
      </section>

      {children}

      {service.process && <ProcessSteps title={service.process.title} steps={service.process.steps} />}

      {(service.why || service.statement) && <WhyBand why={service.why} statement={service.statement} />}

      <EnquiryPanel title={service.enquiry.title} ctas={service.ctas.map((c) => c.label)}>
        <EnquiryForm types={service.enquiry.types} />
      </EnquiryPanel>
    </>
  );
}

function Overview({ service }: { service: Service }) {
  const [lead, ...rest] = service.intro;
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-palm-700 uppercase">Overview</p>
          <p className="mt-4 font-display text-2xl leading-snug font-semibold text-balance text-ink-950 sm:text-3xl">{lead}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-palm-600/15 bg-palm-50 px-3 py-1 text-xs font-semibold text-palm-700">
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-ink-500 sm:text-lg lg:pt-8">
          {rest.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CapabilityCard({ section, index }: { section: CapabilitySection; index: number }) {
  const hasList = Boolean(section.items?.length || section.definitions?.length);
  return (
    <Reveal>
      <article
        id={section.id}
        className={`grid scroll-mt-28 gap-8 rounded-3xl border border-ink-100 bg-white p-7 shadow-sm sm:p-10 ${
          hasList ? "lg:grid-cols-[0.8fr_1.2fr] lg:gap-12" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-palm-gradient font-display text-lg font-bold text-white shadow-lg shadow-palm-600/25">
              {letter(index)}
            </span>
            <h3 className="font-display text-xl leading-snug font-bold text-ink-950 sm:text-2xl">{section.title}</h3>
          </div>
          {section.intro && (
            <div className={`mt-5 space-y-3 leading-relaxed text-ink-500 ${hasList ? "" : "max-w-3xl text-lg"}`}>
              {section.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}
          {section.notes?.map((note) => (
            <p key={note} className="mt-5 flex gap-2.5 border-l-2 border-palm-400/60 pl-4 text-sm leading-relaxed text-ink-500">
              <Info className="mt-0.5 size-4 shrink-0 text-palm-600" />
              {note}
            </p>
          ))}
          {section.callout && (
            <div className="mt-6 rounded-2xl border border-palm-600/15 bg-palm-50 p-5">
              <p className="font-display text-sm font-bold text-palm-800">{section.callout.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{section.callout.body}</p>
            </div>
          )}
        </div>

        {hasList && (
          <div>
            {section.listTitle && <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-ink-400 uppercase">{section.listTitle}</p>}
            {section.items && (
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-ink-50/50 px-3.5 py-3 text-sm font-medium text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-palm-600" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.definitions && (
              <dl className="grid gap-3 sm:grid-cols-2">
                {section.definitions.map((d) => (
                  <div key={d.term} className="rounded-2xl border border-ink-100 bg-ink-50/50 p-4">
                    <dt className="flex items-center gap-2 font-display text-sm font-bold text-ink-950">
                      <span className="size-1.5 rounded-full bg-palm-gradient" />
                      {d.term}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">{d.body}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

function ProcessSteps({ title, steps }: { title: string; steps: { title: string; body: string }[] }) {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="How it works" title={title} />
        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute top-7 right-[7%] left-[7%] hidden h-0.5 bg-gradient-to-r from-palm-400 via-palm-600 to-palm-700 opacity-30 xl:block"
          />
          <ol className="relative grid gap-10 xl:grid-cols-7 xl:gap-5">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 120} className="relative flex gap-5 xl:flex-col xl:items-center xl:text-center">
                <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-palm-gradient font-display text-lg font-bold text-white shadow-xl shadow-palm-600/30 ring-8 ring-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-950 xl:mt-6">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function WhyBand({ why, statement }: { why?: Service["why"]; statement?: Service["statement"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial opacity-70" />
      <div aria-hidden className="glow absolute -top-48 left-1/2 -z-10 h-[36rem] w-[80rem] -translate-x-1/2 text-palm-700/30" />
      <div className={`mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 ${why ? "lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" : ""}`}>
        <Reveal className={why ? "" : "mx-auto max-w-3xl text-center"}>
          {why && (
            <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-balance text-white sm:text-4xl">{why.title}</h2>
          )}
          {statement && (
            <figure className={`${why ? "mt-8" : ""} rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8`}>
              <Quote className={`size-8 text-palm-400 ${why ? "" : "mx-auto"}`} />
              {statement.label && (
                <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">{statement.label}</p>
              )}
              <blockquote className="mt-3 font-display text-xl leading-relaxed font-semibold text-white sm:text-2xl">{statement.body}</blockquote>
            </figure>
          )}
        </Reveal>
        {why && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {why.items.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={(i % 2) * 100}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed font-medium text-ink-100 transition hover:border-palm-400/40 hover:bg-white/[0.06]"
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-palm-gradient text-white">
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

type EnquiryPanelProps = { title: string; ctas: string[]; children: ReactNode };

function EnquiryPanel({ title, ctas, children }: EnquiryPanelProps) {
  return (
    <section id="enquiry" className="relative scroll-mt-20 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative isolate grid gap-10 overflow-hidden rounded-[2rem] bg-ink-950 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-14">
            <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial opacity-60" />
            <div aria-hidden className="glow absolute -bottom-64 -left-40 -z-10 size-[40rem] text-palm-600/30" />

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">Get started</p>
              <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 text-ink-400">
                Tell us what you need, and our team will help identify the appropriate service and next steps.
              </p>
              <ol className="mt-8 space-y-5">
                {ctas.map((cta, i) => (
                  <li key={cta} className="flex items-center gap-4">
                    <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-palm-400/30 bg-palm-400/10 text-palm-300">
                      <ArrowRight className="size-5" />
                      <span className="absolute -top-2 -right-2 inline-flex size-5 items-center justify-center rounded-full bg-palm-gradient text-[0.65rem] font-bold text-white">
                        {i + 1}
                      </span>
                    </span>
                    <span className="font-display font-bold text-white">{cta}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a href={telHref(site.phone)} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-palm-400/40">
                  <p className="flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">
                    <Phone className="size-3" /> Phone / WhatsApp
                  </p>
                  <p className="mt-0.5 font-semibold text-white">{site.phone}</p>
                </a>
                <a href={`mailto:${site.email}`} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-palm-400/40">
                  <p className="flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">
                    <Mail className="size-3" /> Email
                  </p>
                  <p className="mt-0.5 truncate font-semibold text-white">{site.email}</p>
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_0_0_1px_rgb(48_204_249/0.35),0_0_60px_-8px_rgb(38_102_239/0.6)] sm:p-8">
              {children}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
