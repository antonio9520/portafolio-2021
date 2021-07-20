export const handleAnimation = (scrollTop, setState) => {
  const sobreMi = document.getElementById("sobremi");
  const conocimientos = document.getElementById("conocimientos");
  const proyectos = document.getElementById("proyectos");
  const contacto = document.getElementById("contacto");

  console.log("sobre mi: " + sobreMi.offsetTop);
  console.log("conocimientos: " + conocimientos.offsetTop);
  console.log("scroll: " + scrollTop);

  //INICIO
  if (scrollTop < sobreMi.offsetTop - 500) {
    console.log("entro en section 1");
    setState({
      section1: true,
      section2: false,
      section3: false,
      section4: false,
      section5: false,
    });
  }
  //SOBRE MI
  if (
    scrollTop > sobreMi.offsetTop &&
    scrollTop < conocimientos.offsetTop - 600
  ) {
    console.log("entro en section 2");
    setState({
      section1: false,
      section2: true,
      section3: false,
      section4: false,
      section5: false,
    });
  }

  //CONOCIMIENTOS
  if (
    scrollTop > conocimientos.offsetTop &&
    scrollTop < proyectos.offsetTop - 750
  ) {
    console.log("entro en section 3");
    setState({
      section1: false,
      section2: false,
      section3: true,
      section4: false,
      section5: false,
    });
  }
  //PROYECTOS
  if (
    scrollTop > proyectos.offsetTop - 200 &&
    scrollTop < contacto.offsetTop - 500
  ) {
    setState({
      section1: false,
      section2: false,
      section3: false,
      section4: true,
      section5: false,
    });
  }
};
