import { useEffect, useState } from "react";

// Below 1024px (covers phones and tablets), skip the three.js bundle entirely -
// only true desktop viewports load ThreeScene.
const QUERY = "(max-width: 1023px)";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};
