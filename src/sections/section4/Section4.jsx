/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CardProyect from "./components/CardProyecto";
import reactimage from "../../resources/reactimage.jpg";
import "./Section4.css";

export default ({ visible }) => {
  return (
    <div id="proyectos" className="conteiner-section-4">
      <h1>Proyectos</h1>
      {visible ? (
        <div className="container-proyectos">
          {proyectos.map((proyecto, index) => (
            <CardProyect
              key={proyecto.id}
              proyecto={proyecto}
              delay={index * 0.2}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const proyectos = [
  {
    id: "01",
    imageURL: reactimage,
    nombre: "Portafolio",
    lenguajes: ["react"],
    descripcion: "Una descripcion",
  },
  {
    id: "02",
    imageURL: reactimage,
    nombre: "Portafolio",
    lenguajes: ["react"],
    descripcion: "Una descripcion",
  },
  {
    id: "03",
    imageURL: reactimage,
    nombre: "Portafolio",
    lenguajes: ["react"],
    descripcion: "Una descripcion",
  },
];
