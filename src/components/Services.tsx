import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { serviceIcons } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div aria-hidden className="glow absolute -top-60 -right-40 size-[44rem] text-palm-200/50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our core services"
          title={
            <>
              Integrated solutions for <span className="text-gradient">businesses and individuals</span>
            </>
          }
          description="Corporate training, technology and outsourcing, recruitment and staffing, and international education support, brought together under one trusted business partner."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={(i % 2) * 100}>
                <Link
                  href={service.href}
                  className="group relative block h-full rounded-3xl bg-gradient-to-b from-ink-100 to-ink-100/40 p-px transition duration-500 hover:from-palm-400 hover:to-palm-700 hover:shadow-2xl hover:shadow-palm-600/20"
                >
                  <article className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-8 sm:p-10">
                    <div
                      aria-hidden
                      className="glow absolute -top-24 -right-24 size-64 text-palm-400/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -bottom-6 font-display text-[7rem] leading-none font-extrabold tracking-tighter text-ink-50 transition duration-700 select-none group-hover:text-palm-50"
                    >
                      {service.number}
                    </span>
                    <div className="relative flex items-start justify-between">
                      <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-palm-gradient text-white shadow-lg shadow-palm-600/30 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="size-7" strokeWidth={1.75} />
                      </span>
                      <ArrowUpRight className="size-5 text-ink-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-palm-600" />
                    </div>
                    <p className="relative mt-7 text-xs font-semibold tracking-[0.2em] text-palm-700 uppercase">{service.number}</p>
                    <h3 className="relative mt-2 font-display text-2xl font-bold text-ink-950">{service.title}</h3>
                    <p className="relative mt-3 leading-relaxed text-ink-500">{service.summary}</p>
                    <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-ink-100 pt-6">
                      {service.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-palm-700">
                      Explore {service.navLabel}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
