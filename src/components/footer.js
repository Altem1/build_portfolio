import React from "react";
import "../css/footer.css";
import LogoGit from "../img/LogoGit.png";

const Footer = () => {
    return (
        <div className="Footer"> 
            <ol className="enlace">
                <li>GitHub</li>
                <li><a href="#">Acerca de...</a></li>
            </ol>

            <ol className="imagen">
                <li><img src={LogoGit} alt="Logo" className="img-footer"/></li>
                <li><img src={LogoGit} alt="Logo" className="img-footer"/></li>
            </ol>
        </div>
    );
}

export default Footer;
