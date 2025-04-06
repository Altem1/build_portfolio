import React from "react";
import AltemF from '../img/Altem.png'
import '../css/App.css';

const Content = () => {
  return (
    <div className="body-nude">
      <img src={AltemF} alt="imgn" className='img-portafolio' ></img>
      <div>
        <h1>Bienvenido(a) a mi Portafolio</h1>
        <p>¡Hola! Este es el espacio donde reúno todos mis proyectos y mi trayectoria profesional. <br></br>
          Aquí encontrarás mis desarrollos web, programas y experimentos en código, junto con mi currículum y experiencia.</p>

        <p>Mi objetivo es tener un sitio centralizado donde puedas explorar mis trabajos y conocer más sobre mis habilidades. 
          Si tienes alguna pregunta o te interesa colaborar en algún proyecto, no dudes en contactarme.</p>

      </div>
    </div>
  );
}

export default Content;
