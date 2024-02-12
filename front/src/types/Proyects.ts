import type { TextNode, id, Image } from ".";

export type ProyectStack =
  | "docker"
  | "java"
  | "go"
  | "lua"
  | "lua"
  | "javascript"
  | "typescript"
  | "c_sharp"
  | "nodejs"
  | "oraclesql"
  | "mysql"
  | "sql_server"
  | "React"
  | "angular"
  | "express_js"
  | "spring_boot"
  | "gin_gonic"
  | "fiber"
  | "nextjs"
  | "redux"
  | "nginx"
  | "JWT"
  | "android"
  | "linux"
  | "mongo";

export interface ProyectBase extends id {
  name: string;
  stack: ProyectStack[];
}

export interface Proyect extends ProyectBase {
  description: TextNode[];
  ScreenShots: Image[];
  Repository: string;
}
