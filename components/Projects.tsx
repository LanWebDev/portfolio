import { projects, tech } from "@/data/constants";
import React from "react";

import Image from "next/image";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Projects = () => {
  const PinContainer = dynamic(
    () => import("./ui/3DPin").then((mod) => mod.PinContainer),

    { ssr: false }
  );

  return (
    <section id="projects" className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 sm:gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                    src={"/bg.png"}
                    alt="background image"
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                  />
                </div>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-[90%] rounded-xl   z-10 absolute bottom-0"
                  style={{ transform: `rotate(2deg) translateY(15px)` }}
                />
              </div>
              <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h2>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center ">
                  {project.iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2 "
                        width={400}
                        height={400}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#dc84ff" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <InfiniteMovingCards items={tech} />
    </section>
  );
};

export default Projects;
