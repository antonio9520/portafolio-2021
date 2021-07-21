/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CardProyect from "./components/CardProyecto";
import reactimage from "../../resources/reactimage.jpg";
import "./Section4.css";

export default ({ visible }) => {
  return (
    <div id="proyectos" className="conteiner-section-4">
      {visible && (
        <>
          <h1>Proyectos</h1>
          <div className="container-proyectos">
            {proyectos.map((proyecto, index) => (
              <CardProyect
                key={proyecto.id}
                proyecto={proyecto}
                delay={index * 0.2}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const proyectos = [
  {
    id: "01",
    imageURL: reactimage,
    nombre: "Portafolio",
    lenguajes: ["react", "css", "html", "js"],
    descripcion:
      "Pagina web portafolio, desarrollada en React, con animaciones CSS.",
  },
  {
    id: "02",
    imageURL: reactimage,
    nombre: "ZapTalent",
    lenguajes: ["react", "mongo", "node", "redux"],
    descripcion:
      "Proyecto realizado para agilizar las búsquedas de empleos para profesionales con certificación SAP. Desarrolado en MERN, con interfaz intuitiva pensada en el usuario, altos estándares de seguridad y escalable.",
  },
];
