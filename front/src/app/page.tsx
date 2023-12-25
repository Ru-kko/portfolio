import { ColombiaFlag, GithubLogo, LogCode, MessageIcon } from "@/components";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const bornDate = new Date(2003, 1, 8);

  return (
    <div className={styles.home_page}>
      <LogCode
        text={["web developer", "from colombia", "learn quickly", "gamer"]}
      />
      <div className={styles.data}>
        <div className={styles.rowdata}>
          <span>Born Date:</span>
          <p>
            {bornDate.toLocaleDateString() + " "}(
            {new Date().getFullYear() - bornDate.getFullYear()})
          </p>
        </div>
        <div className={styles.rowdata}>
          <span>Location:</span>
          <p>
            <ColombiaFlag className={styles.country_flag} />
            {" Colombia"}
          </p>
        </div>
      </div>
      <div className={styles.links}>
        <Link href={"https://github.com/Ru-kko/portfolio"}>
          <GithubLogo />
          <h3>Source</h3>
        </Link>
        <Link href={"/contact"}>
          <MessageIcon />
          <h3>Contact</h3>
        </Link>
      </div>
    </div>
  );
}
