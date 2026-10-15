import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { industries, industriesNote } from "@/lib/company";
import { getService } from "@/lib/services";
import { industryIcons } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Industries({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="industries" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Industries we serve"
          title={
            <>
              Supporting the industries that <span className="text-gradient">power the UAE</span>
            </>
          }
          description="We support organizations across technology, engineering, logistics, healthcare, construction and service sectors with training, technology, outsourcing and workforce solutions."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industryIcons[industry.id];
            return (
              <Reveal
                as="li"
                key={industry.id}
                delay={(i % 3) * 100}
                className="group flex flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-palm-400/50 hover:shadow-lg hover:shadow-palm-600/10"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-palm-50 text-palm-600 transition group-hover:bg-palm-gradient group-hover:text-white">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{industry.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{industry.body}</p>
                {detailed && (
                  <div className="mt-6 border-t border-ink-100 pt-5">
                    <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-ink-400 uppercase">Related services</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {industry.services.map((id) => {
                        const service = getService(id);
                        return (
                          <li key={id}>
                            <Link
                              href={service.href}
                              className="inline-flex rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700 transition hover:bg-palm-50 hover:text-palm-700"
                            >
                              {service.navLabel}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-ink-50/70 px-6 py-5 sm:flex-row">
          <p className="flex items-center gap-2.5 text-sm text-ink-500">
            <Info className="size-4 shrink-0 text-palm-600" />
            {industriesNote}
          </p>
          {!detailed && (
            <Link href="/industries" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-palm-700 hover:text-palm-600">
              Explore industries
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
