
"use client"
import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { convertDate } from "@/Redux/helper/Other";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setPinnedList } from "@/Redux/reducers/BlogsSlice";
import PinnedListSkeleton from "../PinnedListSkeleton";

const BlogHead = ({data}) => {


  console.log(data)

  const pinnedBlogs = useSelector((state)=>state.BlogSlice.pinnedList);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setPinnedList(data));
    console.log("datdsddddddddddddddddddda",data,pinnedBlogs)
  },[data])
  return (
    <>
    {pinnedBlogs.length ==0 ? <PinnedListSkeleton/>
    // {console.log("pinnedBlogs",pinnedBlogs[0])}
    :
    <div className="flex gap-8 flex-col w-full  md:flex-row ">
      <div className="left flex flex-col w-full md:w-8/12">
       <Link  href={`/blogs/${pinnedBlogs[0].slug.current}`}>
       <div className="h-auto md:h-[30rem] rounded-md">
          <img 
            src={pinnedBlogs[0].poster.asset.url}
            className="object-cover hover:opacity-80 opacity-90 rounded-md w-full h-full"
            alt=""
          />
        </div></Link>
        <div className="text-white mt-5">
        <Link  href={`/blogs/${pinnedBlogs[0].slug.current}`}> 
         <h1 className="text-3xl font-bold hover:text-blue-500">{pinnedBlogs[0].title}</h1></Link>
          <p className="mt-2">
           {pinnedBlogs[0].description}
          </p>
          <h1 className="items-center  mt-1 text-sm text-slate-400 font-bold">
          Ranjit Das
        </h1>
        <span className="items-center  mt-1 text-xs text-slate-400 font-bold">
          {convertDate(pinnedBlogs[0].createdAt)}
        </span>
        </div>
      </div>

      <div className="right gap-8 flex flex-col w-full md:w-4/12 h-[40rem]">
        <BlogCard blogs={pinnedBlogs[1]} />
        <BlogCard blogs={pinnedBlogs[2]} />
      </div>
    </div>}
    </>
  );
};

export default BlogHead;
