import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Palmgate International UAE | Business Solutions",
    template: "%s | Palmgate International",
  },
  description: site.description,
  keywords: ["Business solutions UAE", "Palmgate International"],
  applicationName: site.legalName,
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: "Palmgate International UAE | Business Solutions",
    description: site.description,
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmgate International UAE | Business Solutions",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050822",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${jakarta.variable} ${sora.variable} ${jetbrains.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <noscript>
          <style>{`[data-reveal]{opacity:1;transform:none}`}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
