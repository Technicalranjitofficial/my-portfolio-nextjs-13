import { convertDate } from "@/Redux/helper/Other";
import Image from "next/image";
import React from "react";

const Header = ({ info }) => {
  // console.log(info)
  return (
    <div className="flex flex-col w-full border-t-2 border-l-2 border-r-2 border-b-2 rounded-md md:border-b-0 border-slate-800 md:border-slate-700  mt-0 ">
      <div className="justify-center h-[20rem] md:h-[30rem] items-center  w-full flex relative">
        {/* <img className="rounded-md max-h-[30rem] object-cover w-full" src={info.poster} loading="lazy" /> */}

        <Image
              src={info.poster}
              layout="fill"
              objectFit="cover"
              alt="image"
              className="rounded-md"
            />
      </div>
      <div className="mt-6 mb-6">
        <h1 className="text-white ml-1 font-bold text-2xl md:text-3xl font-Alegreya">
          {" "}
          {info.title}
        </h1>
        <div className="mt-1">
          <span className="ml-2 font-Montserrat text-xs md:text-sm text-white">
            {convertDate(info.createdAt)}
          </span>
          <span className="ml-2 font-Montserrat text-xs md:text-sm text-white">
            Leave A reply
          </span>
          <span className="ml-2 font-Montserrat text-xs md:text-sm text-white">
            Posted by:{" "}
            <span className="text-cyan-500 font-Alegreya font-semibold">
              {info.postedBy}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
