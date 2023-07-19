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

// "use client"

import { GetAllBlogs, GetBlogsPage } from "@/Redux/helper/Blogs";
import { store } from "@/Redux/store/store";
import { client } from "@/Services/graphql";
import { GET_ALL_BLOGS } from "@/Services/graphql/query";
import SearchBoxLayout from "@/components/SearchBoxLayout";
import SearchBtn from "@/components/SearchBtn";
import SeeMore from "@/components/SeeMore";
import BlogHead from "@/components/post/BlogHead";
import BlogList from "@/components/post/BlogList";

export const metadata = {
  title: {
    absolute:"Blogs"
  },
  description: "Technicalranjit,Technical ranjit,This blog is belongs to technical ranjit,tech and science blog,technical website,tips and tricks website",

};

export default async function Blogs() {
  const data = await GetBlogsPage();
  return (
    <>

      <SearchBoxLayout />

      <>
        <div className=" pt-28">
          <BlogHead data={data.data.pinnedBlogs} />
        </div>



        <div className="md:pt-20 pt-28 text-white">
          <div className="border-t mt-10 mb-10 border-gray-800 "></div>
          <div className="w-full justify-between flex flex-row items-center ">
            <div className="mb-3 flex font-bold md:text-2xl text-xl items-center md:mb-0">
              Posts
            </div>
              <SearchBtn />
           
          </div>

          <br />
          <BlogList data={data.data.latestBlogs} />
        </div>

        <div className="w-full flex justify-center items-center mt-14 pb-28">
          <SeeMore />
        </div>
      </>
    </>
  );
}
