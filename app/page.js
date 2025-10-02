import React from "react";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";


import Projects from "./Component/Projects";
import UiuxDesign from "./Component/uiuxDesign";
import Skills from "./Component/Skills";
import Footer from "./Component/Footer";


export default function Home() {
  return (
    

      <div>
      
      <Navbar />
      <Header />
      <Projects/>
      <UiuxDesign/>
      <Skills/>
      <Footer/>
      
    </div>
  );
}
