import { EducationBase, ListResponse, MessageRequestArgs, ProyectBase, id } from "@/types";
import { GraphqlApiService } from "./impl/GraphqlApiService";

export interface ApiService {
  sendMessage(msg: MessageRequestArgs): Promise<id>;
  getShortEducation(page?: number): Promise<ListResponse<EducationBase>>;
  getShortProyect(page?: number): Promise<ListResponse<ProyectBase>>;
}

export function getApiService(): ApiService {
  return new GraphqlApiService();
}
