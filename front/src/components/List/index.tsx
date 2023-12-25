import Link from "next/link";
import style from "./List.module.css";
import { HtmlHTMLAttributes } from "react";
import { containerStyle } from "../Container";
import { extendsClassName } from "@/utils/client";

type ListItem = {
  title: string;
  subtitle: string;
  href?: string;
};

interface IProps extends HtmlHTMLAttributes<HTMLUListElement> {
  data: ListItem[];
  loading?: boolean;
}

export function List({ data, loading, ...props }: IProps) {
  const itemStyle = extendsClassName(containerStyle, style.list_item);

  return (
    <section className={style.list_cont}>
      <ul {...props} className={extendsClassName(style.list, props.className)}>
        {loading === true
          ? Array(5).fill(1).map((_, i) =>
            <li key={i} >
              <div className={extendsClassName(style.loading, itemStyle)}>
                <h2>----------------</h2>
                <h3>------------------------------------------</h3>
              </div>
            </li>)
          : data.map((row, i) => (
            <li key={i}>
                {
                  row.href
                    ? (
                      <Link href={row.href} className={itemStyle}>
                        <h2>{row.title}</h2>
                        <h3>{row.subtitle}</h3>
                      </Link>
                      )
                    : (
                      <button className={itemStyle}>
                        <h2>{row.title}</h2>
                        <h3>{row.subtitle}</h3>
                      </button>
                      )
                }
            </li>
          ))}
      </ul>
    </section>
  );
}
