import React, { useState } from "react";
import "./MenuResp.css";
import { IconButton, makeStyles } from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { Link } from "react-scroll";

const MenuResp = ({ visible }) => {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles({
    root: {
      "&.MuiIconButton-root": {
        backgroundColor: "#1e3266",
        color: "white",
        boxShadow: !visible && !open ? "1px 5px 40px rgba(0,0,0,0.3)" : null,
        transition: "0.5s ease-in-out",
      },
    },
  });
  const classes = useStyles();


  return (
    <>
      <div className="container-btn-menu">
        <IconButton className={classes.root} onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
        </IconButton>
      </div>
      <div className={`container-menu-resp ${open && "open"}`}>
        <Link
          activeClass="active"
          className="link"
          to="inicio"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setOpen(false)}
        >
          <p>Inicio</p>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="sobremi"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setOpen(false)}
        >
          <p>Sobre mí</p>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="conocimientos"
          spy={true}
          smooth={true}
          offset={250}
          duration={500}
          onClick={() => setOpen(false)}
        >
          <p>Conocimientos</p>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="proyectos"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={() => setOpen(false)}
        >
          <p>Proyectos</p>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="contacto"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setOpen(false)}
        >
          <p>Contacto</p>
        </Link>
      </div>
    </>
  );
};

export default MenuResp;
