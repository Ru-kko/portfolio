import { useEffect, useState } from "react";

export function useTextChange(data: string[]) {
  const [text, setText] = useState("");

  const write = async (txt: string) => {
    let index = 0;

    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (index >= txt.length) {
          clearInterval(interval);
          resolve();
        }
        index++;
        setText(txt.substring(0, index));
      }, 150);
    });

    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (index === 0) {
          clearInterval(interval);
          resolve();
        }
        setText(txt.substring(0, index));
        index--;
      }, 150);
    });
  };

  useEffect(() => {
    let continueLoop = true;

    const start = (index: number) => {
      if (!continueLoop) return;

      write(data[index]).then(() => {
        if (index < data.length - 1) {
          start(index + 1);
          return;
        }
        start(0);
      });
    };

    start(0);

    return () => {
      continueLoop = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
