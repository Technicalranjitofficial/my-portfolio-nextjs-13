// "use client";
// import { useQuery } from "@apollo/client";
// import {
//   FETCH_MORE,
//   GET_POST_MAIN,
//   GET_POST_PAGE,
//   SEARCH_BLOG,
// } from "@/Services/graphql/query";

// import { AiOutlineSearch } from "react-icons/ai";
// import Loader from "@/components/Loader";
// import BlogHead from "@/components/post/BlogHead";
// import BlogList from "@/components/post/BlogList";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setAllBlogList,
//   setBlogOffset,
//   setHasMoreBlogs,
//   setLoading,
//   setMorePost,
//   setOpenSearch,
//   setPinnedList,
//   setSearchData,
// } from "@/Redux/reducers/BlogsSlice";

import { GetBlogsPage } from "@/Redux/helper/Blogs";
import { store } from "@/Redux/store/store";
import SearchBoxLayout from "@/components/SearchBoxLayout";
import SearchBtn from "@/components/SearchBtn";
import SeeMore from "@/components/SeeMore";
import BlogHead from "@/components/post/BlogHead";
import BlogList from "@/components/post/BlogList";

export default async function Blogs() {
  const data = await GetBlogsPage();

  console.log(data);

  return (
    <>
      <SearchBoxLayout />

      <>
        <div className=" pt-28">
          <BlogHead data={data.pinnedBlogs} />
        </div>

        <div className="pt-36 text-white">
          <div className="w-full justify-between flex flex-row items-center ">
            <div className="mb-3 flex font-bold md:text-2xl text-xl items-center md:mb-0">
              Posts
            </div>
            <div className="border-slate-700  border flex  w-12 h-12 md:w-14 md:h-14 justify-center items-center  rounded-lg">
              <SearchBtn />
            </div>
          </div>

          <br />
          <BlogList data={data.latestBlogs} />
        </div>

        <div className="w-full flex justify-center items-center mt-14 pb-28">
          <SeeMore />
        </div>
      </>
    </>
  );
}
