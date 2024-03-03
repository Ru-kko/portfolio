export const GRAPHQL_HOST: string =
  process.env.GRAPHQL_HOST ?? import.meta.env.GRAPHQL_HOST ?? "";
export const STATIC_PATH: string =
  process.env.STATIC_PATH ?? import.meta.env.STATIC_PATH ?? "";
export const APP_DOMAIN: string =
  process.env.APP_DOMAIN ?? import.meta.env.APP_DOMAIN ?? "";
