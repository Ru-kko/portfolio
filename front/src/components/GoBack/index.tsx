"use client";
import { useRouter } from "next/navigation";
import { ReturnIcon } from "..";
import { HTMLAttributes } from "react";

/**
 * An stupid thing that next does  not have
 */
export function GoBackComponent(props : HTMLAttributes<HTMLButtonElement>) {
  const Router = useRouter();

  return (
    <button {...props} onClick={() => Router.back()}>
      <ReturnIcon />
    </button>
  );
}
