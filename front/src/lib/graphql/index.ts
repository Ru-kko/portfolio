import { GRAPHQL_HOST } from "@/utils/enviroment";
import apollo from "@apollo/client";

export const client = new apollo.ApolloClient({
  uri: GRAPHQL_HOST,
  cache: new apollo.InMemoryCache(),
});

export type QueryFunction<R, A = undefined> = (
  args: A
) => Promise<R | null | undefined>;

export * from "./Messages";
export * from "./Education";
export * from "./Proyects";
