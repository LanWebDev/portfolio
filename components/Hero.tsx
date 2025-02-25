"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerativeEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaRegFile } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import TopGradientButton from "./ui/TopGradientButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col ">
          <p className=" tracking-widest  text-purple text-lg max-w-80">
            Hi, my name is
          </p>

          <TextGenerateEffect
            words="Lan Škrobar. I build things for the web."
            className="  text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl max-w-3xl">
            I&apos;m a{" "}
            <span className=" font-bold">
              Remote Junior Front-End Web Developer
            </span>{" "}
            based in Slovenia. I&apos;m passionate about building modern web
            applications that users love.
          </p>
          <div className="flex gap-4">
            <Link href="mailto:skrobar.lan@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
              />
            </Link>
            <Link
              href="/Lan_Skrobar_Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TopGradientButton title="My resume" icon={<FaRegFile />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
