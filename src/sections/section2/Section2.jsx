/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Section2.css";
import image2 from "../../resources/image-section-2.svg";

export default ({ visible }) => {
  return (
    <div id="sobremi" className="conteiner-section-2">
      {visible ? (
        <div className="center">
          <div className="left">
            <h1>Sobre mí</h1>
            <p>
              Hola, soy Abraham Vidal, desarollador FullStack con un año de
              experiencia en el desarrollo de aplicaciones web y mobile (MERN).
              Tengo solidos conocimientos en React y React-Native, de igual
              forma, domino a nivel Intermedio NodeJS, Express & MongoDB entre
              otros. Me apasiona programar y aprender de forma autodidacta, soy
              proactivo, con capacidad de trabajar en equipo, responsable y
              comprometido.
            </p>
          </div>
          <div className="rigth">
            {/* <img src={image2} alt="ilustration" /> */}
            <object type="image/svg+xml" data={image2}>
              svg-animation
            </object>
            {/* <Image1 /> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};
