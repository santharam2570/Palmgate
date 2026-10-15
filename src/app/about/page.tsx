import Link from "next/link";
import { ArrowUpRight, Eye, Target } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { serviceIcons, valueIcons } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhyChoose } from "@/components/WhyChoose";
import { about, coreValues } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Palmgate International FZC LLC",
  description:
    "Palmgate International FZC LLC is a UAE-based business solutions company connecting businesses with technology, skilled talent, professional development and operational support.",
  keywords: ["Palmgate International", "UAE business services"],
  path: "/about",
});

const facts = [
  { label: "Company", value: site.legalName },
  { label: "Head office", value: `${site.city}, ${site.country}` },
  { label: "Service lines", value: services.map((s) => s.navLabel).join(" · ") },
  { label: "Reach", value: "UAE-based companies, local and international talent, and global education" },
];

export default function AboutPage() {
  const [lead, ...rest] = about.body;
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About us"
        title={about.title}
        headline={about.headline}
        actions={[
          { label: "Contact our team", href: "/contact" },
          { label: "Explore our services", href: "#services" },
        ]}
      >
        <dl className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          {facts.map((f, i) => (
            <div key={f.label} className={i ? "mt-4 border-t border-white/10 pt-4" : ""}>
              <dt className="text-[0.65rem] font-semibold tracking-[0.2em] text-palm-300 uppercase">{f.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink-100">{f.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div aria-hidden className="absolute inset-0 bg-grid-light mask-fade-y" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-palm-700 uppercase">Who we are</p>
            <p className="mt-4 font-display text-2xl leading-snug font-semibold text-balance text-ink-950 sm:text-3xl">{lead}</p>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-ink-500 sm:text-lg lg:pt-8">
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-50 py-20 sm:py-24">
        <div aria-hidden className="glow absolute -bottom-60 -left-60 size-[46rem] text-palm-300/40" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
          {[
            { icon: Target, label: "Our Mission", body: about.mission },
            { icon: Eye, label: "Our Vision", body: about.vision },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-sm sm:p-10">
                <div aria-hidden className="glow absolute -top-24 -right-24 size-64 text-palm-300/30" />
                <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-palm-gradient text-white shadow-lg shadow-palm-600/30">
                  <item.icon className="size-7" strokeWidth={1.75} />
                </span>
                <h2 className="relative mt-6 font-display text-2xl font-bold text-ink-950">{item.label}</h2>
                <p className="relative mt-3 text-lg leading-relaxed text-ink-500">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our core values"
            title={
              <>
                The principles behind <span className="text-gradient">every engagement</span>
              </>
            }
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal
                  as="li"
                  key={value.title}
                  delay={(i % 3) * 100}
                  className="group rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-palm-400/50 hover:shadow-xl hover:shadow-palm-600/10"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-palm-50 text-palm-600 transition group-hover:bg-palm-gradient group-hover:text-white">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.body}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-20 overflow-hidden bg-ink-50 py-24 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we do" title="Our services span four connected areas" />
          <ul className="mt-14 grid gap-4 md:grid-cols-2">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.id];
              return (
                <Reveal as="li" key={s.id} delay={(i % 2) * 100}>
                  <Link
                    href={s.href}
                    className="group flex h-full gap-5 rounded-3xl border border-ink-100 bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-palm-400/50 hover:shadow-xl hover:shadow-palm-600/10"
                  >
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-palm-gradient text-white shadow-lg shadow-palm-600/25">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-display text-lg font-bold text-ink-950">
                          <span className="text-palm-600">{s.number}</span> {s.title}
                        </span>
                        <ArrowUpRight className="size-5 shrink-0 text-ink-400 transition group-hover:text-palm-600" />
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-ink-500">{s.summary}</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <WhyChoose />
      <CtaBand className="py-24 sm:py-32" />
    </>
  );
}
