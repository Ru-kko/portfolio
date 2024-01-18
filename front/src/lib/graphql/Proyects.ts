import { gql } from "@apollo/client";
import { QueryFunction, client } from ".";
import { ListResponse } from "@/types";
import { ProyectBase } from "@/types/Proyects";
import { gqlResponse } from "@/types/graphql";

const GET_PROYECTS_LIST = gql(`
  query Proyects($page: Int) {
    Proyects(page: $page) {
      docs {
        id
        name
        stack
      }
      page
      totalPages
      prevPage
    }
  }
`);

export const getProtyectsList: QueryFunction<
  ListResponse<ProyectBase>,
  { page?: number }
> = async ({ page }) => {
  const res = await client.query<
    gqlResponse<"Proyects", ListResponse<ProyectBase>>
  >({ query: GET_PROYECTS_LIST, variables: { page: page ?? 1 } });

  return res.data.Proyects;
};
