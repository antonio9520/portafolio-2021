import "./App.css";
import { Section1, Section2, Section3, Section4, Section5 } from "./sections";
import { Menu } from "./components";

function App() {
  return (
    <div className="app">
      <Menu />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
