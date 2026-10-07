import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { offices } from "@/lib/site";
import { LiveClock } from "./LiveClock";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Offices() {
  return (
    <section id="offices" className="relative overflow-hidden bg-ink-50 py-24 sm:py-32">
      <div aria-hidden className="glow absolute -top-20 -right-60 size-[46rem] text-palm-300/40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our office"
          title={
            <>
              Visit us in <span className="text-gradient">Dubai</span>
            </>
          }
          description="Meet our consultants and course advisors in person, or reach us by phone, email or WhatsApp."
        />

        {offices.map((office) => (
          <div key={office.id} className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-sm transition duration-500 hover:shadow-2xl hover:shadow-palm-600/10 sm:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -bottom-8 font-display text-[7rem] leading-none font-extrabold tracking-tighter text-ink-50 transition duration-700 select-none group-hover:text-palm-50 sm:text-[9rem]"
                >
                  {office.city}
                </span>
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="rounded-full bg-palm-gradient px-3.5 py-1 text-xs font-semibold tracking-wider text-white uppercase">
                      {office.label}
                    </span>
                    <span className="text-2xl font-bold text-ink-950">
                      <LiveClock timeZone={office.timeZone} />
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-3xl font-bold text-ink-950">
                    {office.city}, <span className="text-ink-400">{office.country}</span>
                  </h3>
                  <p className="mt-2 text-ink-500">{office.role}</p>

                  <ul className="mt-8 space-y-4 text-sm">
                    {office.address && (
                      <li className="flex gap-3 text-ink-700">
                        <MapPin className="mt-0.5 size-5 shrink-0 text-palm-600" />
                        <span>
                          {office.address.join(", ")}
                          {office.mapUrl && (
                            <a
                              href={office.mapUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-1.5 flex w-fit items-center gap-1 font-semibold text-palm-700 hover:text-palm-600"
                            >
                              Get directions <ArrowUpRight className="size-4" />
                            </a>
                          )}
                        </span>
                      </li>
                    )}
                    <li>
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex gap-3 text-ink-700 hover:text-palm-700">
                        <Phone className="size-5 shrink-0 text-palm-600" />
                        {office.phone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${office.email}`} className="flex gap-3 text-ink-700 hover:text-palm-700">
                        <Mail className="size-5 shrink-0 text-palm-600" />
                        {office.email}
                      </a>
                    </li>
                  </ul>
                  <p className="mt-8 text-xs font-medium tracking-wider text-ink-400 uppercase">{office.utc} · Mon–Fri, 9:00–18:00</p>
                </div>
              </article>
            </Reveal>

            {office.mapQuery && (
              <Reveal delay={120}>
                <div className="h-full min-h-80 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
                  <iframe
                    title={`Map of the PalmGate ${office.city} office`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-full min-h-80 w-full border-0 sm:min-h-96"
                  />
                </div>
              </Reveal>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
