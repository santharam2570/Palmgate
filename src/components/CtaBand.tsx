import Link from "next/link";
import { ArrowRight, Building, User } from "lucide-react";
import { contactCopy } from "@/lib/company";
import { Reveal } from "./Reveal";

const enquiryLinks = [
  {
    ...contactCopy.audiences[0],
    icon: Building,
    links: [
      { label: "Submit hiring requirements", href: "/hr-staffing#enquiry" },
      { label: "Request a project quotation", href: "/it-solutions#enquiry" },
      { label: "Enquire about corporate training", href: "/training#enquiry" },
    ],
  },
  {
    ...contactCopy.audiences[1],
    icon: User,
    links: [
      { label: "Course enquiry", href: "/training#enquiry" },
      { label: "Study abroad consultation", href: "/study-abroad#enquiry" },
    ],
  },
];

export function CtaBand({ className = "pb-24 sm:pb-32" }: { className?: string }) {
  return (
    <section className={`relative bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 p-8 sm:p-12 lg:p-14">
            <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial opacity-60" />
            <div aria-hidden className="glow absolute -bottom-72 -left-40 -z-10 size-[48rem] text-palm-600/30" />
            <div aria-hidden className="glow absolute -top-48 -right-40 -z-10 size-[36rem] text-palm-400/15" />

            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">Let&apos;s talk</p>
                <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-white sm:text-4xl">
                  {contactCopy.title}
                </h2>
                <p className="mt-5 text-ink-400">{contactCopy.body[0]}</p>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-palm-gradient px-6 py-3.5 font-semibold text-white shadow-xl shadow-palm-600/30 transition-shadow hover:shadow-palm-400/50"
                >
                  Contact our team
                  <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {enquiryLinks.map((group) => (
                  <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-palm-gradient text-white shadow-lg shadow-palm-600/30">
                      <group.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{group.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{group.body}</p>
                    <ul className="mt-5 space-y-1 border-t border-white/10 pt-4">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between gap-3 rounded-lg py-1.5 text-sm font-semibold text-ink-100 transition hover:text-palm-300"
                          >
                            {link.label}
                            <ArrowRight className="size-4 shrink-0 text-palm-400 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
