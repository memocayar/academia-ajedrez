import "./App.css";
import Banner from "./componentes/banner/Banner";
import ClaseDiagnostico from "./componentes/claseDiagnostico/ClaseDiagnostico";
import Footer from "./componentes/footer/Footer";
import FAQ from "./componentes/faq/FAQ";
import Metodologia from "./componentes/metodologia/Metodologia";
import Navbar from "./componentes/navbar/Navbar";
import Planes from "./componentes/planes/Planes";
import Testimonios from "./componentes/testimonios/Testimonios";

function App() {
  return(
    <div className="App">
      <Navbar />
      <Banner />
      <Metodologia />
      <Planes />
      <ClaseDiagnostico />
      <Testimonios />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App;