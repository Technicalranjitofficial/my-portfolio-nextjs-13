"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Info = () => {
  return (
    <div className="flex lg:flex justify-evenly lg:justify-evenly mt-0 z-40 ">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:w-1/2 relative ">
          <h1 className="font-bold  text-2xl md:text-3xl text-yellow-100 md:relative  md:mb-3 absolute font-Montserrat">
            <span className=""> Hi there,👋🏻 I'm</span>{" "}
            <span className="text-cyan-500">
              <Typewriter
                words={["Ranjit Das", "a coder", "Developer", "Debugger"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-10 md:mt-0 md:my-2 text-sm md:text-xl text-white font-RobotoSlab">
            Hi there! My name is Ranjit Das and I’m a B.TECH CSE student. I am a
            fullstack web developer as well as Flutter Developer and Blog
            Writer.
          </p>
          <div className="mt-3 flex">
          <a href="" className="hover:translate-y-1 rounded-lg">
             
             <div className="w-12 h-12 relative">
             <Image
               src="/assets/icons/in.png"
               className=""
               // width={12}
               // height={12}
               fill
               loading="lazy"
               objectFit="cover"
               alt="image"
             />
             </div>
           
         </a>
            <a href="" className="hover:translate-y-1 rounded-lg">
             
                <div className="w-12 h-12 relative">
                <Image
                  src="/assets/icons/insta.png"
                  className=""
                  // width={12}
                  // height={12}
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="image"
                />
                </div>
              
            </a>
            <a href="" className="hover:translate-y-1 rounded-lg">
             
                <div className="w-12 opacity-80 h-12 relative">
                <Image
                  src="/assets/icons/yt2.png"
                  className=""
                  // width={12}
                  // height={12}
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="image"
                />
                </div>
              
            </a>
            <a href="" className="hover:translate-y-1 rounded-lg group">
              <div className="relative">
           
                {/* <img
                  className="w-12 h-12  rounded-lg"
                  src="/assets/icons/git.png"
                  alt=""
                /> */}

                <div className="w-12 h-12 relative">
                <Image
                  src="/assets/icons/git.png"
                  className=""
                  // width={12}
                  // height={12}
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="image"
                />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className=" md:w-1/2 h-72 md:h-96 mt-5 md:mt-0 flex items-center justify-center ">
          <div className="w-72  items-center ring-2 flex justify-center flex-col  ring-green-300 animate-pulse ring-opacity-100 h-72 md:w-96 md:h-96 border relative rounded-full ">
            {/* <img
            className="h-64 rounded-full animate-pulse w-64  max-w-sm mx-auto"
            src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/avatar.svg"
            alt="img"
          /> */}
            <Image
              src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/avatar.svg"
              className="max-h-64 md:max-h-80"
              layout="fill"
              loading="lazy"
              objectFit="contain"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
