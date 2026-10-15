const capabilities = [
  "SAP S/4HANA",
  "ERP Implementation",
  "Artificial Intelligence",
  "Corporate Upskilling",
  "Web Development",
  "Digital Marketing",
  "Medical Coding",
  "Supply Chain Outsourcing",
  "Business Process Outsourcing",
  "UAE Recruitment",
  "International Talent Sourcing",
  "Contract Staffing",
  "HR Consultancy",
  "University Admissions",
  "Study Abroad Guidance",
];

export function CapabilityMarquee() {
  const items = [...capabilities, ...capabilities];
  return (
    <section aria-label="Our capabilities" className="relative border-y border-white/5 bg-ink-950 py-8">
      <p className="mb-6 text-center text-xs font-semibold tracking-[0.25em] text-ink-500 uppercase">
        Training · Technology · Talent · Global education
      </p>
      <div className="group flex overflow-hidden mask-fade-x">
        <ul className="flex shrink-0 animate-marquee items-center gap-4 pr-4 will-change-transform group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= capabilities.length}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium whitespace-nowrap text-ink-100/80"
            >
              <span className="size-1.5 rounded-full bg-palm-gradient" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
