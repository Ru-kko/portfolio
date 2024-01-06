import { ListResponse, MessageRequestArgs, id } from "@/types";
import { ApiService } from "..";
import { getEducationList, postMessage } from "@/lib/graphql";
import { EducationBase } from "@/types/Education";

export class GraphqlApiService implements ApiService {
  async sendMessage(msg: MessageRequestArgs): Promise<id> {
    const res = await postMessage({ msg });

    return res as id;
  }

  async getShortEducation(
    page?: number
  ): Promise<ListResponse<EducationBase>> {
    const res = await getEducationList({ page: page ?? 1 });

    return (
      res ?? {
        docs: [] as EducationBase[],
        page: page ?? 1,
        prevPage: page ? page - 1 : null,
        totalPages: 0,
      }
    );
  }
}
