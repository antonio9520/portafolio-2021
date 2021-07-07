import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
const Menu = ({ visible }) => {
  return (
    <div className={`conteiner-menu ${visible && "menu-small"}`}>
      <div className="sub-conteiner-menu">
        <Link
          activeClass="active"
          className="link"
          to="inicio"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <h5>Inicio</h5>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="sobremi"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <h5>Sobre mí</h5>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="conocimientos"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <h5>Conocimientos</h5>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="proyectos"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <h5>Proyectos</h5>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="contacto"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <h5>Contacto</h5>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
