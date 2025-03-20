import { BrowserRouter, Route, Routes } from "react-router";
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Homepage route with multiple sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Info_1 />
              <Info_2 />
              <Services />
              <CTA />
            </>
          }
        />
        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
