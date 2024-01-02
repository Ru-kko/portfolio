import { PropsWithChildren } from "react";

export default function extraLayout({ children }: PropsWithChildren) {
  return <div className="content-focus"> Hello?? {children}</div>;
}
