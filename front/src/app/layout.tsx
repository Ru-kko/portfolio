import "./globals.css";
import { ReactNode } from "react";
import { About, Background } from "@/components";

export const metadata = {
  title: "Sebastian Vera",
  description: "Generated by create next app",
};

export default function RootLayout({ extra, children }: { children: ReactNode, extra: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Background className="main-cont">
          <About>{children}</About>
          {extra}
        </Background>
      </body>
    </html>
  );
}
