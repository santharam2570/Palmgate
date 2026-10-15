import { SapCourse } from "@/components/SapCourse";
import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";

const service = getService("training");

export const metadata = pageMetadata({ ...service.seo, path: service.href });

export default function TrainingPage() {
  return (
    <ServicePage service={service}>
      <SapCourse />
    </ServicePage>
  );
}
