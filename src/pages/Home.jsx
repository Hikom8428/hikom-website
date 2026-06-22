import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Products from "../sections/Products";
import Industries from "../sections/Industries";
import WhyChoose from "../sections/WhyChoose";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Clients from "../sections/Clients";
import ContactCTA from "../sections/ContactCTA";
import ContactForm from "../sections/ContactForm";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.key, location.hash]);

  return (
    <>
      <Hero />
      <Products />
      <Industries />
      <WhyChoose />
      <Projects />
      <Certifications />
      <Clients />
      <ContactCTA />
      <ContactForm />
    </>
  );
}

export default Home;
