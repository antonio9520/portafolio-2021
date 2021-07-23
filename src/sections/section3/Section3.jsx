/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Section3.css";
import imagen2 from "../../resources/imagen2.svg";
import { data } from "../../assets/skillsData";
import Modal from "./components/Modal";
import { Tooltip } from "@material-ui/core";

export default ({ visible }) => {
  const [openModal, setOpenModal] = useState(false);
  const [dataDetalles, setDataDetalles] = useState({
    titulo: "",
    nivel: "",
    icon: "",
  });

  return (
    <div id="conocimientos" className="conteiner-section-3">
      <div className="content">
        {visible ? (
          <>
            <div className="cont-titulo">
              <h1>Conocimientos</h1>
            </div>
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
