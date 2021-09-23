import { useEffect, useState, useRef } from "react";

function useHover<T extends HTMLElement>(): [
  React.MutableRefObject<T | null>,
  boolean
] {
  const [value, setValue] = useState(false);

  const ref = useRef<T | null>(null);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return [ref, value];
}

export default useHover;
