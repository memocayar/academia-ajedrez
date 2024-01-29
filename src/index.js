import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Banner } from "./componentes/Banner/Banner";
import { clasediagnostico } from "./componentes/Clase Diagnostico/clasediagnostico";
import { footer } from "./componentes/Footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<>
    {footer()}

</>);
