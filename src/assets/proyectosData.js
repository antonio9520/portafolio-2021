import caratulaZap from "../resources/zap/caratula-zap.png";
import reactimage from "../resources/portafolio/caratula-portafolio.png";
import zap1 from "../resources/zap/login-cliente.png";
import zap2 from "../resources/zap/perfil-usuario.png";
import zap5 from "../resources/zap/home-usuario.png";
import zap6 from "../resources/zap/ofertas-2-usuario.png";
import zap7 from "../resources/zap/crear-adn-1.png";
import zap8 from "../resources/zap/crear-adn-2.png";
import zap9 from "../resources/zap/crear-adn-4.png";
import zap4 from "../resources/zap/login-empresas.png";
import zap3 from "../resources/zap/login-admin.png";

export const proyectos = [
  {
    id: "01",
    imageURL: reactimage,
    nombre: "Portafolio",
    lenguajes: ["react", "css", "html", "js"],
    galeria: [],
    descripcion:
      "Página web portafolio, desarrollada en React con animaciones SVG.",
    github: "https://github.com/antonio9520/portafolio-2021",
  },
  {
    id: "02",
    imageURL: caratulaZap,
    nombre: "ZapTalent",
    lenguajes: ["react", "mongo", "node", "redux"],
    galeria: [zap1, zap2, zap5, zap6, zap7, zap8, zap9, zap3, zap4],
    descripcion:
      "Proyecto realizado para agilizar las búsquedas de empleos para profesionales con certificación SAP. Desarrollado en MERN y JWT para la autenticación. La solución consta de 3 plataformas (Usuario, Empresas y Administrador) en donde el usuario puede completar un perfil, filtrar anuncios subidos desde la plataforma Empresas y postular a ellos, entre otras funciones.",
    appURL: "https://info.zaptalent.cl/",
  },
];
