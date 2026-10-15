import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { about, homeIntro } from "@/lib/company";
import { Reveal } from "./Reveal";

const pillars = ["Build skilled teams", "Access technology solutions", "Streamline operations", "Source the right talent"];

export function HomeIntro() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-24 sm:py-28">
      <div aria-hidden className="glow absolute -bottom-60 -left-60 size-[46rem] text-palm-300/40" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-palm-600/15 bg-palm-50 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] text-palm-700 uppercase">
            <span className="size-1.5 rounded-full bg-palm-400 shadow-[0_0_10px] shadow-palm-400" />
            Who we are
          </span>
          <h2 className="mt-5 font-display text-3xl leading-[1.15] font-bold tracking-tight text-balance text-ink-950 sm:text-4xl lg:text-5xl">
            One Partner. <span className="text-gradient">Multiple Solutions.</span> Global Reach.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">{about.headline}.</p>

          <div className="mt-8 rounded-3xl border border-ink-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] text-palm-700 uppercase">For businesses</p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {pillars.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm font-semibold text-ink-800">
                  <Check className="size-4 shrink-0 text-palm-600" strokeWidth={2.5} />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-ink-100 pt-5 text-xs font-semibold tracking-[0.2em] text-palm-700 uppercase">For individuals</p>
            <p className="mt-2 text-sm font-medium text-ink-700">Develop industry skills and explore global education opportunities.</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pt-14">
          <div className="space-y-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            {homeIntro.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-palm-500 pl-5 font-display text-lg font-semibold text-ink-950">{homeIntro.motto}</p>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-palm-700 hover:text-palm-600">
            More about Palmgate
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
