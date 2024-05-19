/* eslint-disable @next/next/no-img-element */
import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "./ui/magic-button";

export const Footer = () => {
  return (
    <footer className="mb-[100px] md:mb-5 w-full" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="lg:max-w-[45vw] heading">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 md:mt-10 text-center text-white-200">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:andre.yovera1@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center mt-16">
        <p className="font-light md:font-normal text-sm md:text-base">
          Copyright © 2024 Tathata
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="flex justify-center items-center bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter border border-black-300 rounded-lg w-10 h-10 cursor-pointer saturate-180"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
