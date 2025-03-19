import React from "react";
import icon from "../img/graphics/icon.png";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { Link, useLocation } from "react-router-dom";

interface props {
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<props> = ({ navbarOpen, setNavbarOpen }) => {
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  function navClassNames() {
    const recurring =
      "w-full fixed top-0 left-0 lg:px-20 px-10 flex z-50 transform delay-100 transition-all duration-300";

    if (location.pathname !== "/") {
      if (navbarOpen) {
        return recurring + " bg-transparent dark:bg-transparent py-4";
      }
      return recurring + " bg-white dark:bg-footerDarkBlue shadow py-4";
    }

    if (scrollPosition < 600) {
      if (navbarOpen) {
        return recurring + " bg-transparent dark:bg-transparent py-8";
      }
      return recurring + " py-8";
    }

    if (navbarOpen) {
      return recurring + " bg-transparent dark:bg-transparent py-4";
    }
    return recurring + " bg-white dark:bg-footerDarkBlue shadow py-4";
  }

  return (
    <header className={navClassNames()}>
      <div className="flex-grow z-50">
        <Link to="/" reloadDocument>
          <img src={icon} alt="kadenbking" className="h-10 lg:h-12 w-auto mt-2" />
        </Link>
      </div>
      <button
        className={`bg-primaryBlue shadow p-2 rounded-full z-50 w-10 lg:w-12 h-10 lg:h-12 mt-2 focus:outline-none transform delay-100 transition-all duration-300 hover:scale-150 ${
          navbarOpen ? "bg-darkBlue" : ""
        }`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {" "}
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute top-0 left-0 h-0.5 w-5 transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200 bg-white" : "-translate-y-1.5 bg-darkBlue"
            }`}
          ></span>
          <span
            className={`absolute top-0 left-0 h-0.5 transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50 bg-white" : "w-5 delay-200 opacity-100 bg-darkBlue"
            }`}
          ></span>
          <span
            className={`absolute top-0 left-0  h-0.5 w-5 transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200 bg-white" : "translate-y-1.5 bg-darkBlue"
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};
export default Nav;
