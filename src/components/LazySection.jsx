import { Suspense, useEffect, useRef, useState } from "react";

// Defers mounting (and therefore the React.lazy() import()) of a below-the-fold
// section until it's about to scroll into view, instead of loading every
// section's code right after Home mounts.
//
// anchorId must match the section's own element id (e.g. "industries") - if the
// page loads with that hash already in the URL (a deep link from the navbar),
// the section mounts immediately instead of waiting on IntersectionObserver,
// since the target element wouldn't exist yet for scrollIntoView to find.
const LazySection = ({ children, minHeight = 400, anchorId }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    () => typeof window !== "undefined" && !!anchorId && window.location.hash === `#${anchorId}`
  );

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div ref={ref} style={inView ? undefined : { minHeight }}>
      {inView && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

export default LazySection;
