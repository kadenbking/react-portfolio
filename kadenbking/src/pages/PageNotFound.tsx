import React from "react";
import "./../styles/hero.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <React.Fragment>
      <div className="banner min-h-screen flex flex-col text-extraDarkBlue dark:text-white text-center py-24">
        <h1 className="text-darkBlue dark:text-lightBlue text-2xl font-bold z-20">
          Sorry, that page is unavailable
        </h1>
        <Link
          to="/"
          reloadDocument
          className="px-10 py-5 m-10 rounded-md text-lg uppercase font-bold text-extraLightBlue dark:text-extraDarkBlue bg-darkBlue dark:bg-lightBlue hover:bg-primaryBlue dark:hover:bg-primaryBlue cursor-pointer z-20"
        >
          Return Home
        </Link>
        <div id="darkContainer" className="invisible dark:visible">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div id="lightContainer" className="visible dark:invisible">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PageNotFound;
