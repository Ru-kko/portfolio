import { ListResponse, MessageRequestArgs, ProyectBase, id } from "@/types";
import { ApiService } from "..";
import { getEducationList, getProtyectsList, postMessage } from "@/lib/graphql";
import { EducationBase } from "@/types/Education";

export class GraphqlApiService implements ApiService {
  private getVoidListResponse<T>(page?: number): ListResponse<T> {
    return {
      docs: [] as T[],
      page: page ?? 1,
      prevPage: page ? page - 1 : null,
      totalPages: 0,
    };
  }

  async getShortProyect(
    page?: number | undefined
  ): Promise<ListResponse<ProyectBase>> {
    const res = await getProtyectsList({ page });

    return res ?? this.getVoidListResponse();
  }

  async sendMessage(msg: MessageRequestArgs): Promise<id> {
    const res = await postMessage({ msg });

    return res as id;
  }

  async getShortEducation(page?: number): Promise<ListResponse<EducationBase>> {
    const res = await getEducationList({ page: page ?? 1 });

    return res ?? this.getVoidListResponse();
  }
}
