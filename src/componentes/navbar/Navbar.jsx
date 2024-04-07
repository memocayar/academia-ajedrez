import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import hermarLogo from "../../img/logo-hermar-azul.png";

export default function Navbar() { 
  return (
    <div className="my-navbar">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={hermarLogo}
              width="210"
              className="d-inline-block align-text-top"
              alt="Hermar Logo"
            />
          </Link>
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
                <Link className="nav-link active" to="/sobre-hermar">
                  Sobre la academia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/beneficios">
                  Beneficios del Ajedrez
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/planes">
                  Planes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#testimonios">
                  Testimonios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/faq">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
            <div className="contactar">
              <Link className="btn btn-outline navbar-contactar" to="/contactar">
                CONTACTAR
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
