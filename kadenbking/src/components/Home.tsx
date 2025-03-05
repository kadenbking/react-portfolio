"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import SocialIcons from "./SocialIcons";
import ContactForm from "./ContactForm";
import { FaAddressCard, FaThLarge, FaRegCalendarAlt } from "react-icons/fa";
import me from "../img/personal-img/me.jpg";
import portfolio from "../img/personal-img/portfolio.jpeg";
import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple loading timeout for initial animation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <React.Fragment>
      <Hero />
      <div id="about" className="min-h-screen py-24 flex flex-col lg:flex-row items-center justify-center text-2xl">
        <div className="relative w-3/5 md:w-2/5 max-w-sm mx-10 my-5">
          <Image src={me} alt="me" className="rounded-full" width={500} height={500} priority />
        </div>
        <div className="flex flex-col justify-between items-center w-4/5 max-w-4xl m-10">
          <h2 className="text-2xl text-center font-bold leading-7 text-darkBlue dark:text-lightBlue sm:text-3xl mb-10 sm:truncate">
            About Me
          </h2>
          <p className="text-lg text-darkBlue dark:text-white">
            Disciple of Christ. Writer of code. Designer, developer, and communicator. I love learning and problem
            solving, especially when it benefits and improves the lives of the people around me. Please feel free to
            contact me below if there is anything I can do for you.
          </p>
          <div className="flex justify-center my-10">
            <SocialIcons />
          </div>
        </div>
      </div>
      <div id="portfolio" className="min-h-screen py-24 flex flex-col lg:flex-row items-center justify-center text-2xl">
        <div className="relative w-3/5 md:w-2/5 max-w-sm mx-10 my-5 lg:hidden">
          <Image src={portfolio} alt="portfolio" className="rounded-full" width={500} height={500} />
        </div>
        <div className="flex flex-col justify-between items-center w-4/5 max-w-4xl m-10">
          <h2 className="text-2xl text-center font-bold leading-7 text-darkBlue dark:text-lightBlue sm:text-3xl mb-10 sm:truncate">
            Portfolio
          </h2>
          <p className="text-lg text-darkBlue dark:text-white">
            I have experience in UX Design, Visual Design, and Development work. I use a wide variety of design tools
            and applications including the Adobe Creative Suite. I am also familiar with several programming languages
            and frameworks and am able to pivot as the project requires. Use the links below to learn more about my work
            experience, education, and see samples of previous projects.
          </p>
          <div className="flex flex-col xl:flex-row justify-center my-5">
            <div className="flex flex-row justify-center">
              <Link
                href="/portfolio"
                className="flex flex-row justify-between items-center w-fit p-2 mx-5 xl:mx-2 bg-transparent text-extraDarkBlue dark:text-extraLightBlue hover:bg-extraLightBlue dark:hover:bg-darkBlue rounded-md"
              >
                <FaThLarge />
                <p className="mx-2 text-sm md:text-lg uppercase font-bold">Portfolio</p>
              </Link>
              <Link
                href="/experience"
                className="flex flex-row justify-between items-center w-fit p-2 mx-5 xl:mx-2 bg-transparent text-extraDarkBlue dark:text-extraLightBlue hover:bg-extraLightBlue dark:hover:bg-darkBlue rounded-md"
              >
                <FaRegCalendarAlt />
                <p className="mx-2 text-sm md:text-lg uppercase font-bold">Experience</p>
              </Link>
            </div>
            <a
              href="https://drive.google.com/file/d/1uA60SSpCv1ZjqRGiEFW2tn9M4RdjVynL/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center w-fit p-2 mx-auto xl:mx-2 my-2 xl:my-0 bg-transparent text-extraDarkBlue dark:text-extraLightBlue hover:bg-extraLightBlue dark:hover:bg-darkBlue rounded-md"
            >
              <FaAddressCard />
              <p className="mx-2 text-sm md:text-lg uppercase font-bold">Download Resumé</p>
            </a>
          </div>
        </div>
        <div className="relative w-3/5 md:w-2/5 max-w-sm mx-10 my-5 hidden lg:inline-block">
          <Image src={portfolio} alt="portfolio" className="rounded-full" width={500} height={500} />
        </div>
      </div>
      <div id="contact" className="min-h-screen py-24 flex flex-col items-center justify-center text-2xl">
        <h2 className="text-2xl font-bold leading-7 text-darkBlue dark:text-lightBlue sm:text-3xl mt-10 sm:truncate">
          Contact
        </h2>
        <ContactForm />
      </div>
    </React.Fragment>
  );
}
