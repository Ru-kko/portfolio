import { gql } from "@apollo/client";
import { QueryFunction, client } from ".";
import { MessageRequestArgs, id } from "@/types";
import { gqlResponse } from "@/types/graphql";

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
    .mutate<gqlResponse<"createMessage", id>>({ mutation: POST_MESSAGE, variables: { msg } });
  return res.data?.createMessage;
};
