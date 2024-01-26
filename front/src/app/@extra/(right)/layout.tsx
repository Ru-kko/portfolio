import { PropsWithChildren } from "react";
import { HouseIcon } from "@/components";
import { GoBackComponent } from "@/components/GoBack";
import { extendsClassName } from "@/utils/client";
import style from "./right.module.css";
import Link from "next/link";

export default function extraLayout({ children }: PropsWithChildren) {
  return (
    <div className={extendsClassName("content-focus", style.container)}>
      <div className={style.content_nav}>
        <GoBackComponent />
        <Link className={style.house} href="/">
          <HouseIcon />
        </Link>
      </div>
      <section>{children}</section>
    </div>
  );
}
