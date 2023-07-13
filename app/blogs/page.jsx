"use client";
import { useQuery } from "@apollo/client";
import {
  FETCH_MORE,
  GET_POST_MAIN,
  GET_POST_PAGE,
  SEARCH_BLOG,
} from "@/Services/graphql/query";

import { AiOutlineSearch } from "react-icons/ai";
import Loader from "@/components/Loader";
import BlogHead from "@/components/post/BlogHead";
import BlogList from "@/components/post/BlogList";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllBlogList,
  setBlogOffset,
  setHasMoreBlogs,
  setLoading,
  setMorePost,
  setOpenSearch,
  setPinnedList,
  setSearchData,
} from "@/Redux/reducers/BlogsSlice";
import { client } from "@/Services/graphql";
import { store } from "@/Redux/store/store";
import PinnedListSkeleton from "@/components/PinnedListSkeleton";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import Skeleton from "react-loading-skeleton";
import { BiSearch } from "react-icons/bi";
import { TiRefresh } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import SearchResultCard from "@/components/SearchResultCard";
import BlogsCardSkeleton from "@/components/blogCardSkeleto";
import SearchCardSkeleton from "@/components/SearchCardSkeleton";

export default function Blogs() {
  const { data, error, loading } = useQuery(GET_POST_PAGE, {
    variables: { limit: 6, pinnedLimit: 3, offset: 0 },
  });
  const postsList = useSelector((state) => state.BlogSlice.allBlogList);
  const pinnedList = useSelector((state) => state.BlogSlice.pinnedList);
  const dispatch = useDispatch();
  const getLoading = useSelector((state) => state.BlogSlice.loading);

  const blogOffset = useSelector((state) => state.BlogSlice.blogOffset);

  const hasMoreBlogs = useSelector((state) => state.BlogSlice.hasMoreBlogs);

  const openSearch = useSelector((state) => state.BlogSlice.openSearch);
  const searchData = useSelector((state) => state.BlogSlice.searchData);

  const searchRef = useRef(null);

  const debouncer = (func) => {
    let timer;

    return function (...args) {
      const context = this;

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  const handleSearch = async (e) => {
    if (e.target.value.length < 1) {
      dispatch(setSearchData([]));
      return;
    }
    dispatch(setLoading(true));
    await client
      .query({
        query: SEARCH_BLOG,
        variables: { query: e.target.value },
      })
      .then((data) => {
        console.log(data.data.searchBlog);
        dispatch(setSearchData(data.data.searchBlog));
        dispatch(setLoading(false));
        // setSearchData(data.data.searchBlog);
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      });
  };

  const optimized = useCallback(debouncer(handleSearch), []);

  async function nextFetch(offset) {
    console.log(offset);
    if (!offset) {
      return;
    }
    dispatch(setLoading(true));
    const { data } = await client
      .query({
        query: FETCH_MORE,
        variables: { limit: 6, offset: offset },
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      });

    if (data) {
      console.log(data);
      if (data.latestBlogs.length > 0) {
        console.log(data.latestBlogs);
        dispatch(setMorePost(data.latestBlogs));
        dispatch(setBlogOffset(offset + data.latestBlogs.length));
      } else {
        dispatch(setHasMoreBlogs(false));
      }
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    if (loading) {
      console.log("sdsdsds...");
    }
    if (error) {
      console.log(error);
    }

    if (data) {
      console.log("data", data);
      if (postsList.length < 1) {
        dispatch(setAllBlogList(data.latestBlogs));
        dispatch(setBlogOffset(data.latestBlogs.length));
      }
      if (pinnedList.length < 1) {
        dispatch(setPinnedList(data.pinnedBlogs));
      }
    }
  }, [data, error, loading]);

  return (
    <>
      {openSearch && (
        <div
          className="w-full bg-slate-900/90 
     max-w-screen-xl h-screen md:pr-0 pr-5 fixed z-50"
        >
          <div className="w-full h-full relative">
            <div className="absolute bg-slate-800/90 w-full max-h-[52rem] pb-10 rounded-lg  pt-5 top-10 md:top-28">
              <div className="flex items-center cursor-pointer justify-end mr-5 ">
                <AiOutlineClose
                  onClick={() => {
                    document.body.classList.remove("body-overflow-hidden");
             
                    dispatch(setOpenSearch(false));
                  }}
                  className="w-8 font-bold text-slate-600 md:h-10 md:w-10 h-8"
                />
              </div>
              <div className="flex mt-5 px-5 md:px-10 w-full">
                <div
                  className="w-full border-slate-700
            rounded-full border flex "
                >
                  <input
                    ref={searchRef}
                    onChange={optimized}
                    className="w-full  px-5 bg-transparent outline-none  py-3 md:py-5 "
                    type="text"
                  />
                  <div className="w-36 h-full items-center justify-around flex ">
                    {getLoading ? (
                      <TiRefresh className="text-slate-500 w-8 h-8  animate-spin" />
                    ) : (
                      <div className="w-8 h-8"></div>
                    )}
                    {/* <div></div> */}
                    <BiSearch className="text-slate-500 h-7 w-7 " />
                  </div>
                </div>
              </div>
              <div className="overflow-auto   pr-2 md:px-10 pl-2 mt-5 max-h-[30rem] md:max-h-[40rem]">


                { getLoading?<SearchCardSkeleton />:  searchRef.current && searchRef.current.value.length > 0 ? (
                  searchData.length > 0 ? (
                    <SearchResultCard blogs={searchData} />
                    
                  ) : (
                    <div className="flex w-full items-center justify-center">
                      <BiSearch className="h-5 w-5 " />
                      <h1 className="ml-2">No Result Found</h1>
                    </div>
                  )
                ) : (
                  <div className="flex w-full items-center justify-center">
                    <BiSearch className="h-5 w-5 " />
                    <h1 className="ml-2">Search articles from this blog</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {postsList.length < 1 ? (
        <div className="pt-28">
          <PinnedListSkeleton />
        </div>
      ) : (
        <>
          <div className=" pt-28">
            <BlogHead pinnedBlogs={pinnedList} />
          </div>

          <div className="pt-36 text-white">
            <div className="w-full justify-between flex flex-row items-center ">
              <div className="mb-3 flex font-bold md:text-2xl text-xl items-center md:mb-0">
                Posts
              </div>
              <div className="border-slate-700  border flex  w-12 h-12 md:w-14 md:h-14 justify-center items-center  rounded-lg">
                {/* <input
                  className="bg-transparent   text-white outline-none py-2 px-3
            text-center"
                  type="text"
                /> */}
                <AiOutlineSearch onClick={()=>{
                   document.body.classList.add("body-overflow-hidden");
             
                   dispatch(setOpenSearch(true));
                }} className="text-slate-500 w-6 h-6"  />
              </div>
            </div>

            <br />
            <BlogList blogs={postsList} />
          </div>

          <div className="w-full flex justify-center items-center mt-14 pb-28">
            {hasMoreBlogs ? (
              <button
                className="text-white border-slate-700 hover:border-slate-600
   hover:bg-slate-800 font-bold text-sm md:text-lg border px-5 md:px-8 py-2 md:py-3 rounded-lg"
                onClick={() => {
                  const p = store.getState().BlogSlice.blogOffset;
                  // const q = store.getState().BlogSlice.loading;
                  nextFetch(p);
                }}
              >
                {getLoading ? "Loading" : "See More"}
              </button>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </>
  );
}
