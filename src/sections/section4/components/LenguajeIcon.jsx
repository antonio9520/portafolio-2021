import React from "react";
import "./style.css";
import css3 from "../../../resources/css.svg";
import js from "../../../resources/js.svg";
import html from "../../../resources/html.svg";
import node from "../../../resources/node.svg";
import react from "../../../resources/react.svg";
import redux from "../../../resources/redux.svg";
import mongo from "../../../resources/mongo.svg";
import firebase from "../../../resources/firebase.svg";

const LenguajeIcon = ({ lenguaje }) => {
  return (
    <div className="cont-lengujeIcon">
      {lenguaje === "html" ? (
        <img className="icon-leng" title="Html" src={html} alt="html"></img>
      ) : lenguaje === "js" ? (
        <img
          className="icon-leng"
          title="JavaScript"
          src={js}
          alt="javascript"
        ></img>
      ) : lenguaje === "css" ? (
        <img className="icon-leng" title="Css3" src={css3} alt="css3"></img>
      ) : lenguaje === "node" ? (
        <img className="icon-leng" title="NodeJs" src={node} alt="NodeJs"></img>
      ) : lenguaje === "react" ? (
        <img
          className="icon-leng"
          title="ReactJs"
          src={react}
          alt="ReactJs"
        ></img>
      ) : lenguaje === "redux" ? (
        <img className="icon-leng" title="Redux" src={redux} alt="NodeJs"></img>
      ) : lenguaje === "mongo" ? (
        <img
          className="icon-leng"
          title="MongoDB"
          src={mongo}
          alt="MongoDB"
        ></img>
      ) : lenguaje === "firebase" ? (
        <img
          className="icon-leng"
          title="Firebase"
          src={firebase}
          alt="Firebase"
        ></img>
      ) : (
        <p>{lenguaje}</p>
      )}
    </div>
  );
};

export default LenguajeIcon;
