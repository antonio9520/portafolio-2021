/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Section3.css";
import { Image2 } from "../../svg";
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

export default ({ visible }) => {
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
              <Item key={index} data={item} />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

const Item = ({ data }) => {
  const { icon, titulo } = data;
  const [_class, setClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setClass("move");
    }, 3300);
  }, []);
  return (
    <div className={`item-section-3 ${titulo} ${_class} `}>
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
