/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import CardProyect from "./components/CardProyecto";
import Modal from "./components/Modal";
import "./Section4.css";
import { proyectos } from "../../assets/proyectosData";

export default ({ visible }) => {
  const [openModal, setOpenModal] = useState(false);
  const [galeria, setGaleria] = useState([]);
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
                setOpenModal={setOpenModal}
                setGaleria={setGaleria}
              />
            ))}
          </div>
        </>
      )}
      <Modal openModal={openModal} setOpenModal={setOpenModal} data={galeria} />
    </div>
  );
};
