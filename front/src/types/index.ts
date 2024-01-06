export interface id {id: string}

export interface ListResponse<T> {
  docs: T[];
  page: number;
  totalPages: number;
  prevPage: number | null;
}

export * from "./Message";
export * from "./Education";
