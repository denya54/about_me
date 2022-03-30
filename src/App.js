import React from 'react';
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import {Header} from "./components/header/Header";

function App() {
  return (
      <div>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
