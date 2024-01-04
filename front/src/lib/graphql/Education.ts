import { gql } from "@apollo/client";
import { QueryFunction, client } from ".";
import { gqlListResponse, gqlResponse } from "@/types/graphql";
import { EducationBase } from "@/types/Education";

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
  gqlListResponse<EducationBase>,
  { page?: number }
> = async ({ page }) => {
  const res = await client.query<
    gqlResponse<"Educations", gqlListResponse<EducationBase>>
  >({ query: GET_EDUCATION_LIST, variables: { page: page ?? 1 } });

  return res.data.Educations;
};
