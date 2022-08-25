import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import PortfolioItem from "../pages/PortfolioItem";
import PageNotFound from "../pages/PageNotFound";

function App() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="transition-all bg-white dark:bg-extraDarkBlue">
        <Nav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <NavMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-item" element={<PageNotFound />} />
          <Route path="/portfolio-item/:item" element={<PortfolioItem />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
