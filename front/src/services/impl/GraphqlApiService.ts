import type { ListResponse, MessageRequestArgs, ProyectBase, id, Education, EducationBase, Proyect } from "@/types";
import type { ApiService } from "..";
import {
  getEducationList,
  getFullEducation,
  getFullProyect,
  getProtyectsList,
  postMessage,
} from "@/lib/graphql";

export class GraphqlApiService implements ApiService {
  private getVoidListResponse<T>(page?: number): ListResponse<T> {
    return {
      docs: [] as T[],
      page: page ?? 1,
      prevPage: page ? page - 1 : null,
      totalPages: 0,
    };
  }

  async getFullProyectInfo(id: string): Promise<Proyect> {
    const res = await getFullProyect({ id });

    if (res) return res;

    throw new ReferenceError(`Cannot find a Proyect with id: ${id}`);
  }

  async getFullEducationInfo(id: string): Promise<Education> {
    const res = await getFullEducation({ id });

    if (res) return res;

    throw new ReferenceError(`Cannot find a Education with id: ${id}`);
  }

  async getShortProyect(
    page?: number | undefined,
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
