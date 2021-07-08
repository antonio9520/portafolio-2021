import React from "react";
import "./Details.css";
import { IconButton, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles({
  root: { color: "#3c4858", position: "absolute", top: "10px", right: "10px" },
});

const Details = ({ data, closeModal }) => {
  const { titulo, nivel, icon } = data;
  const classes = useStyles();
  return (
    <div className="cont-detalles">
      <img className="imagen" src={icon} alt="lenguaje" />
      <h1>
        {titulo} - {nivel}
      </h1>
      <IconButton className={classes.root} onClick={closeModal}>
        <Close />
      </IconButton>
    </div>
  );
};

export default Details;
