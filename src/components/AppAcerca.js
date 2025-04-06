import React from "react";
import AltemF from '../img/Altem.png';
import '../css/AcercaDe.css';

const informacion = [
    {
        id: 1,
        tipo: "Nombre",
        info: "Jose Emilio Antonio Jimenez"
    },{
        id: 2,
        tipo: "Escuela",
        info: "Universidad Autonoma de San Luis Potosi"
    },{
        id: 3,
        tipo: "Facultad",
        info: "Facultad de Ingenieria"
    },{
        id: 4,
        tipo: "Carrera",
        info: "Ingenieria en Sistemas Inteligentes"
    },{
        id: 5,
        tipo: "Semestre",
        info: "Segundo"
    }
];

const lenguajes = [
    {
        id: 1,
        nombre: "C",
        nivel: "Bajo - Medio",
    },{
        id: 2,
        nombre: "C++",
        nivel: "Bajo - Medio"
    },{
        id: 3,
        nombre: "Html",
        nivel: "Medio - Avanzado"
    },{
        id: 4,
        nombre: "CSS",
        nivel: "Medio"
    },{
        id: 5,
        nombre: "JavaScript",
        nivel: "Medio - Avanzado"
    },{
        id: 6,
        nombre: "React",
        nivel: "Bajo"
    }
];

const AppAcerca = () => {
    return (
        <div className="container-about">
            <div className="foto-about">
                <img src={AltemF} className="img-mia" alt="foto mia" />
            </div>
            <div className="info-about">
                <h2>Acerca de mi...</h2>
                
                {informacion.map((item) => (
                    <p key={item.id}>
                        <strong>{item.tipo}:</strong> {item.info}
                    </p>
                ))}
                
                <h3>Tengo conocimientos en:</h3>
                
                <div className="lenguajes-container">
                    {lenguajes.map((lenguaje) => (
                        <div key={lenguaje.id} className="lenguaje-item">
                            <h4>{lenguaje.nombre}</h4>
                            <p>Nivel: {lenguaje.nivel}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AppAcerca;