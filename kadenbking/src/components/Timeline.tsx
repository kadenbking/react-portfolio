import React, { useEffect, useRef } from "react";
import { getExperience } from "../util/ExperienceData";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface props {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const experience = getExperience();

const Timeline: React.FC<props> = ({ currentIndex, setCurrentIndex }) => {
  const slideRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handlePrevClick = () => {
    if (currentIndex !== experience.logos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      slideRef.current.classList.add("fade-anim");
    }
  };

  const handleNextClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      slideRef.current.classList.add("fade-anim");
    }
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  return (
    <React.Fragment>
      <div className="w-full flex flex-row justify-between items-center px-8 lg:px-32 xl:px-64">
        <div
          onClick={handlePrevClick}
          className={`p-5 rounded-md ${
            currentIndex === experience.logos.length - 1
              ? "bg-darkBlue/50 dark:bg-lightBlue/50 text-white/50 dark:text-darkBlue/50 cursor-not-allowed"
              : "bg-darkBlue md:hover:bg-primaryBlue dark:bg-lightBlue md:dark:hover:bg-primaryBlue text-white dark:text-darkBlue cursor-pointer"
          }`}
        >
          <FaAngleDoubleLeft />
        </div>
        <div className="mx-auto w-56 md:w-72 lg:w-96">
          <div ref={slideRef} className="w-full relative select-none">
            <img
              src={experience.logos[currentIndex]}
              alt=""
              className="border-8 border-lightBlue rounded-full"
            />
          </div>
        </div>
        <div
          onClick={handleNextClick}
          className={`p-5 rounded-md ${
            currentIndex === 0
              ? "bg-darkBlue/50 dark:bg-lightBlue/50 text-white/50 dark:text-darkBlue/50 cursor-not-allowed"
              : "bg-darkBlue md:hover:bg-primaryBlue dark:bg-lightBlue md:dark:hover:bg-primaryBlue text-white dark:text-darkBlue cursor-pointer"
          }`}
        >
          <FaAngleDoubleRight />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Timeline;
