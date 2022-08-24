import React from "react";
import Lottie from "lottie-react";
import hourlgass from "./../img/lotties/hourglass.json";

function LoadingScreen() {
  return (
    <React.Fragment>
      <div className="banner min-h-screen flex flex-col bg-lightBlue dark:bg-extraDarkBlue text-center py-24">
        <Lottie animationData={hourlgass} loop={true} />
      </div>
    </React.Fragment>
  );
}

export default LoadingScreen;
