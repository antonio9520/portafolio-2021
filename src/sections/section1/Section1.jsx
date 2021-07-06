/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Section1.css";
import { Clouds } from "../../svg";

export default () => {
  return (
    <div className="conteiner-section-1">
      <Clouds />
      <div className="center">
        <div>
          <h1>Abraham Vidal</h1>
          <h5>Full-Stack Developer</h5>
        </div>
      </div>
    </div>
  );
};
