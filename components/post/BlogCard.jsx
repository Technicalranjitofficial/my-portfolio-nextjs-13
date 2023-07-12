import { convertDate } from "@/Redux/helper/Other";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blogs }) => {
  return (
    <Link
   
      href={`/blogs/${blogs.slug.current}`}
      className="hover:translate-y-1 "
    >
      <div className="overflow-hidden group rounded-md min-h-full  bg-slate-900 justify-center">
        <div className=" md:h-52 h-64 ">
          <img
            className="object-cover md:max-h-52 group-hover:opacity-80 opacity-90  h-full w-full object-center"
            src={blogs.poster.asset.url}
            alt="img"
          />
        </div>
        <h1 className=" text-slate-300 text-lg md:text-2xl line-clamp-2  font-bold pt-2 font-Roboto">
          {blogs.title}
        </h1>
        <h1 className="items-center  mt-1 text-sm text-slate-400 font-bold">
          Ranjit Das
        </h1>
        <span className="items-center  mt-1 text-xs text-slate-400 font-bold">
         {convertDate(blogs.createdAt)}
        </span>
        {/* <p className="mt-2 text-center px-2 text-xs md:text-sm text-gray-300  line-clamp-3 font-medium">
       {val.description}
     </p> */}
        <div className="mb-4"></div>
      </div>
    </Link>
  );
};

export default BlogCard;
