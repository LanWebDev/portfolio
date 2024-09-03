import Image from "next/image";
import Link from "next/link";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socials } from "@/data/constants";

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      <div className="w-full absolute left-0 z-0 -bottom-72 min-h-96">
        <Image
          src={"/footer-grid.svg"}
          alt="grid"
          width={1000}
          height={1000}
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center z-10">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to amplify <span className="text-purple">your</span> digital
          presence?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect today and let&apos;s make your vision a reality.
        </p>
        <Link href="mailto:skrobar.lan@gmail.com">
          <MagicButton title="Let's get started" icon={<FaLocationArrow />} />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col gap-y-4 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Lan Škrobar
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socials.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={item.link} rel="noopener noreferrer" target="_blank">
                <Image src={item.img} alt={item.img} width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
