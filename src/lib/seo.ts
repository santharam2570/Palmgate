import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = { title: string; description: string; keywords: string[]; path: string };

export function pageMetadata({ title, description, keywords, path }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.legalName, locale: "en_AE", url: path, title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}
