import { ProyectBase } from "@/types";
import shared from "./css/shared.module.css";
import style from "./css/proyect.module.css";
import Link from "next/link";
import { IconChip } from "@/components";

export function ProyectItem(props: ProyectBase) {
  return (
    <li className={shared.item}>
      <Link href={"/proyects/" + props.id} className={shared.background}>
        <h2>{props.name}</h2>
        <div className={style.stack}>
          {props.stack.map((stk, i) => (
            <IconChip name={stk} key={i} />
          ))}
        </div>
      </Link>
    </li>
  );
}
