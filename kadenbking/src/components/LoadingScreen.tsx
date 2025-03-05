'use client';

import React from "react";
import dynamic from 'next/dynamic';
import hourlgass from "./../img/lotties/hourglass.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
