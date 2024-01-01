import { getEnv } from "@/utils/shared";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: getEnv("GRAPHQL_HOST"),
  cache: new InMemoryCache(),
});

export type gqlResponse<S extends string, T> = {
  [slug in S]: T;
}

export type QueryFunction<R, A = undefined> = (
  args: A
) => Promise<R | null | undefined>;

export * from "./Messages";
