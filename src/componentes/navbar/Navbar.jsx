import React from "react";
import "./navbar.css";
import hermarLogo from "../../img/logo-hermar-azul.png";

export default function Navbar() {
  return (
    <div className="my-navbar">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={hermarLogo}
              width="210"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/sobre-hermar">
                    Sobre la academia
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/beneficios">
                    Beneficios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/planes">
                    Planes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/testimonios">
                    Testimonios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/faq">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>

            <div className="contactar">
              <a className="btn btn-outline-success" type="submit" href="/contactar">
                CONTACTAR
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
