import { getEnv } from "@/utils/shared";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: getEnv("GRAPHQL_HOST"),
  cache: new InMemoryCache(),
});

export type QueryFunction<R, A = undefined> = (
  args: A
) => Promise<R | null | undefined>;

export * from "./Messages";
export * from "./Education";
export * from "./Proyects";
