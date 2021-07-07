import React, { useState } from "react";
import "./App.css";
import { Section1, Section2, Section3, Section4, Section5 } from "./sections";
import { Menu} from "./components";

const App = () => {
  const [state, setState] = useState({
    section1: true,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  window.onscroll = () => handleAnimation();
  const handleAnimation = () => {
    // console.log(document.documentElement.scrollTop)
    //about
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop < 100) {
      setState({
        section1: false,
        section2: false,
        section3: false,
        section4: false,
        section5: false,
      });
    }
    // if (document.documentElement.scrollTop > 100) {
    //   setState({
    //     ...state,
    //     section1: true,
    //   });
    // }
    if (
      document.documentElement.scrollTop > 800 &&
      document.documentElement.scrollTop < 1800
    ) {
      setState({
        section1: true,
        section2: true,
        section3: false,
        section4: false,
        section5: false,
      });
    }
    if (
      document.documentElement.scrollTop > 1800 &&
      document.documentElement.scrollTop < 3800
    ) {
      setState({
        section1: true,
        section2: false,
        section3: true,
        section4: false,
        section5: false,
      });
    }
    if (document.documentElement.scrollTop > 3300) {
      setState({
        section1: true,
        section2: false,
        section3: false,
        section4: true,
        section5: false,
      });
    }
  };
  return (
    <div className="app">
      <Menu visible={state.section1} />
      {/* <MenuLateral visible={state.section1} /> */}
      <Section1 visible={state.section1} />
      <Section2 visible={state.section2} />
      <Section3 visible={state.section3} />
      <Section4 visible={state.section4} />
      <Section5 visible={state.section5} />
    </div>
  );
};

export default App;
