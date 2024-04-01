import "./footer.css";
import logoFacebook from "./logoFacebook.png";
import logoInstagram from "./logoInstagram.png";

<<<<<<< HEAD
export default function Footer() {
    return (
        <div id="contenedorFooter">
            <p id="creditos">© Todos los derechos reservados | María Emilia Mocayar, Elías Mocayar</p>
=======
export default function footer() {
  return (
    <div id="contenedorFooter">
      <p id="creditos">
        © Todos los derechos reservados | María Emilia Mocayar, Elías Mocayar
      </p>
>>>>>>> d20298b74618ec16eb10241399d38b93d01a636d

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
    </div>
  );
}
