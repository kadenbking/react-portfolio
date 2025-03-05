'use client';

import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });

const portfolioItems = [
  "thywordle",
  "tfc",
  "ncs",
  "hillcrest",
  "cp",
  "wardgrove",
  "evolve",
  "fhubound",
  "branding",
  "piday",
  "agile",
  "st"
];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col text-center py-24">
      <h1 className="text-4xl text-extraDarkBlue dark:text-lightBlue font-bold my-12">
        Portfolio
      </h1>
      <p className="text-lg text-start lg:text-center text-darkBlue mx-16 lg:mx-32 xl:mx-64 mb-8 dark:text-white">
        Below are some sample projects either from my time as a student at
        Freed-Hardeman University or work as a freelancer. Each of the
        cards below contain links that will provide more information about
        the process, product, and result.
      </p>
      <ul className="flex flex-wrap justify-center max-w-8xl mx-auto">
        {portfolioItems.map((project) => (
          <li className="m-10" key={project}>
            <PortfolioCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
