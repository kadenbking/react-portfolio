import React, { LegacyRef } from "react";
import { Link as Scroll } from "react-scroll";
import Title from "./Title";
import "./../styles/hero.css";
import crown from "./../img/graphics/crown.gif";
import mobileCloud1 from "./../img/graphics/clouds/mobile/cloud1.png";
import mobileCloud2 from "./../img/graphics/clouds/mobile/cloud2.png";
import mobileCloud3 from "./../img/graphics/clouds/mobile/cloud3.png";
import mobileCloud4 from "./../img/graphics/clouds/mobile/cloud4.png";
import mobileCloud5 from "./../img/graphics/clouds/mobile/cloud5.png";
import desktopCloud1 from "./../img/graphics/clouds/desktop/cloud1.png";
import desktopCloud2 from "./../img/graphics/clouds/desktop/cloud2.png";
import desktopCloud3 from "./../img/graphics/clouds/desktop/cloud3.png";
import desktopCloud4 from "./../img/graphics/clouds/desktop/cloud4.png";
import desktopCloud5 from "./../img/graphics/clouds/desktop/cloud5.png";
import landscape from "./../img/graphics/landscape.png";

const Hero = React.forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div id="hero" className="banner" ref={ref}>
      <div className="z-20 flex flex-col justify-center items-center mb-16 lg:mb-32">
        <Title />
        <Scroll
          to="about"
          smooth={true}
          className="motion-safe:animate-bounce pt-10 cursor-pointer hover:scale-110"
        >
          <img src={crown} alt="" className="z-20 w-20" />
        </Scroll>
      </div>

      <div className="clouds z-20 visible dark:invisible">
        <img
          src={mobileCloud1}
          alt="cloud"
          id="cloud1"
          className="opacity-5 lg:hidden"
        />
        <img
          src={mobileCloud2}
          alt="cloud"
          id="cloud2"
          className="opacity-5 lg:hidden"
        />
        <img
          src={mobileCloud3}
          alt="cloud"
          id="cloud3"
          className="opacity-5 lg:hidden"
        />
        <img
          src={mobileCloud4}
          alt="cloud"
          id="cloud4"
          className="opacity-5 lg:hidden"
        />
        <img
          src={mobileCloud5}
          alt="cloud"
          id="cloud5"
          className="opacity-5 lg:hidden"
        />
        <img
          src={desktopCloud1}
          alt="cloud"
          id="cloud1"
          className="opacity-5"
        />
        <img
          src={desktopCloud2}
          alt="cloud"
          id="cloud2"
          className="opacity-5"
        />
        <img
          src={desktopCloud3}
          alt="cloud"
          id="cloud3"
          className="opacity-5"
        />
        <img
          src={desktopCloud4}
          alt="cloud"
          id="cloud4"
          className="opacity-5"
        />
        <img
          src={desktopCloud5}
          alt="cloud"
          id="cloud5"
          className="opacity-5"
        />
        <img
          src={desktopCloud5}
          alt="cloud"
          id="cloud10"
          className="opacity-5"
        />
        <img
          src={desktopCloud4}
          alt="cloud"
          id="cloud9"
          className="opacity-5"
        />
        <img
          src={desktopCloud3}
          alt="cloud"
          id="cloud8"
          className="opacity-5"
        />
        <img
          src={desktopCloud2}
          alt="cloud"
          id="cloud7"
          className="opacity-5"
        />
        <img
          src={desktopCloud1}
          alt="cloud"
          id="cloud6"
          className="opacity-5"
        />
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

      <img
        src={landscape}
        alt="landscape"
        className="invisible dark:visible absolute bottom-0"
      />
    </div>
  );
});

export default Hero;
