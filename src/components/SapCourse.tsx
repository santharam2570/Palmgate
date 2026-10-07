import { BadgeCheck, MapPin } from "lucide-react";
import { sapHighlights, sapTrainers, sapTracks, trackHours } from "@/lib/sap-course";
import { offices, site } from "@/lib/site";
import { sapHighlightIcons } from "./icons";
import { Reveal } from "./Reveal";
import { SapCourseExplorer } from "./SapCourseExplorer";
import { SectionHeading } from "./SectionHeading";

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: sapTracks.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: t.title,
      description: t.summary,
      url: `${site.url}/#sap-training`,
      provider: { "@type": "Organization", name: site.legalName, sameAs: site.url },
      offers: [{ "@type": "Offer", category: "Paid", price: t.fees.aed, priceCurrency: "AED" }],
      hasCourseInstance: [
        ...offices.map((o) => ({
          "@type": "CourseInstance",
          courseMode: "Onsite",
          location: `${o.city}, ${o.country}`,
          courseWorkload: `PT${trackHours(t)}H`,
        })),
        { "@type": "CourseInstance", courseMode: "Online", courseWorkload: `PT${trackHours(t)}H` },
      ],
    },
  })),
};

export function SapCourse() {
  return (
    <section id="sap-training" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd).replace(/</g, "\\u003c") }}
      />
      <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div aria-hidden className="glow absolute -top-60 -left-40 size-[44rem] text-palm-200/50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="SAP Training"
          title={
            <>
              Become a job-ready <span className="text-gradient">SAP S/4HANA</span> consultant
            </>
          }
          description="Hands-on SAP courses in Dubai and online, taught by consultants who implement SAP for a living. Pick a course to see the syllabus, schedule and fees."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sapHighlights.map((h, i) => {
            const Icon = sapHighlightIcons[i];
            return (
              <Reveal as="li" key={h.title} delay={i * 100} className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-palm-gradient text-white shadow-lg shadow-palm-600/25">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-ink-950">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{h.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-20">
          <SapCourseExplorer>
            <SapTrainers />
          </SapCourseExplorer>
        </div>
      </div>
    </section>
  );
}

function SapTrainers() {
  return (
    <div className="mt-24">
      <Reveal className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-palm-700 uppercase">Your trainers</p>
          <h3 className="mt-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl">Learn from consultants, not just instructors</h3>
        </div>
        <p className="max-w-md text-ink-500">
          Every trainer is a certified SAP consultant who still works on live client projects, so you learn how SAP is really used.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sapTrainers.map((trainer, i) => (
          <Reveal
            as="li"
            key={trainer.name}
            delay={(i % 4) * 100}
            className="flex flex-col rounded-3xl border border-ink-100 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-palm-400/50 hover:shadow-xl hover:shadow-palm-600/10"
          >
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-palm-gradient font-display text-lg font-bold text-white shadow-lg shadow-palm-600/25"
              >
                {trainer.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div className="min-w-0">
                <p className="font-display font-bold text-ink-950">{trainer.name}</p>
                <p className="text-sm text-ink-500">{trainer.role}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-palm-50 px-2.5 py-1 text-palm-700">{trainer.years}+ yrs experience</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-ink-50 px-2.5 py-1 text-ink-700">
                <MapPin className="size-3" /> {trainer.location}
              </span>
              {trainer.tracks.map((id) => (
                <span key={id} className="rounded-full bg-ink-50 px-2.5 py-1 text-ink-700">
                  SAP {sapTracks.find((t) => t.id === id)?.tab}
                </span>
              ))}
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">{trainer.bio}</p>

            <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5">
              {trainer.credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-xs font-medium text-ink-700">
                  <BadgeCheck className="size-4 shrink-0 text-palm-600" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
