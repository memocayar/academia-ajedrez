import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Banner from "./componentes/banner/Banner";
import ClaseDiagnostico from "./componentes/claseDiagnostico/ClaseDiagnostico";
import Footer from "./componentes/footer/Footer";
import FAQ from "./componentes/faq/FAQ";
import Metodologia from "./componentes/metodologia/Metodologia";
import Navbar from "./componentes/navbar/Navbar";
import Planes from "./componentes/planes/Planes";
import Testimonios from "./componentes/testimonios/Testimonios";
import FullFAQ from "./componentes/faq/FullFAQ";
import Instructores from "./componentes/instructores/Instructores";
import WhatsAppButton from "./componentes/whatsapp";
import SobreHermar from "./componentes/sobre-hermar/SobreHermar";
import Contacto from "./componentes/contacto/Contacto";
import PlanesPage from "./componentes/planes/PlanesPage";
import ContactoPage from "./componentes/contacto/ContactoPage";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -window.innerHeight / 2 + element.getBoundingClientRect().height / 2;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

export default function App() {
  return (
    <div className="App">
      <Router basename="/">
        <ScrollToTop />
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="page">
                  <Banner />
                  <Metodologia />
                  <Instructores />
                  <Planes />
                  <ClaseDiagnostico />
                  <Testimonios />
                  <FAQ />
                </div>
              </>
            }
          />
          <Route
            path="/sobre-hermar"
            element={
              <>
                <div className="page">
                  <SobreHermar />
                </div>
              </>
            }
          />
          <Route
            path="/planes"
            element={
              <>
                <div className="page">
                  <PlanesPage />
                </div>
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <div className="page">
                  <FullFAQ />
                </div>
              </>
            }
          />
          <Route
            path="/contactar"
            element={
              <>
                <div className="page">
                  <ContactoPage />
                </div>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
