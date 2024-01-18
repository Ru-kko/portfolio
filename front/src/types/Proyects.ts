import { id } from ".";

export type ProyectStack =
  | "docker"
  | "java"
  | "go"
  | "lua"
  | "lua"
  | "javascript"
  | "typescript"
  | "c-sharp"
  | "nodejs"
  | "oraclesql"
  | "mysql"
  | "sql-server"
  | "React"
  | "angular"
  | "express-js"
  | "spring-boot"
  | "gin-gonic"
  | "fiber"
  | "nextjs"
  | "redux"
  | "nginx"
  | "JWT"
  | "android"
  | "linux";

export interface ProyectBase extends id {
  name: string;
  stack: ProyectStack[];
}
