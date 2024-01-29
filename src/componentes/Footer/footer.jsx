import "./footer.css"
import logoFacebook from "./logoFacebook.png"
import logoInstagram from "./logoInstagram.png"
export function footer() {
    return (
        <div id="contenedorFooter">
            <p id="creditos">© Todos los derechos reservados - Maria Emilia Mocayar, Elias Mocayar</p>

            <img src={logoInstagram} id="logoInstagram"/>
            
            <img src={logoFacebook} id="logoFacebook"/>
        </div>
    )
}