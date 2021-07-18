/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Section5.css";
import { IconButton } from "@material-ui/core";
import { Mail, GitHub, Instagram, LinkedIn } from "@material-ui/icons";

export default () => {
  return (
    <div id="contacto" className="conteiner-section-5">
      <div className="overlay"></div>

      <div className="contacto">
        <h1>Contacto</h1>
        <div className="cont-iconos">
          {contacto.map((contact, i) => (
            <div className="cont-icono">
              <IconButton 
                href={contact.link}
                title={contact.title}
                target={contact.target}
                className="icon-btn-contacto"
              >
                {contact.icon}
              </IconButton>
            </div>
          ))}
        </div>
      </div>

      <p className="text-footer">
        © Abraham Vidal || Todos los derechos reservados 2021
      </p>
    </div>
  );
};

const contacto = [
  {
    icon: <LinkedIn className="icon-contacto" />,
    target: "_blank",
    link: "https://www.linkedin.com/in/abraham-vidal-907a37190/",
    title: "Ir a Perfil",
  },
  {
    icon: <Mail className="icon-contacto" />,
    target: "",
    link: "mailto:antonio.vidal95@hotmail.com",
    title: "Enviar correo a antonio.vidal95@hotmail.com",
  },
  {
    icon: <Mail className="icon-contacto" />,
    target: "",
    link: "mailto:abrvc95@gmail.com",
    title: "Enviar correo a abrvc95@gmail.com",
  },
  {
    icon: <GitHub className="icon-contacto" />,
    target: "_blank",
    link: "https://github.com/antonio9520",
    title: "Ir a Perfil",
  },
  {
    icon: <Instagram className="icon-contacto" />,
    target: "_blank",
    link: "https://www.instagram.com/abraham.antonio95/?hl=es-la",
    title: "Ir a perfil",
  },
];
