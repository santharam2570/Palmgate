import { CapabilityMarquee } from "@/components/CapabilityMarquee";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { HomeIntro } from "@/components/HomeIntro";
import { Industries } from "@/components/Industries";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { WhyChoose } from "@/components/WhyChoose";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { offices, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Palmgate International UAE | Business Solutions",
  description: site.description,
  keywords: ["Business solutions UAE", "Palmgate International"],
  path: "/",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  slogan: site.tagline,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  sameAs: Object.values(site.social),
  address: offices.map((o) => ({
    "@type": "PostalAddress",
    addressLocality: o.city,
    addressCountry: "AE",
  })),
  areaServed: "AE",
  knowsAbout: services.map((s) => s.title),
  contactPoint: offices.map((o) => ({
    "@type": "ContactPoint",
    telephone: o.phone,
    email: o.email,
    contactType: "customer service",
    areaServed: "AE",
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <CapabilityMarquee />
      <HomeIntro />
      <Services />
      <Solutions />
      <WhyChoose />
      <Industries />
      <CtaBand />
    </>
  );
}
