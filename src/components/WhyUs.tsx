import { FileCheck2, Globe2, Languages, LifeBuoy, LockKeyhole, MapPin, Wallet } from "lucide-react";
import { gccMarkets, offices } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  {
    icon: FileCheck2,
    title: "Compliance built in",
    body: "UAE VAT (FTA), corporate tax, WPS payroll and e-invoicing handled from day one.",
  },
  {
    icon: Wallet,
    title: "Transparent, fixed pricing",
    body: "Clear scope and milestone-based billing. No surprise invoices.",
  },
  {
    icon: LockKeyhole,
    title: "You own the code",
    body: "Full source code and IP handed over, hosted on your own cloud if you prefer.",
  },
  {
    icon: Languages,
    title: "Arabic & English ready",
    body: "Bilingual interfaces with proper right-to-left layouts for GCC users.",
  },
  {
    icon: LifeBuoy,
    title: "SLA-backed support",
    body: "Dedicated support desk with response times agreed in writing.",
  },
];

export function WhyUs() {
  const [hq] = offices;
  return (
    <section id="why" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial opacity-70" />
      <div aria-hidden className="glow absolute -top-48 left-1/2 -z-10 h-[36rem] w-[80rem] -translate-x-1/2 text-palm-700/30" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Why PalmGate"
          title={
            <>
              Local expertise. <span className="text-gradient">Proven delivery.</span>
            </>
          }
          description="A Dubai team that understands GCC business, regulations and culture, delivering enterprise-grade software with the responsiveness of a local partner."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-8 sm:p-10">
              <div aria-hidden className="glow absolute -right-32 -bottom-32 size-[28rem] text-palm-500/20" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">
                  <Globe2 className="size-4" /> Serving the GCC from {hq.city}
                </div>
                <h3 className="mt-4 max-w-md font-display text-2xl font-bold text-white sm:text-3xl">
                  One team, from first workshop to long-term support.
                </h3>
                <p className="mt-4 max-w-lg text-ink-400">
                  The consultants who scope your project are the same people who deliver and support it, all working in your time
                  zone from our {hq.city} office.
                </p>

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-palm-gradient text-white shadow-lg shadow-palm-600/30">
                      <MapPin className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">
                        Headquarters · {hq.utc}
                      </p>
                      <p className="font-display font-bold text-white">
                        {hq.city}, {hq.country}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {gccMarkets.map((market) => (
                      <li
                        key={market}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2.5 text-sm font-medium text-ink-100"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-palm-400 shadow-[0_0_8px] shadow-palm-400" />
                        {market}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:border-palm-400/40 hover:bg-white/[0.06]">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-palm-400/30 bg-palm-400/10 text-palm-300 transition group-hover:bg-palm-gradient group-hover:text-white">
                  <r.icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
