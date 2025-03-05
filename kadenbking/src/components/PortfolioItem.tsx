'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel, Modal, Tooltip } from "flowbite-react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRegLightbulb,
} from "react-icons/fa";
import { getProject } from "../util/ProjectInformation";
import { PortfolioDisplayItem } from "../util/types";
import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });

interface Props {
  projectId: string;
}

export default function PortfolioItem({ projectId }: Props) {
  const [imagePreview, setImagePreview] = useState<boolean>(false);
  const [displayImg, setDisplayImg] = useState<PortfolioDisplayItem>();
  const project = getProject(projectId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const buttonClasses = () => {
    const recurring =
      "p-2 lg:p-5 rounded-full border-2 lg:border-4 border-primaryBlue bg-extraLightBlue hover:bg-darkBlue text-darkBlue hover:text-lightBlue";
    if (project.displayImgs.length === 1) {
      return recurring + " hidden";
    }

    return recurring;
  };

  const backButton = (
    <div className={buttonClasses()}>
      <FaAngleDoubleLeft />
    </div>
  );

  const nextButton = (
    <div className={buttonClasses()}>
      <FaAngleDoubleRight />
    </div>
  );

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className="min-h-screen flex flex-col text-extraDarkBlue dark:text-white text-center py-24"
      onClick={() => {
        if (imagePreview) {
          setImagePreview(false);
        }
      }}
    >
      <h1 className="text-4xl text-extraDarkBlue dark:text-lightBlue font-bold my-12">
        {project.title}
      </h1>
      <p className="text-start text-lg px-12 lg:px-24 xl:px-36 mb-12 max-w-8xl mx-auto">
        {project.description}
      </p>
      {project.testimonial !== "" && (
        <p className="text-base text-center px-12 lg:px-24 xl:px-36 mb-12 max-w-7xl mx-auto italic">
          {project.testimonial}
        </p>
      )}
      <div className="mx-auto h-48 sm:h-64 md:h-72 lg:h-96 max-w-3xl w-3/4">
        <Carousel
          slide={false}
          leftControl={backButton}
          rightControl={nextButton}
        >
          {project.displayImgs.map((item, index) => (
            <div key={index} className="relative h-full">
              <Image
                onClick={() => {
                  setImagePreview(true);
                  setDisplayImg(item);
                }}
                src={item.path}
                alt={project.title}
                fill
                style={{ objectFit: 'contain' }}
                priority={index === 0}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-center mt-6 mb-12">
          <Tooltip
            content="Click on image for larger preview"
            placement="bottom"
          >
            <div className="p-2 rounded-full border-2 border-primaryBlue bg-extraLightBlue hover:bg-darkBlue text-darkBlue hover:text-lightBlue cursor-pointer">
              <FaRegLightbulb />
            </div>
          </Tooltip>
        </div>

        <div className="flex justify-between w-3/4 mt-6 mx-auto">
          {project.previous.length > 0 ? (
            <Link
              href={`/portfolio-item/${project.previous}`}
              className="w-36 rounded-md bg-darkBlue dark:bg-lightBlue text-white dark:text-extraDarkBlue text-sm font-bold uppercase hover:bg-primaryBlue dark:hover:bg-primaryBlue cursor-pointer p-2 mx-2"
            >
              Previous
            </Link>
          ) : (
            <div className="w-36"></div>
          )}
          <Link
            href="/portfolio"
            className="w-36 rounded-md bg-darkBlue dark:bg-lightBlue text-white dark:text-extraDarkBlue text-sm font-bold uppercase hover:bg-primaryBlue dark:hover:bg-primaryBlue cursor-pointer p-2 mx-2"
          >
            Back
          </Link>
          {project.next.length > 0 ? (
            <Link
              href={`/portfolio-item/${project.next}`}
              className="w-36 rounded-md bg-darkBlue dark:bg-lightBlue text-white dark:text-extraDarkBlue text-sm font-bold uppercase hover:bg-primaryBlue dark:hover:bg-primaryBlue cursor-pointer p-2 mx-2"
            >
              Next
            </Link>
          ) : (
            <div className="w-36"></div>
          )}
        </div>
      </div>
      <Modal show={imagePreview} position="center" size="7xl">
        <Modal.Header onClick={() => setImagePreview(false)}>
          {project.title}
        </Modal.Header>
        <Modal.Body>
          <div className="relative w-full h-[80vh]">
            {displayImg && (
              <Image
                src={displayImg.path}
                alt={project.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>
        </Modal.Body>
        {displayImg?.link && (
          <Modal.Footer>
            <a
              className="flex justify-center text-extraDarkBlue dark:text-white uppercase font-bold mx-auto w-full rounded-md bg-extraLightBlue dark:bg-darkBlue hover:bg-primaryBlue dark:hover:bg-primaryBlue p-5"
              href={displayImg.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </Modal.Footer>
        )}
      </Modal>
    </div>
  );
}
