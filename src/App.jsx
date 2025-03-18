import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Info_1 from "./components/Info_1";
import Info_2 from "./components/Info_2";
import CTA from "./components/CTA";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Info_1 />
      <Info_2 />
      <CTA />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
