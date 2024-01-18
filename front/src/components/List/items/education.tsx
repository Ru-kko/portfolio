import { EducationBase } from "@/types";
import shared from "./css/shared.module.css";
import style from "./css/education.module.css";
import Link from "next/link";
import { extendsClassName } from "@/utils/client";

export function EducationItem(props: EducationBase) {
  return (
    <li className={shared.item}>
      <Link
        href={"/education/" + props.id}
        className={extendsClassName(shared.background, style.link)}
      >
        <h2 className={style.title}>{props.title}</h2>
        <div className={style.subtitle}>
          <h3>{props.from}</h3>
          <span className={style[props.type]}>
            {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
          </span>
        </div>
      </Link>
    </li>
  );
}
