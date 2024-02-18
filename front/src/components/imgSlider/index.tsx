import type { Image } from "@/types";
import styles from "./slider.module.css";
import { useState } from "react";

interface Props {
  images: Image[];
  staticPath: string;
}

export function ImageSlider({ images, staticPath }: Props) {
  const [actual, setActual] = useState(0);
  const getIndex = (i: number) =>
    ((i % images.length) + images.length) % images.length;
  // Todo add image modal
  return (
    <article className={styles.container}>
      <div className={styles.capsule}>
        <div className={styles.slider}>
          <div>
            <img
              src={staticPath + images[getIndex(actual - 1)]?.sizes.card.url}
              alt={images[getIndex(actual - 1)]?.alt}
            />
          </div>
          <div>
            <img
              src={staticPath + images[actual]?.sizes.card.url}
              alt={images[actual]?.alt}
            />
          </div>
          <div>
            <img
              src={staticPath + images[getIndex(actual + 1)]?.sizes.card.url}
              alt={images[getIndex(actual + 1)]?.alt}
            />
          </div>
        </div>
      </div>
      <div className={styles.controller}>
        <button
          onClick={() => setActual(getIndex(actual - 1))}
          className={styles.left}
        >
          {"<"}
        </button>
        <button
          onClick={() => setActual(getIndex(actual + 1))}
          className={styles.right}
        >
          {">"}
        </button>
      </div>
    </article>
  );
}
