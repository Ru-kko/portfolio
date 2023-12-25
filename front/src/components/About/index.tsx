import { Container, Button, Direction } from "@/components";
import { PropsWithChildren } from "react";
import styles from "./About.module.css";

export function About({ children }: PropsWithChildren) {
  return (
    <div className={styles.about}>
      <Container className={styles.about_me}>
        <h1 className={styles.title}>Jose Sebastian</h1>
        <h3>Web Developer</h3>
        <div className={styles.about_text}>
          <p>
            As a software engineer student with a passion for programming since
            a young age, I have gained in-depth knowledge of various
            technologies, including NodeJS, Java, Spring, Express, SQL, Angular,
            Docker, Git, and much more. I have worked on several personal
            projects that have allowed me to develop my skills and apply my
            knowledge as a software engineer. I am eager to use my expertise in
            developing innovative solutions and contributing to the growth of
            the world.
          </p>
        </div>
        <div className={styles.btn_cont}>
          <Button direction={Direction.LEFT} href="/education">Education</Button>
          <Button direction={Direction.CENTER} href="/proyects">Proyects</Button>
          <Button direction={Direction.RIGHT} href="/contact">Contact</Button>
        </div>
      </Container>
      {children}
    </div>
  );
}
