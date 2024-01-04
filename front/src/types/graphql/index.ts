export type gqlResponse<S extends string, T> = {
  [slug in S]: T;
};

export interface gqlListResponse<T> {
  docs: T[];
  page: number;
  totalPages: number;
  prevPage: number | null;
}
