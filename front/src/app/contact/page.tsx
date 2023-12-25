"use client";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { extendsClassName } from "@/utils/client";
import { Container } from "@/components";

export default function Contact() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [timeOut, setTime] = useState<ReturnType<typeof setTimeout>| undefined>();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("Unimplemented");
  };

  useEffect(() => {
    if (error) {
      clearTimeout(timeOut);
      setTime(setTimeout(() => {
        setError(undefined);
      }, 3000));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <>
      {error
        ? (
          <Container className={extendsClassName(styles.float)}>
            <h3>❌ Error</h3>
            <p>{error}</p>
          </Container>
          )
        : ""
      }
      <form
        className={styles.contact_form}
        onSubmit={handleSubmit}
        ref={form}
      >
        <label invalid-txt="A title is nedded">
          <input type="text" required placeholder=" " name="title"/>
          <span>Title</span>
        </label>
        <label invalid-txt="Invalid E-Mail">
          <input type="email" required placeholder=" " name="email" />
          <span>Email</span>
        </label>
        <label>
          <textarea
            required
            placeholder="Write someting :)"
            name="content"
            maxLength={400}
          />
          <span>Menssage</span>
        </label>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </>
  );
}
