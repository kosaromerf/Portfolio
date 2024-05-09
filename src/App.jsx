import React from "react";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
