import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/site";
import { serviceIcons } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div aria-hidden className="glow absolute -top-60 -right-40 size-[44rem] text-palm-200/50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Software services that move your <span className="text-gradient">business forward</span>
            </>
          }
          description="From ERP and CRM implementations to custom Python platforms, we design, build and support the systems your business runs on."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={(i % 3) * 100}>
                <article className="group relative h-full rounded-3xl bg-gradient-to-b from-ink-100 to-ink-100/40 p-px transition duration-500 hover:from-palm-400 hover:to-palm-700 hover:shadow-2xl hover:shadow-palm-600/20">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-8">
                    <div
                      aria-hidden
                      className="glow absolute -top-24 -right-24 size-64 text-palm-400/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="flex items-start justify-between">
                      <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-palm-gradient text-white shadow-lg shadow-palm-600/30 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="size-7" strokeWidth={1.75} />
                      </span>
                      <ArrowUpRight className="size-5 text-ink-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-palm-600" />
                    </div>
                    <h3 className="mt-7 font-display text-xl font-bold text-ink-950">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-500">{service.summary}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-ink-100 pt-6">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink-700">
                          <Check className="size-4 shrink-0 text-palm-600" strokeWidth={2.5} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
