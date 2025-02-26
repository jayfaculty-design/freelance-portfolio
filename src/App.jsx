import { BrowserRouter, Routes } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route } from "react-router";
import NavMenu from "./components/NavMenu";
import { NavProvider } from "./contexts/NavContext";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavProvider>
        <BrowserRouter>
          <Navbar />
          <NavMenu />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NavProvider>
    </>
  );
}

export default App;
