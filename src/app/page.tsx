import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Offices } from "@/components/Offices";
import { Process } from "@/components/Process";
import { SapCourse } from "@/components/SapCourse";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { TechMarquee } from "@/components/TechMarquee";
import { WhyUs } from "@/components/WhyUs";
import { offices, site } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  email: site.email,
  description: site.description,
  sameAs: Object.values(site.social),
  address: offices.filter((o) => o.address).map((o) => ({
    "@type": "PostalAddress",
    addressLocality: o.city,
    addressCountry: o.country,
  })),
  contactPoint: offices.map((o) => ({
    "@type": "ContactPoint",
    telephone: o.phone,
    email: o.email,
    contactType: "sales",
    areaServed: ["AE", "SA", "QA", "OM", "BH", "KW"],
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <Services />
        <Solutions />
        <SapCourse />
        <WhyUs />
        <Process />
        <Offices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
