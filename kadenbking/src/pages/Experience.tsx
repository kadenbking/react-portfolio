import React, { useEffect, useRef, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Timeline from "../components/Timeline";
import { useOnLoadImages } from "../hooks/useOnLoadImages";
import { getExperience } from "../util/ExperienceData";

const experience = getExperience();

function Experience() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
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
          <div className="min-h-screen flex flex-col text-center py-24">
            <h1 className="text-4xl text-extraDarkBlue dark:text-lightBlue font-bold my-12">
              Experience
            </h1>
            <div>
              <h4 className="text-lg text-darkBlue dark:text-lightBlue font-bold">
                {experience.dates[currentIndex]}
              </h4>
              <div className="my-12" ref={loadRef}>
                <Timeline
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              </div>
              <div className="mx-12">
                <h2 className="my-6 text-2xl text-primaryBlue font-bold">
                  {experience.companies[currentIndex]}
                </h2>
                <h4 className="my-6 text-lg text-darkBlue dark:text-lightBlue font-bold">
                  {experience.titles[currentIndex]}
                </h4>
                <p className="my-6 text-extraDarkBlue dark:text-white text-center text-lg max-w-8xl mx-auto px-4 lg:px-48">
                  {experience.descriptions[currentIndex]}
                </p>
                <ul>
                  {experience.extraInformation[currentIndex].map((item) => (
                    <li className="text-base my-6 text-extraDarkBlue dark:text-white italic max-w-8xl px-4 mx-auto lg:px-48">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Experience;
