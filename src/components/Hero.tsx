import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Sparkles, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import mark from "@/assets/brand/palmgate-mark.png";
import { homeIntro } from "@/lib/company";
import { studyDestinationOptions } from "@/lib/enquiry";
import { services, trainingCourseCount } from "@/lib/services";
import { site } from "@/lib/site";

const stats = [
  { value: String(services.length), label: "Core service lines", detail: "One business partner" },
  { value: `${trainingCourseCount}+`, label: "Training courses", detail: "Across 6 disciplines" },
  { value: "Global", label: "Talent sourcing", detail: "UAE & international" },
  { value: `${studyDestinationOptions.length - 2}+`, label: "Study destinations", detail: "For UAE residents & more" },
];

function FadeIn({ delay = 0, className = "", children }: { delay?: number; className?: string; children: ReactNode }) {
  return (
    <div className={`animate-fade-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-36 pb-20 sm:pt-44 lg:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial" />
      <div aria-hidden className="glow absolute -top-72 left-1/2 -z-10 h-[56rem] w-[90rem] -translate-x-1/2 text-palm-600/30" />
      <div aria-hidden className="glow absolute top-1/4 -right-60 -z-10 size-[44rem] text-palm-400/15" />
      <div aria-hidden className="glow absolute -bottom-40 -left-60 -z-10 size-[40rem] text-palm-900/50" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-palm-400/25 bg-palm-400/10 py-1 pr-4 pl-1 text-sm text-palm-200">
              <span className="inline-flex items-center gap-1 rounded-full bg-palm-gradient px-2.5 py-0.5 text-xs font-semibold text-white">
                <MapPin className="size-3" /> {site.city}, UAE
              </span>
              {site.legalName}
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="mt-7 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              Your Partner in <span className="text-gradient">Talent, Technology,</span> Training and Global Opportunities
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-6 font-display text-lg font-semibold text-palm-200 sm:text-xl">{homeIntro.tagline}</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-ink-400">{homeIntro.lead}</p>
          </FadeIn>

          <FadeIn delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-palm-gradient px-7 py-4 text-base font-semibold text-white shadow-xl shadow-palm-600/30 transition-shadow hover:shadow-palm-400/50"
            >
              Discuss your requirements
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-palm-400/50 hover:bg-white/10"
            >
              Explore our services
            </a>
          </FadeIn>

          <FadeIn delay={400}>
            <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-ink-950/90 px-5 py-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-xl font-bold whitespace-nowrap text-white sm:text-2xl">{stat.value}</dd>
                  <dd className="mt-1 text-xs font-medium text-palm-300">{stat.label}</dd>
                  <dd className="text-xs text-ink-500">{stat.detail}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <HeroVisual />
        </FadeIn>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div aria-hidden className="glow absolute inset-[4%] animate-pulse-glow text-palm-500/45 will-change-transform" />

      <div aria-hidden className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-palm-400/25 will-change-transform">
        <span className="absolute top-1/2 -left-1.5 size-3 rounded-full bg-palm-400 shadow-[0_0_20px] shadow-palm-400" />
      </div>
      <div aria-hidden className="absolute inset-[11%] animate-spin-reverse rounded-full border border-palm-600/30 will-change-transform">
        <span className="absolute -top-1 left-1/2 size-2 rounded-full bg-palm-300 shadow-[0_0_16px] shadow-palm-300" />
        <span className="absolute right-[6%] bottom-[16%] size-2.5 rounded-full bg-palm-600 shadow-[0_0_16px] shadow-palm-600" />
      </div>
      <div aria-hidden className="absolute inset-[22%] rounded-full border border-white/5 bg-gradient-to-b from-white/[0.06] to-transparent" />

      <div className="absolute inset-[28%] flex animate-float items-center justify-center will-change-transform">
        <Image src={mark} alt="Palmgate palm and gate emblem" priority className="h-auto w-full" />
      </div>

      <div className="absolute top-[2%] -right-2 hidden animate-float-slow rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl shadow-black/40 will-change-transform sm:block sm:w-56">
        <div className="flex items-center justify-between text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">
          HR · Staffing <CheckCircle2 className="size-4 text-emerald-400" />
        </div>
        <p className="mt-2 text-sm font-semibold text-white">Candidate shortlist shared</p>
        <div className="mt-3 flex items-end justify-between">
          <span className="font-display text-xl font-bold text-white">Site Engineer</span>
          <span className="rounded-md bg-emerald-400/10 px-1.5 py-0.5 text-[0.65rem] font-semibold text-emerald-300">UAE</span>
        </div>
      </div>

      <div className="absolute right-[2%] bottom-[2%] hidden w-64 animate-float rounded-2xl border border-white/10 bg-ink-900/95 p-4 font-mono text-[0.7rem] leading-relaxed shadow-2xl shadow-black/40 will-change-transform [animation-delay:-3s] md:block">
        <div className="mb-2 flex gap-1.5">
          <span className="size-2 rounded-full bg-rose-400/80" />
          <span className="size-2 rounded-full bg-amber-300/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
        </div>
        <p>
          <span className="text-palm-300">@app</span>
          <span className="text-ink-400">.post(</span>
          <span className="text-emerald-300">&quot;/enquiries&quot;</span>
          <span className="text-ink-400">)</span>
        </p>
        <p>
          <span className="text-fuchsia-300">async def</span> <span className="text-palm-200">route</span>
          <span className="text-ink-400">(req: Enquiry):</span>
        </p>
        <p className="pl-4">
          <span className="text-fuchsia-300">return await</span> <span className="text-white">palmgate.match(req)</span>
        </p>
      </div>

      <div className="absolute top-[38%] -left-8 hidden w-48 animate-float-slow rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl shadow-black/40 will-change-transform [animation-delay:-5s] sm:block">
        <div className="flex items-center gap-2 text-[0.65rem] font-semibold tracking-wider text-palm-300 uppercase">
          <Sparkles className="size-3.5" /> Training · Upskilling
        </div>
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {[38, 52, 44, 66, 58, 80, 96].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-palm-gradient opacity-90" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-400">
          <TrendingUp className="size-3.5 text-emerald-400" />
          <span className="font-semibold text-white">{trainingCourseCount}+</span> courses
        </p>
      </div>
    </div>
  );
}
