import { List } from "@/components";
import { ProyectItem } from "@/components/List/items";
import { getApiService } from "@/services";

export default async function ProyectsPage() {
  const data = await getApiService().getShortProyect();

  return <List initialData={data} Component={ProyectItem}></List>;
}
