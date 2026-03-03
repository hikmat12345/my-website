"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "./data-helper";

const Portfolio = ({id=""}:{ id: string; } ) => {
  const [showCard, setShowCard] = useState<string>("all");

  const handleProject = (category: any) => {
    setShowCard(category);
  };
  return (
    <>
      <section id={id} className="pt-20 px-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="slg:px-2 px-5">
          <SectionTitle title="Portfolio" />
          {/* note with icon  */}
          {/* bellow projects is just old and small projects there is a lot more will add soon */}
          <div className="mx-auto mb-12  flex">
            <span className="relative  mr-4 top-3">
              <svg className="w-8 h-8 inline-block text-green" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"
                ></path>
              </svg>
            </span>
            <p className="mt-4 text-grayblack">
              Professional and enterprise projects showcasing expertise in React.js, Next.js, and full-stack development. For more projects, see the GitHub Projects section below.
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`px-6 py-2 border-2 border-green text-grayblack rounded-full shadow-md hover:bg-green transition-colors ${
                      showCard === "all"
                        ? "bg-green text-white"
                        : "hover:text-green"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("web-apps")}
                    className={`px-6 py-2 border-2 border-green text-grayblack rounded-full shadow-md hover:bg-green transition-colors ${
                      showCard === "web-apps"
                        ? "bg-green text-white"
                        : "hover:text-green"
                    }`}
                  >
                    Web Applications
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("mobile-apps")}
                    className={`px-6 py-2 border-2 border-green text-grayblack rounded-full shadow-md hover:bg-green transition-colors ${
                      showCard === "mobile-apps"
                        ? "bg-green text-white"
                        : "hover:text-green"
                    }`}
                  >
                    Mobile Apps
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("other")}
                    className={`px-6 py-2 border-2 border-green text-grayblack rounded-full shadow-md hover:bg-green transition-colors ${
                      showCard === "other"
                        ? "bg-green text-white"
                        : "hover:text-green"
                    }`}
                  >
                    Other
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {projects(showCard).map((project, index) => (
              <div
                key={index}
                className={`w-full slg:px-1 px-4 md:w-1/2 xl:w-1/3 ${
                  project.showCard === "all" ||
                  project.showCard === project.category.toLowerCase()
                    ? "block"
                    : "hidden"
                }`}
              >
                <PortfolioCard
                  key={project.id}
                  showCard={project.showCard}
                  category={project.category}
                  tags={project.tags}
                  ImageHref={project.ImageHref}
                  title={project.title}
                  button={project.button}
                  buttonHref={project.buttonHref}
                  github={project.github}
                  behance={project.behance}
                  description={project.description}
                  detailPageLink={project.title
                    .toLowerCase()
                    .replace(/\s/g, "-")}
                />
              </div>
            ))}
            {showCard === "mobile-apps" && (
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                  <h4 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    No Projects
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
  tags,
  github,
  behance,
  description,
  detailPageLink,
}: {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
  tags: string[];
  github: string;
  behance: string;
  description?: string;
  detailPageLink?: string;
}) => {
  return (
    <div className="relative mb-12 group h-full cursor-pointer">
      <div className="h-full rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden h-48 slg:h-40 bg-gray-100">
          <Image
            src={ImageHref}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            width={500}
            height={300}
          />
          {/* Tags Overlay */}
          <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1">
            {tags?.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-xs font-semibold bg-green text-white px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-blacktext group-hover:text-green transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-grayblack mb-3 line-clamp-2">
                {description}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            {buttonHref !== "#" && (
              <Link
                target="_blank"
                href={buttonHref}
                className="flex-1 text-center px-3 py-2 text-xs font-semibold rounded-md border-2 border-green text-green bg-white hover:bg-green hover:text-white transition-all duration-200"
              >
                {button}
              </Link>
            )}
            {github !== "" && (
              <Link
                target="_blank"
                href={github}
                className="flex-1 text-center px-3 py-2 text-xs font-semibold rounded-md border-2 border-gray-400 text-grayblack hover:border-green hover:text-green transition-all duration-200"
                title="View GitHub Repository"
              >
                GitHub
              </Link>
            )}
            {behance !== "" && (
              <Link
                target="_blank"
                href={behance}
                className="flex-1 text-center px-3 py-2 text-xs font-semibold rounded-md border-2 border-gray-400 text-grayblack hover:border-green hover:text-green transition-all duration-200"
                title="View Behance Portfolio"
              >
                Behance
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
