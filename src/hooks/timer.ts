import { useEffect, useRef } from "react";

export const useInterval = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: Function,
  delay: number,
  condition = true
): void => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (savedCallback?.current) {
        savedCallback?.current();
      }
    };
    if (delay && condition) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, condition]);
};
