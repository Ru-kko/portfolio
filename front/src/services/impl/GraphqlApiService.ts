import { MessageRequestArgs, id } from "@/types";
import { ApiService } from "..";
import { postMessage } from "@/lib/graphql";

export class GraphqlApiService implements ApiService {
  async sendMessage(msg: MessageRequestArgs): Promise<id> {
    const res = await postMessage({ msg });

    return res as id;
  }
}
