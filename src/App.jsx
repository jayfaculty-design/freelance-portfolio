import { BrowserRouter, Routes } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route } from "react-router";
import NavMenu from "./components/NavMenu";
import { NavProvider } from "./contexts/NavContext";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavProvider>
          <div></div>
          <Navbar />
          <NavMenu />
          <PageTransition>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
          <Footer />
          <ScrollToTop />
        </NavProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
