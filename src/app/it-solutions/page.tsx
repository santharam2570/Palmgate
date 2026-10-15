import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";

const service = getService("it");

export const metadata = pageMetadata({ ...service.seo, path: service.href });

export default function ItSolutionsPage() {
  return <ServicePage service={service} />;
}
