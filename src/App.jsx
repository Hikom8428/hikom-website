import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Management from "./pages/Management";
import Media from "./pages/Media";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<Management />} />
        <Route path="/media" element={<Media />} />
        <Route path="/:categorySlug/:itemSlug" element={<ProductDetail />} />
      </Routes>
      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App;