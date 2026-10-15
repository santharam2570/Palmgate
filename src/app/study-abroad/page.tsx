import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";

const service = getService("study");

export const metadata = pageMetadata({ ...service.seo, path: service.href });

export default function StudyAbroadPage() {
  return <ServicePage service={service} />;
}
