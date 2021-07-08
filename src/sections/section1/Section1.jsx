/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Section1.css";
import clouds from "../../resources/clouds3.svg";
import globo from "../../resources/globo.svg";
import moon from "../../resources/moon.svg";

export default ({ visible }) => {
  return (
    <div id="inicio" className="conteiner-section-1">
      <div className="fondo-color"></div>
      {!visible ? (
        <>
          <object className="fondo-svg" type="image/svg+xml" data={clouds}>
            svg-animation
          </object>
          <div className="top">
            <div>
              <Moon />
              <img className="globo1" src={globo} alt="globo" />
              <img className="globo2" src={globo} alt="globo" />
            </div>
          </div>
          <div className="center">
            <div>
              <h1>Abraham Vidal</h1>
              <h5>Full-Stack Developer</h5>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

const Moon = () => {
  const [_class, setClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setClass("pulse");
    }, 6000);
  }, []);
  return (
    <>
      <img className={`moon ${_class}`} src={moon} alt="moon" />
    </>
  );
};
