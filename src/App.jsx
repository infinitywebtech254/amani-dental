import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Braces from "./pages/services/Braces";
import TeethWhitening from "./pages/services/TeethWhitening";
import Veneers from "./pages/services/Veneers";
import DentalImplants from "./pages/services/DentalImplants";
import TeethCleaning from "./pages/services/TeethCleaning";
import RootCanal from "./pages/services/RootCanal";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/braces" element={<Braces />} />
        <Route
          path="/services/teeth-whitening"
          element={<TeethWhitening />}
        />
        <Route path="/services/veneers" element={<Veneers />} />
        <Route
          path="/services/dental-implants"
          element={<DentalImplants />}
        />
        <Route
          path="/services/teeth-cleaning"
          element={<TeethCleaning />}
        />
        <Route
          path="/services/root-canal"
          element={<RootCanal />}
        />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/book-consultation"
          element={<BookConsultation />}
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}