"use client";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";
import { useDispatch } from "react-redux";
import { setOpenSearch } from "@/Redux/reducers/BlogsSlice";

const SearchBtn = () => {
  const dispatch = useDispatch();
  return (
    <AiOutlineSearch
      onClick={() => {
        document.body.classList.add("body-overflow-hidden");

        dispatch(setOpenSearch(true));
      }}
      className="text-slate-500 w-6 h-6"
    />
  );
};

export default SearchBtn;
