import React, { useEffect, useRef, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import LoadingScreen from "./../components/LoadingScreen";
import { useOnLoadImages } from "../hooks/useOnLoadImages";

function Portfolio() {
  const [loading, setLoading] = useState(false);
  const loadRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(loadRef);

  useEffect(() => {
    if (!imagesLoaded) {
      setLoading(true);
      setTimeout(() => setLoading(false), 5000);
    } else {
      setLoading(false);
    }
  }, [imagesLoaded]);

  return (
    <>
      {loading === false ? (
        <React.Fragment>
          <div className="min-h-screen flex flex-col text-center py-24" ref={loadRef}>
            <h1 className="text-4xl text-extraDarkBlue dark:text-lightBlue font-bold my-12">
              Portfolio
            </h1>
            <p className="text-lg text-start lg:text-center text-darkBlue mx-16 lg:mx-32 xl:mx-64 mb-8 dark:text-white">
              Below are some sample projects either from my time as a student at Freed-Hardeman
              University or work as a freelancer. Each of the cards below contain links that will
              provide more information about the process, product, and result.
            </p>
            <ul className="flex flex-wrap justify-center max-w-8xl mx-auto">
              <li className="m-10" key="cp">
                <PortfolioCard project={"cp"} />
              </li>
              <li className="m-10" key="wardgrove">
                <PortfolioCard project={"wardgrove"} />
              </li>
              <li className="m-10" key="ncs">
                <PortfolioCard project={"ncs"} />
              </li>
              <li className="m-10" key="evolve">
                <PortfolioCard project={"evolve"} />
              </li>
              <li className="m-10" key="hillcrest">
                <PortfolioCard project={"hillcrest"} />
              </li>
              <li className="m-10" key="fhubound">
                <PortfolioCard project={"fhubound"} />
              </li>
              <li className="m-10" key="piday">
                <PortfolioCard project={"piday"} />
              </li>
              <li className="m-10" key="agile">
                <PortfolioCard project={"agile"} />
              </li>
              <li className="m-10" key="coviddashboard">
                <PortfolioCard project={"coviddashboard"} />
              </li>
              <li className="m-10" key="harlans">
                <PortfolioCard project={"harlans"} />
              </li>
              <li className="m-10" key="150years">
                <PortfolioCard project={"150years"} />
              </li>
              <li className="m-10" key="st">
                <PortfolioCard project={"st"} />
              </li>
            </ul>
          </div>
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Portfolio;
