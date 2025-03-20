import { BrowserRouter, Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar"; // Load Navbar normally
import Footer from "./components/Footer"; // Load Footer normally

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Info_1 = lazy(() => import("./components/Info_1"));
const Info_2 = lazy(() => import("./components/Info_2"));
const CTA = lazy(() => import("./components/CTA"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          {/* Homepage route with lazy loaded components */}
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
          <Route
            path="/about"
            element={
              <Suspense
                fallback={
                  <div className="text-center py-10">Loading About...</div>
                }
              >
                <About />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense
                fallback={
                  <div className="text-center py-10">Loading Services...</div>
                }
              >
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div className="text-center py-10">Loading Contact...</div>
                }
              >
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
