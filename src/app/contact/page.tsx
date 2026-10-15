import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Offices } from "@/components/Offices";
import { PageHero } from "@/components/PageHero";
import { contactCopy } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";
import { site, telHref, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Palmgate International | Ajman, UAE",
  description:
    "Contact Palmgate International FZC LLC in Ajman, UAE for recruitment and staffing, IT projects, outsourcing, corporate training, courses and study abroad enquiries.",
  keywords: ["Palmgate contact", "business enquiries UAE"],
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact Us"
        eyebrow="Contact us"
        title={contactCopy.title}
        description={contactCopy.body[0]}
        actions={[
          { label: "Send an enquiry", href: "#enquiry" },
          { label: "WhatsApp us", href: whatsappHref(site.phone) },
        ]}
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          <p className="text-xs font-semibold tracking-[0.2em] text-palm-300 uppercase">Contact our team</p>
          <p className="mt-3 font-display text-lg font-bold text-white">{site.legalName}</p>
          <ul className="mt-4 space-y-3 text-sm text-ink-100">
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-palm-400" /> {site.city}, {site.country}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="size-4 shrink-0 text-palm-400" /> {site.email}
              </a>
            </li>
            <li>
              <a href={telHref(site.phone)} className="flex items-center gap-3 hover:text-white">
                <Phone className="size-4 shrink-0 text-palm-400" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={whatsappHref(site.phone)} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
                <MessageCircle className="size-4 shrink-0 text-palm-400" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </PageHero>

      <Offices />

      <section className="bg-ink-50 pb-20">
        <p className="mx-auto max-w-3xl px-5 text-center font-display text-xl font-semibold text-balance text-ink-950 sm:text-2xl">
          {contactCopy.closing}
        </p>
      </section>

      <Contact />
    </>
  );
}
