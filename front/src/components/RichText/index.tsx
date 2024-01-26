import { TextNode } from "@/types/RichText";
import { createElement, JSX } from "react";
import styles from "./RichText.module.css";
import Link from "next/link";
import { extendsClassName } from "@/utils/client";

interface props {
  content: TextNode[];
}

function getClsses(
  bold?: boolean,
  italic?: boolean,
  underline?: boolean,
  strikethrough?: boolean
) {
  const classes = extendsClassName(
    bold ? styles.bold : undefined,
    italic ? styles.italic : undefined,
    underline ? styles.underline : undefined,
    strikethrough ? styles.strikethrough : undefined
  );

  return classes;
}

function BuildNode(props: TextNode): JSX.Element {
  const children = props.children
    ? props.children.map((v, i) => <BuildNode {...v} key={i} />)
    : <></>;

  if (!props.type) {
    const pStyles = getClsses(
      props.bold,
      props.italic,
      props.underline,
      props.strikethrough
    );

    if (!pStyles.match(/^ *$/)) {
      return <span className={pStyles}>{props.text}</span>;
    }

    if (props.children) {
      return <p>{children}</p>;
    }
    return <>{props.text}</>;
  }

  switch (props.type) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "li":
    case "ol":
    case "ul":
      return createElement(props.type, null, children);
    case "link":
      return (
        <Link
          href={props.url || "#"}
          target={props.newTab ? "_blank" : undefined}
        >
          {" "}
          {children}{" "}
        </Link>
      );
  }
}

export function RichText({ content }: props) {
  return (
    <div className={styles.text_container}>
      {content.map((v, i) => (
        <BuildNode {...v} key={i} />
      ))}
    </div>
  );
}
