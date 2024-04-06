import logoFacebook from "./logoFacebook.png";
import logoInstagram from "./logoInstagram.png";
{
  /*import "./footer.css"; */
}

export default function Footer() {
  return (
    <div id="contenedorFooter" >
      <footer className="text-center bg-body-tertiary" style={{marginTop: '3rem'}}>
        <div className="footer-container-pt-4" style={{paddingTop: '16 !important', backgroundColor: "#E7E7E7"}} >
          <section className="mb-0" style={{backgroundColor: "#E7E7E7"}}>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.instagram.com/ajedrezhermar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoInstagram} id="logoInstagram" alt="Instagram" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.facebook.com/ajedrezhermar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoFacebook} id="logoFacebook" alt="Facebook" />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "#98A2B3"}}
        >
          
          <a className="footer-text-body" href="https://twitter.com/https_memi" style={{ color: "#F2F2F2", textDecoration: "none"  }}>
          © 2024 Todos los derechos reservados <br/> Desarrollado por Maria Emilia Mocayar, Elias Mocayar
          </a>
        </div>
      </footer>
    </div>
  );
}

{
  /*}
      <p id="creditos">
        © Todos los derechos reservados | María Emilia Mocayar, Elías Mocayar
      </p>

      <ul id="listaRedes">
        <li>
          <a
            href="https://www.instagram.com/ajedrezhermar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoInstagram} id="logoInstagram" alt="Instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ajedrezhermar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoFacebook} id="logoFacebook" alt="Facebook" />
          </a>
        </li>
      </ul>
  */
}
