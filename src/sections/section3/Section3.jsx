/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Section3.css";
import { Image2 } from "../../svg";
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

export default () => {
  return (
    <div className="conteiner-section-3">
      <div className="content">
        <div className="cont-titulo">
          <h1>Conocimientos</h1>
        </div>

        <div className="imagen-avatar">
          <Image2 />
        </div>
        {data.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

const Item = ({ data }) => {
  const { icon, titulo } = data;
  return (
    <div className={`item-section-3 ${titulo}`}>
      <img src={icon} alt={titulo} />
    </div>
  );
};

const data = [
  {
    titulo: "NodeJs",
    icon: nodeicon,
  },
  {
    titulo: "Css3",
    icon: cssicon,
  },
  {
    titulo: "Express",
    icon: exicon,
  },
  {
    titulo: "Firebase",
    icon: firebaseicon,
  },
  {
    titulo: "GitHub",
    icon: giticon,
  },
  {
    titulo: "Html5",
    icon: htmlicon,
  },
  {
    titulo: "Javascript",
    icon: jsicon,
  },
  {
    titulo: "MongoDB",
    icon: mongoicon,
  },
  {
    titulo: "Material-UI",
    icon: muiicon,
  },
  {
    titulo: "React",
    icon: reacticon,
  },
  {
    titulo: "Redux",
    icon: reduxicon,
  },
];
