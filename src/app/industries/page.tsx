import { Building, Check } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Industries } from "@/components/Industries";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Industries We Serve | Palmgate International UAE",
  description:
    "Palmgate supports IT, manufacturing, engineering, logistics, healthcare, construction, retail and hospitality organizations in the UAE with training, technology, outsourcing and workforce solutions.",
  keywords: ["Industries we serve UAE", "Palmgate International", "industry recruitment UAE"],
  path: "/industries",
});

const recruitment = getService("hr").sections.find((s) => s.id === "industries")!;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Industries We Serve"
        eyebrow="Industries we serve"
        icon={Building}
        title="Industry-Specific Solutions for UAE Businesses"
        description="Palmgate brings training, technology, outsourcing and staffing capabilities to organizations across multiple sectors, shaped around each client's requirements."
        actions={[
          { label: "Discuss your requirements", href: "/contact" },
          { label: "View industries", href: "#industries" },
        ]}
      />

      <Industries detailed />

      <section className="relative overflow-hidden bg-ink-50 py-24 sm:py-28">
        <div aria-hidden className="glow absolute -top-60 -right-60 size-[46rem] text-palm-200/50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Recruitment coverage"
            title="Industry-specific recruitment"
            description={recruitment.listTitle}
          />
          <Reveal className="mt-14">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {recruitment.items?.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-white px-4 py-3.5 text-sm font-medium text-ink-700 shadow-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-palm-600" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            {recruitment.notes?.map((note) => (
              <p key={note} className="mt-6 text-center text-sm text-ink-500">
                {note}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand className="py-24 sm:py-32" />
    </>
  );
}
