/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Section1.css";

import clouds from "../../resources/clouds.svg";

export default () => {
  return (
    <div id="inicio" className="conteiner-section-1">
      {/* <Clouds /> */}
      <object className="fondo-svg" type="image/svg+xml" data={clouds}>
        svg-animation
      </object>
      <div className="center">
        <div>
          <h1>Abraham Vidal</h1>
          <h5>Full-Stack Developer</h5>
        </div>
      </div>
    </div>
  );
};
