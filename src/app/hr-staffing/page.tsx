import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";

const service = getService("hr");

export const metadata = pageMetadata({ ...service.seo, path: service.href });

export default function HrStaffingPage() {
  return <ServicePage service={service} />;
}
