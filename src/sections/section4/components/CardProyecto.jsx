import React from "react";
import "./style.css";
import clsx from "clsx";

import {
  Typography,
  IconButton,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import { ExpandMore, GitHub, QueuePlayNext } from "@material-ui/icons";
// import image from "../../../resources/img/reactimage.jpg";
import LenguajeIcon from "./LenguajeIcon";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const CardProyect = ({ proyecto, delay, setOpenModal, setGaleria }) => {
  console.log(delay);
  const { imageURL, nombre, lenguajes, descripcion, galeria, github, appURL } =
    proyecto;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="container-targetProyect"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="cont-contenido">
        <div
          title={galeria[0] ? "Abrir Galeria" : null}
          className="cont-img-card"
          onClick={() => {
            if (galeria[0]) {
              setGaleria(galeria);
              setOpenModal(true);
            }
          }}
          style={{ cursor: galeria[0] ? "pointer" : null }}
        >
          <img
            className={`img-targetProyect ${galeria[0] && "open-galeria"}`}
            src={imageURL}
            alt="imagen"
          ></img>
        </div>
        <div className="cont-typo">
          <Typography className="name-proyect" variant="h5">
            {nombre}
          </Typography>
          <div className="container-icons">
            {lenguajes.map((lenguaje, index) => (
              <LenguajeIcon key={index} lenguaje={lenguaje} />
            ))}
          </div>
          <div className="cont-arrow-collapse">
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </div>
          <div className="cont-descripcion">
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography variant="body2">{descripcion}</Typography>
              <div>
                {github && (
                  <IconButton onClick={() => window.open(github)}>
                    <GitHub titleAccess="Ver en GitHub" />
                  </IconButton>
                )}
                {appURL && (
                  <IconButton onClick={() => window.open(appURL)}>
                    <QueuePlayNext titleAccess="Abrir Aplicación" />
                  </IconButton>
                )}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProyect;
