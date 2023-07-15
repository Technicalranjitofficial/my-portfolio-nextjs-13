"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { convertDate } from "@/Redux/helper/Other";
import { useDispatch, useSelector } from "react-redux";
import { setMainPageBlogList } from "@/Redux/reducers/BlogsSlice";
import BlogsCardSkeleton from "../blogCardSkeleto";
import Image from "next/image";

const RecentPosts = ({ data }) => {
  const blogs = useSelector((state) => state.BlogSlice.mainPageBlogList);

  const dispatch = useDispatch();

  console.log(data);
  useEffect(() => {
    dispatch(setMainPageBlogList(data));
  }, [data]);
  // convertDate();

  return (
    <>
      {blogs.length == 0 && <BlogsCardSkeleton count={3} />}
      <div className="flex justify-center mt-5">
        <div className="">
          <div className="flex justify-between"></div>

          <div className="grid mt-3 grid-cols-1  md:grid-cols-3 gap-8">
            {blogs &&
              blogs.map((val, index) => {
                return (
                  <Link
                    key={val.slug.current}
                    href={`/blogs/${val.slug.current}`}
                    className="hover:translate-y-1"
                  >
                    <div className="overflow-hidden rounded-md min-h-full border border-slate-600 bg-slate-900 justify-center">
                      <div className=" lg:w-[25rem]
                      w-[30rem] md:w-[15rem] md:h-52 h-64 relative ">
                        {/* <img
                          className="object-cover md:max-h-52  h-full w-full object-center"
                          src={val.poster.asset.url}
                          alt="img"
                        /> */}

<Image
              src={val.poster.asset.url}
              layout="fill"
              objectFit="cover"
              alt="image"
              className="rounded-md"
            />
                      </div>
                      <h1 className="font-semibold text-slate-300 text-lg md:text-2xl line-clamp-2 pl-2 pt-2 font-Roboto">
                        {val.title}
                      </h1>
                      <h1 className="items-center ml-2 mt-1 text-sm text-slate-400 font-bold">
                        Ranjit Das
                      </h1>
                      <span className="items-center ml-2 mt-1 text-xs text-slate-400 font-bold">
                        {convertDate(val.createdAt)}
                      </span>
                      {/* <p className="mt-2 text-center px-2 text-xs md:text-sm text-gray-300  line-clamp-3 font-medium">
              {val.description}
            </p> */}
                      <div className="mb-4"></div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
