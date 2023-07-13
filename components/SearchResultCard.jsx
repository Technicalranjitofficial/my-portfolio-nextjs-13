import { convertDate } from "@/Redux/helper/Other";
import Link from "next/link";
import React from "react";

const SearchResultCard = ({blogs}) => {
  return (
    <>
      {
        blogs.map((val, index) => {
          return (
           <Link key={index} href={`/blogs/${val.slug.current}`}>
               
             <div
              className="w-full mt-5  flex rounded-md bg-slate-900 hover:opacity-70 cursor-pointer h-48"
            >
              <div className="basis-4/4 md:basis-3/4 pl-5 pt-10">
                <h1 className="text-md
                md:text-2xl font-bold">{val.title}</h1>
                <div className="mt-3 text-slate-400 font-bold text-sm md:text-base">
                    <p>Ranjit Das . ranjitdas.com.np</p>
                    <p className="mt-1 text-slate-500 text-sm md:text-base  ">{convertDate(val.createdAt)}</p>
                </div>
              </div>
              <div className="md:basis-1/4 flex p-5 ">
                <img className="hidden md:flex rounded-md w-full h-full object-cover" src={val.poster.asset.url} alt="" />
              </div>
            </div>
           </Link>
          );
        })}
    </>
  );
};

export default SearchResultCard;
