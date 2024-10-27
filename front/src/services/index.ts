import type { Education, EducationBase, ExperienceBase, ListResponse, MessageRequestArgs, Proyect, ProyectBase, id } from "@/types";
import { GraphqlApiService } from "./impl/GraphqlApiService";

export interface ApiService {
  sendMessage(msg: MessageRequestArgs): Promise<id>;
  getShortEducation(page?: number): Promise<ListResponse<EducationBase>>;
  getFullEducationInfo(id: string): Promise<Education>;
  getShortProyect(page?: number): Promise<ListResponse<ProyectBase>>;
  getFullProyectInfo(id: string): Promise<Proyect>;
  getShortExperience(page?: number): Promise<ListResponse<ExperienceBase>>;
}

export function getApiService(): ApiService {
  return new GraphqlApiService();
}
