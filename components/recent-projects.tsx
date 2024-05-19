/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-8 mt-10 p-4">
        {projects.map((item) => (
          <div
            className="flex justify-center items-center w-[80vw] sm:w-[570px] h-[32rem] sm:h-[41rem]"
            key={item.id}
          >
            <PinContainer
              title="tathatahy.github.io"
              href="tathatahy.github.io"
            >
              <div className="relative flex justify-center items-center mb-10 w-[80vw] sm:w-[570px] h-[30vh] sm:h-[40vh] overflow-hidden">
                <div
                  className="relative lg:rounded-3xl w-full h-full overflow-hidden"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="bottom-0 z-10 absolute"
                />
              </div>

              <h1 className="line-clamp-1 font-bold text-base md:text-xl lg:text-2xl">
                {item.title}
              </h1>

              <p
                className="line-clamp-2 font-light lg:font-normal text-sm lg:text-xl"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center border-white/[.2] bg-black border rounded-full w-8 lg:w-10 h-8 lg:h-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-purple text-sm md:text-xs lg:text-xl">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
