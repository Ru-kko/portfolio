import { MessageRequestArgs, id } from "@/types";
import { GraphqlApiService } from "./impl/GraphqlApiService";

export interface ApiService {
  sendMessage(msg: MessageRequestArgs): Promise<id>;
}

export function getApiService(): ApiService {
  return new GraphqlApiService();
}
