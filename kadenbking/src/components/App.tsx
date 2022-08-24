import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import PortfolioItem from "../pages/PortfolioItem";
import PageNotFound from "../pages/PageNotFound";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {loading === false ? (
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
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
