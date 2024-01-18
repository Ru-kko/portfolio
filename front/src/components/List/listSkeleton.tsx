import { HTMLAttributes } from "react";
import style from "./List.module.css";
import { extendsClassName } from "@/utils/client";
import { Loading } from "./items";

export function ListSkeleton(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <section className={style.list_cont} style={{ overflowY: "hidden" }}>
      <ul {...props} className={extendsClassName(style.list, props.className)}>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </ul>
    </section>
  );
}
