"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getService, services, trainingCourseCount, type Service } from "@/lib/services";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type SolutionId = Service["id"];

const tabs: Record<SolutionId, string> = {
  training: "Training",
  it: "IT & BPO",
  hr: "Staffing",
  study: "Study",
};

export function Solutions() {
  const [active, setActive] = useState<SolutionId>("training");
  const current = services.find((s) => s.id === active) ?? services[0];

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
          description="Four service lines, one business partner. Pick a service to see how we help."
        />

        <Reveal className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Solutions" className="grid w-full max-w-md grid-cols-4 gap-1 rounded-2xl border border-ink-100 bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto sm:max-w-none">
            {services.map((s) => (
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
                {tabs[s.id]}
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
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">{current.headline}</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">{current.intro[0]}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.sections.map((section) => (
                <li key={section.id} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-3.5 text-sm font-medium text-ink-700 shadow-sm">
                  <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-palm-600" />
                  {section.title}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
              <Link href={current.href} className="group inline-flex items-center gap-2 font-semibold text-palm-700 hover:text-palm-600">
                Explore {current.navLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={`${current.href}#enquiry`} className="group inline-flex items-center gap-2 font-semibold text-ink-700 hover:text-palm-600">
                Talk to our {tabs[current.id]} team
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
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
    case "training": {
      const disciplines = getService("training").sections.filter((s) => s.id !== "corporate");
      const max = Math.max(...disciplines.map((d) => d.items?.length ?? 0));
      return (
        <>
          <WindowBar title="palmgate-academy / catalogue" />
          <div className="grid grid-cols-3 gap-3">
            {[
              ["Courses", `${trainingCourseCount}+`, `${disciplines.length} disciplines`],
              ["SAP modules", String(disciplines[0].items?.length ?? 0), "S/4HANA"],
              ["Delivery", "Blended", "On-site · Online"],
            ].map(([k, v, d]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[0.65rem] text-ink-400">{k}</p>
                <p className="mt-1 font-display text-sm font-bold text-white sm:text-base">{v}</p>
                <p className="text-[0.65rem] font-semibold text-emerald-300">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs text-ink-400">Courses by discipline</p>
            <div className="mt-4 flex h-36 items-end gap-2">
              {disciplines.map((d) => {
                const h = ((d.items?.length ?? 0) / max) * 100;
                return (
                  <div key={d.id} className="flex flex-1 items-end gap-0.5">
                    <span className="flex-1 rounded-t bg-palm-gradient" style={{ height: `${h}%` }} />
                    <span className="flex-1 rounded-t bg-white/15" style={{ height: `${h * 0.6}%` }} />
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex gap-2 text-center text-[0.6rem] text-ink-400">
              {["SAP", "IT", "AI", "Civil", "Mech", "Business"].map((label) => (
                <span key={label} className="flex-1 truncate">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </>
      );
    }
    case "hr":
      return (
        <>
          <WindowBar title="palmgate-staffing / pipeline" />
          <div className="grid grid-cols-3 gap-3">
            {[
              { stage: "Sourced", roles: ["SAP MM Consultant", "Site Engineer"] },
              { stage: "Shortlisted", roles: ["Warehouse Supervisor", "Java Developer", "Staff Nurse"] },
              { stage: "Joined", roles: ["Accountant"] },
            ].map((col) => (
              <div key={col.stage} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                <p className="mb-2.5 flex items-center justify-between text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">
                  {col.stage}
                  <span className="rounded bg-white/10 px-1.5 text-ink-100">{col.roles.length}</span>
                </p>
                <div className="space-y-2">
                  {col.roles.map((r) => (
                    <div key={r} className="rounded-lg border border-white/10 bg-ink-900 p-2.5">
                      <p className="truncate text-xs font-semibold text-white">{r}</p>
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
            New hiring requirement received, Ajman
          </div>
        </>
      );
    case "it":
      return (
        <>
          <WindowBar title="integrations/sap_sync.py" />
          <pre className="overflow-x-auto font-mono text-xs leading-6 text-ink-100 sm:text-[0.8rem]">
            <code>
              <span className="text-fuchsia-300">from</span> fastapi <span className="text-fuchsia-300">import</span> FastAPI{"\n"}
              <span className="text-fuchsia-300">from</span> .erp <span className="text-fuchsia-300">import</span> sap, procurement{"\n\n"}
              app = <span className="text-palm-300">FastAPI</span>(title=<span className="text-emerald-300">&quot;Palmgate Integrations&quot;</span>){"\n\n"}
              <span className="text-palm-300">@app</span>.post(<span className="text-emerald-300">&quot;/purchase-orders/{"{id}"}/sync&quot;</span>){"\n"}
              <span className="text-fuchsia-300">async def</span> <span className="text-palm-200">sync_po</span>(id: <span className="text-amber-200">int</span>):{"\n"}
              {"    "}po = <span className="text-fuchsia-300">await</span> sap.s4hana.get_po(id){"\n"}
              {"    "}<span className="text-fuchsia-300">return</span> {"{"}{"\n"}
              {"        "}<span className="text-emerald-300">&quot;status&quot;</span>: po.status,{"\n"}
              {"        "}<span className="text-emerald-300">&quot;posted&quot;</span>: <span className="text-fuchsia-300">await</span> procurement.post(po),{"\n"}
              {"    "}{"}"}
            </code>
          </pre>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-xs">
            <span className="text-emerald-300">● 200 OK</span>
            <span className="text-ink-400">POST /purchase-orders/4500021/sync</span>
            <span className="text-palm-300">18 ms</span>
          </div>
        </>
      );
    case "study":
      return (
        <>
          <WindowBar title="palmgate.ae / study-abroad / application" />
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
              ["Profile", "Assessed"],
              ["Shortlist", "Universities"],
              ["Documents", "In review"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="font-display text-sm font-bold text-white">{k}</p>
                <p className="text-[0.65rem] text-ink-400">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs">
            <span className="text-ink-400">Application journey</span>
            <span className="font-display text-base font-bold text-emerald-300">
              4 / {getService("study").process?.steps.length}
            </span>
          </div>
        </>
      );
  }
}
