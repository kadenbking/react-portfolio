'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { FaAngleDoubleRight } from "react-icons/fa";
import { getCardInformation } from "../util/ProjectInformation";

const PortfolioCard = (props: { project: string }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  function toggleFlip() {
    setIsFlipped((current) => !current);
  }

  const cardInformation = getCardInformation(props.project);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="w-72 h-72 drop-shadow-2xl cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-90 relative"
        onClick={toggleFlip}
      >
        <Image
          src={cardInformation.img}
          alt={cardInformation.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div
        className="w-72 h-72 bg-darkBlue transition duration-150 ease-out hover:ease-in hover:scale-110 cursor-pointer"
        onClick={toggleFlip}
      >
        <div className="flex flex-col justify-between items-center h-full p-6">
          <div className="text-2xl text-extraLightBlue font-bold">{cardInformation.title}</div>
          <div className="text-white text-base">{cardInformation.description}</div>
          <Link
            href={`/portfolio-item/${cardInformation.path}`}
            className="flex flex-row justify-around items-center w-36 p-2 rounded-md bg-lightBlue hover:bg-primaryBlue text-darkBlue hover:text-white text-sm font-bold uppercase"
          >
            See More <FaAngleDoubleRight />
          </Link>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default PortfolioCard;
