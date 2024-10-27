import { gql } from "@apollo/client/index.js";
import { client, type QueryFunction } from ".";
import type { ExperienceBase, ListResponse } from "@/types";
import type { gqlResponse } from "@/types/graphql";

const GET_EXPERIENCE_LIST = gql(`
  query Experiences($page: Int) {
    Experiences(page: $page) {
      docs {
        id
        job
        company
        stack
        start_date
        end_date
      }
      page
      totalPages
      prevPage
    }
  }
`);

export const getExperienceList: QueryFunction<
  ListResponse<ExperienceBase>,
  { page?: number }
> = async ({ page }) => {
  const res = await client.query<
    gqlResponse<"Experiences", ListResponse<ExperienceBase>>
  >({ query: GET_EXPERIENCE_LIST, variables: { page: page ?? 1 } });

  return res.data.Experiences;
};
