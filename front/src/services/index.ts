import { EducationBase, ListResponse, MessageRequestArgs, id } from "@/types";
import { GraphqlApiService } from "./impl/GraphqlApiService";

export interface ApiService {
  sendMessage(msg: MessageRequestArgs): Promise<id>;
  getShortEducation(page?: number): Promise<ListResponse<EducationBase>>;
}

export function getApiService(): ApiService {
  return new GraphqlApiService();
}
