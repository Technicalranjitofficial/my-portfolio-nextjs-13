"use client";
import {
  setBlogOffset,
  setHasMoreBlogs,
  setLoading,
  setMorePost,
} from "@/Redux/reducers/BlogsSlice";
import { store } from "@/Redux/store/store";
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
  

    const data = await fetch(
      "https://helkh138.api.sanity.io/v1/graphql/production/experiment",
      {
        method: "POST",
        body: JSON.stringify({
          query: `query GetPost($limit:Int,$offset:Int){
            latestBlogs: allBlog(sort:{createdAt:DESC},limit: $limit,offset:$offset) {
              title
              description
              slug {
                current
              }
              poster {
                asset {
                  url
                }
              }
              user {
                title
              }
              createdAt
            }  
          }`,
          variables:{
              limit:6,
              offset:offset
          }
        }),
        headers: {
          "Content-Type": "application/json",
        },
        
      }
    ).then((res)=>res.json());

    console.log("dsjds",data.data);

    if (data.data) {
      
      if (data.data.latestBlogs.length > 0) {
        // console.log(data.latestBlogs);
        dispatch(setMorePost(data.data.latestBlogs));
        dispatch(setBlogOffset(offset + data.data.latestBlogs.length));
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
