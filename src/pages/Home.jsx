import { lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import WhyChoose from "../sections/WhyChoose";
import ContactCTA from "../sections/ContactCTA";
import ContactForm from "../sections/ContactForm";
import LazySection from "../components/LazySection";

// Each of these only loads once it's about to scroll into view, instead of all
// loading right after Hero mounts.
const Products = lazy(() => import("../sections/Products"));
const Industries = lazy(() => import("../sections/Industries"));
const Projects = lazy(() => import("../sections/Projects"));
const Certifications = lazy(() => import("../sections/Certifications"));
const Clients = lazy(() => import("../sections/Clients"));

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    // The target section may be a lazy-loaded chunk that hasn't finished mounting
    // yet, so retry briefly instead of a single immediate querySelector attempt.
    let attempts = 0;
    let timeoutId;
    const tryScroll = () => {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 20) {
        attempts += 1;
        timeoutId = setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
    return () => clearTimeout(timeoutId);
  }, [location.key, location.hash]);

  return (
    <>
      <Hero />
      <LazySection anchorId="products">
        <Products />
      </LazySection>
      <LazySection anchorId="industries">
        <Industries />
      </LazySection>
      <WhyChoose />
      <LazySection anchorId="projects">
        <Projects />
      </LazySection>
      <LazySection anchorId="certifications">
        <Certifications />
      </LazySection>
      <LazySection anchorId="clients">
        <Clients />
      </LazySection>
      <ContactCTA />
      <ContactForm />
    </>
  );
}

export default Home;
