import { GRAPHQL_HOST } from "@/utils/enviroment";
import { ApolloClient, InMemoryCache } from "@apollo/client/index.js";

export const client = new ApolloClient({
  uri: GRAPHQL_HOST,
  cache: new InMemoryCache(),
});

export type QueryFunction<R, A = undefined> = (
  args: A
) => Promise<R | null | undefined>;

export * from "./Messages";
export * from "./Education";
export * from "./Proyects";
export * from "./Experience";
