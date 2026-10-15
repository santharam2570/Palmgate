import Link from "next/link";
import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type HeroAction = { label: string; href: string };

type PageHeroProps = {
  breadcrumb: string;
  eyebrow: string;
  icon?: LucideIcon;
  title: ReactNode;
  headline?: string;
  description?: ReactNode;
  actions?: HeroAction[];
  children?: ReactNode;
};

export function PageHero({ breadcrumb, eyebrow, icon: Icon, title, headline, description, actions = [], children }: PageHeroProps) {
  const [primary, ...secondary] = actions;
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial" />
      <div aria-hidden className="glow absolute -top-72 left-1/2 -z-10 h-[48rem] w-[80rem] -translate-x-1/2 text-palm-600/30" />
      <div aria-hidden className="glow absolute -right-60 -bottom-60 -z-10 size-[40rem] text-palm-400/15" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex items-center gap-1.5 text-xs font-medium text-ink-400">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-palm-300">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="animate-fade-up [animation-delay:100ms]">
            <span className="inline-flex items-center gap-2 rounded-full border border-palm-400/25 bg-palm-400/10 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] text-palm-300 uppercase">
              {Icon ? <Icon className="size-3.5" /> : <span className="size-1.5 rounded-full bg-palm-400 shadow-[0_0_10px] shadow-palm-400" />}
              {eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {headline && <p className="mt-5 font-display text-lg font-semibold text-gradient sm:text-xl">{headline}</p>}
            {description && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-ink-400">{description}</div>}

            {primary && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={primary.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-palm-gradient px-6 py-3.5 font-semibold text-white shadow-xl shadow-palm-600/30 transition-shadow hover:shadow-palm-400/50"
                >
                  {primary.label}
                  <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
                </a>
                {secondary.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    {...(action.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-colors hover:border-palm-400/50 hover:bg-white/10"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {children && <div className="animate-fade-up [animation-delay:200ms]">{children}</div>}
        </div>
      </div>
    </section>
  );
}
