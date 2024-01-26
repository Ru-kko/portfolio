import { RichText } from "@/components/RichText";
import { getApiService } from "@/services";
import { ApolloError } from "@apollo/client";
import { redirect } from "next/navigation";

export default async function DetailedEducationPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const data = await getApiService().getFullEducationInfo(params.id);

    return <RichText content={data.description} />;
  } catch (e) {
    if (!(e instanceof ApolloError && e.message !== "The requested resource was not found.")) {
      console.error(e);
    }
    redirect("/");
  }
}
