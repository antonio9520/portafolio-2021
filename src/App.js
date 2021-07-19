import React, { useState } from "react";
import "./App.css";
import { Section1, Section2, Section3, Section4, Section5 } from "./sections";
import { handleAnimation } from "./assets/scroll";
import { Menu, MenuResp } from "./components";

const App = () => {
  const [state, setState] = useState({
    section1: true,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  window.onscroll = () =>
    handleAnimation(document.documentElement.scrollTop, setState);

  return (
    <div className="app">
      <Menu visible={state.section1} />
      <MenuResp visible={state.section1} />
      <Section1 visible={state.section1} />
      <Section2 visible={state.section2} />
      <Section3 visible={state.section3} />
      <Section4 visible={state.section4} />
      <Section5 visible={state.section5} />
    </div>
  );
};

export default App;
