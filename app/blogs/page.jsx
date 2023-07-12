"use client";
import { useQuery } from "@apollo/client";
import {
  FETCH_MORE,
  GET_POST_MAIN,
  GET_POST_PAGE,
} from "@/Services/graphql/query";

import { AiOutlineSearch } from "react-icons/ai";
import Loader from "@/components/Loader";
import BlogHead from "@/components/post/BlogHead";
import BlogList from "@/components/post/BlogList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllBlogList,
  setBlogOffset,
  setHasMoreBlogs,
  setLoading,
  setMorePost,
  setPinnedList,
} from "@/Redux/reducers/BlogsSlice";
import { client } from "@/Services/graphql";
import { store } from "@/Redux/store/store";
import PinnedListSkeleton from "@/components/PinnedListSkeleton";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import Skeleton from "react-loading-skeleton";

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
      }else{
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

    


      {postsList.length < 1 ? (
       <div className="pt-28">
        <PinnedListSkeleton/>
       </div>
      ) : (
        <>
          <div className=" pt-28">
            <BlogHead pinnedBlogs={pinnedList} />
          </div>

          <div className="mt-28 text-white">
            <div className="w-full justify-between flex flex-col md:flex-row">
              <div className="mb-3 flex font-bold md:text-2xl text-xl items-center md:mb-0">
                Posts
              </div>
              <div className="border-slate-700  border flex justify-center items-center md:pr-5  rounded-lg">
                <input
                  className="bg-transparent   text-white outline-none py-2 px-3
            text-center"
                  type="text"
                />
                <AiOutlineSearch className="text-slate-500" size={30} />
              </div>
            </div>

            <br />
            <BlogList blogs={postsList} />
          </div>

          <div className="w-full flex justify-center items-center mt-14 pb-28">
          {hasMoreBlogs?  <button
              className="text-white border-slate-700 hover:border-slate-600
   hover:bg-slate-800 font-bold text-sm md:text-lg border px-5 md:px-8 py-2 md:py-3 rounded-lg"
              onClick={() => {
                const p = store.getState().BlogSlice.blogOffset;
                // const q = store.getState().BlogSlice.loading;
                nextFetch(p);
              }}
            >
              {getLoading ? "Loading" : "See More"}
            </button>:""}
          </div>
        </>
      )}
    </>
  );
}
