"use client";
import React, { useCallback, useRef } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { TiRefresh } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import SearchCardSkeleton from "./SearchCardSkeleton";
import SearchResultCard from "./SearchResultCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setOpenSearch,
  setSearchData,
} from "@/Redux/reducers/BlogsSlice";
import { client } from "@/Services/graphql";
import { SEARCH_BLOG } from "@/Services/graphql/query";

const SearchBoxLayout = () => {
  const openSearch = useSelector((state) => state.BlogSlice.openSearch);
  const dispatch = useDispatch();
  const getLoading = useSelector((state) => state.BlogSlice.loading);

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

                    <BiSearch className="text-slate-500 h-7 w-7 " />
                  </div>
                </div>
              </div>
              <div className="overflow-auto   pr-2 md:px-10 pl-2 mt-5 max-h-[30rem] md:max-h-[40rem]">
                {getLoading ? (
                  <SearchCardSkeleton />
                ) : searchRef.current && searchRef.current.value.length > 0 ? (
                  searchData.length > 0 ? (
                    <SearchResultCard blogs={searchData} />
                  ) : (
                    <div className="flex w-full text-slate-500 items-center justify-center">
                      <BiSearch className="h-5 w-5 " />
                      <h1 className="ml-2">No Result Found</h1>
                    </div>
                  )
                ) : (
                  <div className="flex text-slate-500 w-full items-center justify-center">
                    <BiSearch className="h-5 w-5 " />
                    <h1 className="ml-2 ">Search articles from this blog</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBoxLayout;
