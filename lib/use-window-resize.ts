import { useEffect, useState, useRef } from "react";

export default function useWindowResize(throttleDelay: number = 300) {
  const [width, setWidth] = useState(window?.innerWidth || 0);
  const [height, setHeight] = useState(window?.innerHeight || 0);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    const handleSizeChange = (e: UIEvent) => {
      if (timeoutId.current) {
        return;
      }

      timeoutId.current = window.setTimeout(() => {
        setWidth((e.target as Window).innerWidth);
        setHeight((e.target as Window).innerHeight);
        timeoutId.current = null;
      }, throttleDelay);
    };

    window.addEventListener("resize", handleSizeChange);

    return () => {
      window.removeEventListener("resize", handleSizeChange);
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }
    };
  }, [throttleDelay]);

  return { width, height };
}
