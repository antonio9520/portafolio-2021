/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Section3.css";
import imagen2 from "../../resources/imagen2.svg";
import nodeicon from "../../resources/node.svg";
import cssicon from "../../resources/css.svg";
import exicon from "../../resources/ex.svg";
import firebaseicon from "../../resources/firebase.svg";
import giticon from "../../resources/git.svg";
import htmlicon from "../../resources/html.svg";
import jsicon from "../../resources/js.svg";
import mongoicon from "../../resources/mongo.svg";
import muiicon from "../../resources/mui.svg";
import reacticon from "../../resources/react.svg";
import reduxicon from "../../resources/redux.svg";
import Modal from "./components/Modal";
import { Tooltip } from "@material-ui/core";

export default ({ visible }) => {
  const [openModal, setOpenModal] = useState(true);
  const [dataDetalles, setDataDetalles] = useState({
    titulo: "",
    nivel: "",
    icon: "",
  });

  return (
    <div className="conteiner-section-3">
      <div className="content">
        <div className="cont-titulo">
          <h1 id="conocimientos">Conocimientos</h1>
        </div>
        {visible ? (
          <>
            <div className="imagen-avatar">
              <object
                className="imagen2svg"
                type="image/svg+xml"
                data={imagen2}
              >
                svg-animation
              </object>
            </div>
            {data.map((item, index) => (
              <Item
                key={index}
                data={item}
                setDataDetalles={setDataDetalles}
                setOpenModal={setOpenModal}
              />
            ))}
          </>
        ) : null}
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        dataDetalles={dataDetalles}
      />
    </div>
  );
};

const Item = ({ data, setOpenModal, setDataDetalles }) => {
  const { icon, titulo } = data;
  const [_class, setClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setClass("move");
    }, 3300);
  }, []);
  return (
    <Tooltip placement="top" title={titulo}>
      <div
        className={`item-section-3 ${titulo} ${_class} `}
        onClick={() => {
          setDataDetalles(data);
          setOpenModal(true);
        }}
      >
        <img src={icon} alt={titulo} />
        <div className="overlay">
          <p>Abrir</p>
        </div>
      </div>
    </Tooltip>
  );
};

const data = [
  {
    titulo: "NodeJs",
    icon: nodeicon,
    nivel: "Intermedio",
    detalles: "",
  },
  {
    titulo: "Css3",
    icon: cssicon,
    nivel: "Avanzado",
    detalles: "",
  },
  {
    titulo: "Express",
    icon: exicon,
    nivel: "Intermedio",
    detalles: "",
  },
  {
    titulo: "Firebase",
    icon: firebaseicon,
    nivel: "Básico",
    detalles: "",
  },
  {
    titulo: "GitHub",
    icon: giticon,
    nivel: "Intermedio",
    detalles: "",
  },
  {
    titulo: "Html5",
    icon: htmlicon,
    nivel: "Avanzado",
    detalles: "",
  },
  {
    titulo: "Javascript",
    icon: jsicon,
    nivel: "Avanzado",
    detalles: "",
  },
  {
    titulo: "MongoDB",
    icon: mongoicon,
    nivel: "Intermedio",
    detalles: "",
  },
  {
    titulo: "Material-UI",
    icon: muiicon,
    nivel: "Avanzado",
    detalles: "",
  },
  {
    titulo: "React",
    icon: reacticon,
    nivel: "Avanzado",
    detalles: "",
  },
  {
    titulo: "Redux",
    icon: reduxicon,
    nivel: "Avanzado",
    detalles: "",
  },
];
