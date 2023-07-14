"use client";
import {
  setBlogOffset,
  setHasMoreBlogs,
  setLoading,
  setMorePost,
} from "@/Redux/reducers/BlogsSlice";
import { store } from "@/Redux/store/store";
import { client } from "@/Services/graphql";
import { FETCH_MORE } from "@/Services/graphql/query";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SeeMore = () => {
  const hasMoreBlogs = useSelector((state) => state.BlogSlice.hasMoreBlogs);
  const getLoading = useSelector((state) => state.BlogSlice.loading);

  const dispatch = useDispatch();

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

  return (
    <>
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
    </>
  );
};

export default SeeMore;
