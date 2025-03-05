'use client';

import React from "react";
import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import Title from "./Title";
import "./../styles/hero.css";
import crown from "./../img/graphics/crown.gif";
import landscapeDark from "./../img/graphics/landscape-dark.png";
import landscapeLight from "./../img/graphics/landscape-light.png";

export default function Hero() {
  return (
    <div id="hero" className="banner">
      <div className="z-20 flex flex-col justify-center items-center mb-16 lg:mb-32">
        <Title />
        <Scroll
          to="about"
          smooth={true}
          className="motion-safe:animate-bounce pt-10 cursor-pointer hover:scale-110"
        >
          <div className="relative w-24 h-24">
            <Image
              src={crown}
              alt="Scroll down"
              fill
              style={{ objectFit: 'contain' }}
              className="z-20"
            />
          </div>
        </Scroll>
      </div>

      <div id="bubble-wrap" className="visible dark:invisible">
        <div className="bubble bubbleOne dark:invisible"></div>
        <div className="bubble bubbleTwo dark:invisible"></div>
        <div className="bubble bubbleThree dark:invisible"></div>
        <div className="bubble bubbleFour dark:invisible"></div>
        <div className="bubble bubbleFive invisible md:visible dark:invisible"></div>
        <div className="bubble bubbleSix invisible md:visible dark:invisible"></div>
        <div className="bubble bubbleSeven dark:invisible"></div>
        <div className="bubble bubbleEight invisible md:visible dark:invisible"></div>
        <div className="bubble bubbleNine dark:invisible"></div>
        <div className="bubble bubbleTen invisible md:visible dark:invisible"></div>
        <div className="bubble bubbleEleven invisible md:visible dark:invisible"></div>
        <div className="bubble bubbleTwelve dark:invisible"></div>
        <div className="bubble bubbleThirteen invisible md:visible dark:invisible"></div>
      </div>

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

      <div className="absolute bottom-0 w-full">
        <div className="invisible dark:visible">
          <Image
            src={landscapeDark}
            alt="Dark landscape"
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="visible dark:invisible z-20">
          <Image
            src={landscapeLight}
            alt="Light landscape"
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}
