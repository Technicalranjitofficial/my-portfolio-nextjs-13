"use client";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";
import { useDispatch } from "react-redux";
import { setOpenSearch } from "@/Redux/reducers/BlogsSlice";

const SearchBtn = () => {
  const dispatch = useDispatch();
  return (
    
    <div  onClick={() => {
      document.body.classList.add("body-overflow-hidden");

      dispatch(setOpenSearch(true));
    }}  className="border-slate-700 cursor-pointer  border flex  w-12 h-12 md:w-14 md:h-14 justify-center items-center  rounded-lg">

      <AiOutlineSearch
       
        className="text-slate-500 w-6 h-6"
      />
    </div>


   
  );
};

export default SearchBtn;
