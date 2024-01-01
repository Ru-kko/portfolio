import { gql } from "@apollo/client";
import { QueryFunction, client } from ".";
import { MessageRequestArgs, id } from "@/types";

const POST_MESSAGE = gql(`
  mutation CreateMessage($msg: mutationMessageInput!) {
    createMessage(data: $msg) {
        id
    }
  }
`);

export const postMessage: QueryFunction<
  id,
  { msg: MessageRequestArgs }
> = async ({ msg }) => {
  const res = await client
    .mutate<id>({ mutation: POST_MESSAGE, variables: { msg } });
  return res.data;
};
