import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/about-us" element={<Navigate to="/about-us" replace />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services" element={<Navigate to="/services" replace />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/teams" element={<Navigate to="/teams" replace />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery" element={<Navigate to="/gallery" replace />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/contact-us" element={<Navigate to="/contact-us" replace />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
