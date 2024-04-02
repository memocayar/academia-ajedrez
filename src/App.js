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
import Contacto from "./componentes/contacto/Contacto";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="page">
                  <Banner />
                  <Metodologia />
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
                <div className="page"></div>
              </>
            }
          />
          <Route
            path="/beneficios"
            element={
              <>
                <div className="page"></div>
              </>
            }
          />
          <Route
            path="/planes"
            element={
              <>
                <div className="page"></div>
              </>
            }
          />
          <Route
            path="/testimonios"
            element={
              <>
                <div className="page"></div>
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <div className="page">
                  <FullFAQ  />
                </div>
              </>
            }
          />
          <Route
            path="/contactar"
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
