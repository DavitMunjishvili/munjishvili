import { useEffect, useState } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxHeight = document.body.clientHeight - window.innerHeight;
      const scroll = (window.scrollY / maxHeight) * 100;
      setScroll(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
}
