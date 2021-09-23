import { useState, useMemo, useEffect } from "react";

function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = (event: MediaQueryListEvent) => setMatch(event.matches);

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [mediaQuery]);

  return match;
}

export default useMediaQuery;
