/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CardProyect from "./components/CardProyecto";
import reactimage from "../../resources/reactimage.jpg";
import "./Section4.css";

export default () => {
  return (
    <div id="proyectos" className="conteiner-section-4">
      <h1>Proyectos</h1>
      <div className="container-proyectos">
        {proyectos.map((proyecto, index) => (
          <CardProyect key={index} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

const proyectos = [
  {
    imageURL: reactimage,
    nombre: "Portafolio",
    lenguajes: ["react"],
    descripcion: "Una descripcion",
  },
];
