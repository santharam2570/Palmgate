import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} International | ERP, CRM & Python Development in Dubai, UAE`,
    template: `%s | ${site.name} International`,
  },
  description: site.description,
  keywords: [
    "ERP software Dubai",
    "CRM software UAE",
    "Python development company",
    "SharePoint consultants Dubai",
    "full-stack development Dubai",
    "Odoo implementation UAE",
    "software company Dubai",
    "SAP training Dubai",
    "SAP FICO course Dubai",
    "SAP S/4HANA course online",
  ],
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: `${site.name} International | ${site.tagline}`,
    description: site.description,
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} International`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050822",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable} ${jetbrains.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <noscript>
          <style>{`[data-reveal]{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
