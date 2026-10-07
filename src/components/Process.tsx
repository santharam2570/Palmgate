import { industries, processSteps } from "@/lib/site";
import { industryIcons } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A proven path from idea to <span className="text-gradient">go-live</span>
            </>
          }
          description="A delivery process refined across ERP, CRM and custom software projects, so you always know what happens next."
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute top-7 right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-palm-400 via-palm-600 to-palm-700 opacity-30 lg:block"
          />
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-palm-gradient font-display text-lg font-bold text-white shadow-xl shadow-palm-600/30 ring-8 ring-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-950 lg:mt-6">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.body}</p>
              </div>
            </Reveal>
          ))}
          </ol>
        </div>

        <Reveal className="mt-28">
          <div className="rounded-3xl border border-ink-100 bg-ink-50/70 p-8 sm:p-12">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-palm-700 uppercase">Industries</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                  Built for the businesses that power the region
                </h3>
              </div>
              <p className="max-w-md text-ink-500">
                Ready-made accelerators for the industries we know best, customised to the way you operate.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {industries.map((name, i) => {
                const Icon = industryIcons[i];
                return (
                  <li
                    key={name}
                    className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 text-sm font-semibold text-ink-800 transition-[border-color,box-shadow] duration-300 hover:border-palm-400/50 hover:shadow-lg hover:shadow-palm-600/10"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-palm-50 text-palm-600 transition group-hover:bg-palm-gradient group-hover:text-white">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
