import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <WhatsAppButton />
      <Router>
        <Routes>
          <Route
            path="academia-ajedrez/"
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
            path="academia-ajedrez/sobre-hermar"
            element={
              <>
                <div className="page">
                  <SobreHermar />
                </div>
              </>
            }
          />
          <Route
            path="academia-ajedrez/beneficios"
            element={
              <>
                <div className="page"></div>
              </>
            }
          />
          <Route
            path="academia-ajedrez/planes"
            element={
              <>
                <div className="page">
                  <PlanesPage />
                </div>
              </>
            }
          />
          <Route
            path="academia-ajedrez/testimonios"
            element={
              <>
                <div className="page"></div>
              </>
            }
          />
          <Route
            path="academia-ajedrez/faq"
            element={
              <>
                <div className="page">
                  <FullFAQ  />
                </div>
              </>
            }
          />
          <Route
            path="academia-ajedrez/contactar"
            element={
              <>
                <div className="page">
                  <Contacto/>
                </div>
              </>
            }
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
