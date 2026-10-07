"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { solutions, type SolutionId } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Solutions() {
  const [active, setActive] = useState<SolutionId>("erp");
  const current = solutions.find((s) => s.id === active) ?? solutions[0];

  return (
    <section id="solutions" className="relative overflow-hidden bg-ink-50 py-24 sm:py-32">
      <div aria-hidden className="glow absolute -bottom-60 -left-60 size-[48rem] text-palm-300/40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title={
            <>
              Deep expertise where it <span className="text-gradient">matters most</span>
            </>
          }
          description="Four core practices, one integrated team. Pick a practice to see how we help."
        />

        <Reveal className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Solutions" className="grid w-full max-w-md grid-cols-4 gap-1 rounded-2xl border border-ink-100 bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto sm:max-w-none">
            {solutions.map((s) => (
              <button
                key={s.id}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={active === s.id}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`rounded-xl px-2 py-2.5 text-sm font-semibold whitespace-nowrap transition-[color,box-shadow] duration-300 sm:px-7 ${
                  active === s.id ? "bg-palm-gradient text-white shadow-lg shadow-palm-600/25" : "text-ink-500 hover:text-ink-900"
                }`}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-12 grid animate-fade-up items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">{current.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">{current.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-3.5 text-sm font-medium text-ink-700 shadow-sm">
                  <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-palm-600" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-palm-700 hover:text-palm-600"
            >
              Talk to a {current.tab} specialist
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative">
            <div aria-hidden className="glow absolute -inset-16 text-palm-500/35" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-950 p-6 shadow-2xl shadow-palm-900/30 sm:p-8">
              <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
              <div className="relative">
                <SolutionVisual id={current.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WindowBar({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center gap-2">
      <span className="size-2.5 rounded-full bg-rose-400/80" />
      <span className="size-2.5 rounded-full bg-amber-300/80" />
      <span className="size-2.5 rounded-full bg-emerald-400/80" />
      <span className="ml-3 text-xs font-medium text-ink-400">{title}</span>
    </div>
  );
}

function SolutionVisual({ id }: { id: SolutionId }) {
  switch (id) {
    case "erp":
      return (
        <>
          <WindowBar title="palmgate-erp / dashboard" />
          <div className="grid grid-cols-3 gap-3">
            {[
              ["Revenue", "AED 1.2M", "+12%"],
              ["Stock value", "AED 486K", "+4%"],
              ["VAT due", "AED 58K", "Q3"],
            ].map(([k, v, d]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[0.65rem] text-ink-400">{k}</p>
                <p className="mt-1 font-display text-sm font-bold text-white sm:text-base">{v}</p>
                <p className="text-[0.65rem] font-semibold text-emerald-300">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs text-ink-400">Monthly sales vs purchases</p>
            <div className="mt-4 flex h-36 items-end gap-2">
              {[45, 60, 52, 70, 64, 82, 75, 92, 86, 98, 90, 100].map((h, i) => (
                <div key={i} className="flex flex-1 items-end gap-0.5">
                  <span className="flex-1 rounded-t bg-palm-gradient" style={{ height: `${h}%` }} />
                  <span className="flex-1 rounded-t bg-white/15" style={{ height: `${h * 0.6}%` }} />
                </div>
              ))}
            </div>
          </div>
        </>
      );
    case "crm":
      return (
        <>
          <WindowBar title="palmgate-crm / pipeline" />
          <div className="grid grid-cols-3 gap-3">
            {[
              { stage: "New", deals: ["Al Noor Trading", "Marina Clinics"] },
              { stage: "Proposal", deals: ["Gulf Logistics", "Zenith Realty", "Oasis Retail"] },
              { stage: "Won", deals: ["Desert Foods"] },
            ].map((col) => (
              <div key={col.stage} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                <p className="mb-2.5 flex items-center justify-between text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">
                  {col.stage}
                  <span className="rounded bg-white/10 px-1.5 text-ink-100">{col.deals.length}</span>
                </p>
                <div className="space-y-2">
                  {col.deals.map((d) => (
                    <div key={d} className="rounded-lg border border-white/10 bg-ink-900 p-2.5">
                      <p className="truncate text-xs font-semibold text-white">{d}</p>
                      <div className="mt-2 h-1 rounded-full bg-white/10">
                        <div className="h-1 w-2/3 rounded-full bg-palm-gradient" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-xs text-emerald-200">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            New WhatsApp enquiry assigned to Sales, Dubai
          </div>
        </>
      );
    case "python":
      return (
        <>
          <WindowBar title="api/main.py" />
          <pre className="overflow-x-auto font-mono text-xs leading-6 text-ink-100 sm:text-[0.8rem]">
            <code>
              <span className="text-fuchsia-300">from</span> fastapi <span className="text-fuchsia-300">import</span> FastAPI{"\n"}
              <span className="text-fuchsia-300">from</span> .erp <span className="text-fuchsia-300">import</span> invoices, vat{"\n\n"}
              app = <span className="text-palm-300">FastAPI</span>(title=<span className="text-emerald-300">&quot;PalmGate API&quot;</span>){"\n\n"}
              <span className="text-palm-300">@app</span>.get(<span className="text-emerald-300">&quot;/invoices/{"{id}"}&quot;</span>){"\n"}
              <span className="text-fuchsia-300">async def</span> <span className="text-palm-200">get_invoice</span>(id: <span className="text-amber-200">int</span>):{"\n"}
              {"    "}inv = <span className="text-fuchsia-300">await</span> invoices.get(id){"\n"}
              {"    "}<span className="text-fuchsia-300">return</span> {"{"}{"\n"}
              {"        "}<span className="text-emerald-300">&quot;total&quot;</span>: inv.total,{"\n"}
              {"        "}<span className="text-emerald-300">&quot;vat&quot;</span>: vat.uae(inv.total),{"\n"}
              {"    "}{"}"}
            </code>
          </pre>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-xs">
            <span className="text-emerald-300">● 200 OK</span>
            <span className="text-ink-400">GET /invoices/2041</span>
            <span className="text-palm-300">18 ms</span>
          </div>
        </>
      );
    case "fullstack":
      return (
        <>
          <WindowBar title="https://your-brand.com" />
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between">
              <span className="h-2.5 w-20 rounded-full bg-palm-gradient" />
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-2 w-8 rounded-full bg-white/15" />
                ))}
              </div>
            </div>
            <div className="mt-6 h-4 w-3/4 rounded-full bg-white/80" />
            <div className="mt-2.5 h-4 w-1/2 rounded-full bg-palm-gradient" />
            <div className="mt-4 h-2 w-2/3 rounded-full bg-white/15" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-white/15" />
            <div className="mt-5 flex gap-2">
              <span className="h-7 w-24 rounded-lg bg-palm-gradient" />
              <span className="h-7 w-20 rounded-lg border border-white/20" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              ["Next.js", "Front-end"],
              ["Tailwind", "Design"],
              ["Python", "Back-end"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="font-display text-sm font-bold text-white">{k}</p>
                <p className="text-[0.65rem] text-ink-400">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs">
            <span className="text-ink-400">Lighthouse performance</span>
            <span className="font-display text-base font-bold text-emerald-300">98</span>
          </div>
        </>
      );
  }
}
