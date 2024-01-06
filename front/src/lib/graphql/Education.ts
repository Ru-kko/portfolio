import { gql } from "@apollo/client";
import { QueryFunction, client } from ".";
import { gqlResponse } from "@/types/graphql";
import { EducationBase, ListResponse } from "@/types";

const GET_EDUCATION_LIST = gql(`
  query Educations {
    Educations(page: $page) {
      docs {
        id
        title
        type
        from
      }
      page
      totalPages
      prevPage
    }
  }
`);

export const getEducationList: QueryFunction<
  ListResponse<EducationBase>,
  { page?: number }
> = async ({ page }) => {
  const res = await client.query<
    gqlResponse<"Educations", ListResponse<EducationBase>>
  >({ query: GET_EDUCATION_LIST, variables: { page: page ?? 1 } });

  return res.data.Educations;
};
