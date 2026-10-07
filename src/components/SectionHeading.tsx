import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-[0.18em] uppercase ${
          dark ? "border-palm-400/30 bg-palm-400/10 text-palm-300" : "border-palm-600/15 bg-palm-50 text-palm-700"
        }`}
      >
        <span className="size-1.5 rounded-full bg-palm-400 shadow-[0_0_10px] shadow-palm-400" />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-3xl leading-[1.15] font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${dark ? "text-ink-400" : "text-ink-500"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
