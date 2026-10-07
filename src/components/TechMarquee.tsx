import { techStack } from "@/lib/site";

export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <section aria-label="Technologies we work with" className="relative border-y border-white/5 bg-ink-950 py-8">
      <p className="mb-6 text-center text-xs font-semibold tracking-[0.25em] text-ink-500 uppercase">
        Built with technologies trusted worldwide
      </p>
      <div className="group flex overflow-hidden mask-fade-x">
        <ul className="flex shrink-0 animate-marquee items-center gap-4 pr-4 will-change-transform group-hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              aria-hidden={i >= techStack.length}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium whitespace-nowrap text-ink-100/80"
            >
              <span className="size-1.5 rounded-full bg-palm-gradient" />
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
