import { List } from "@/components";
import { EducationItem } from "@/components/List/items";
import { getApiService } from "@/services";

export default async function EducationPage() {
  const initial = await getApiService().getShortEducation();

  return <List Component={EducationItem} initialData={initial} />;
}
