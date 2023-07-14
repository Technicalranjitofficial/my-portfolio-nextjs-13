
"use client"
import { setOpenSearch } from "@/Redux/reducers/BlogsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {BiSearch} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";


const NavBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("router", router.pathname);
  const opensearch = useSelector((state)=>state.BlogSlice.openSearch);
  const handleOnsearch = () => {
    console.log(opensearch,"hello")
    
      document.body.classList.add("body-overflow-hidden");
      dispatch(setOpenSearch(true));

   

  
    
  };

  return (
    <nav className="bg-slate-900 z-40 fixed w-full flex justify-between  mx-auto max-w-screen-xl px-0 md:px-0 py-5">
      <div>
        <Link href={`/`}>
          <span className="text-cyan-500 font-bold text-2xl md:text-3xl font-Roboto ">
            Ranjit Das
          </span>
        </Link>
      </div>
      <div className="items-center  hidden sm:flex">
        <Link
          href={`/`}
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-bold font-xl font-Alegreya "
        >
          Home
        </Link>
        <Link
          href={`/about`}
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          About
        </Link>
        <Link
          href="/cv"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          CV
        </Link>
        <Link
          href={`/blogs`}
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          Blogs
        </Link>
        
        {/* {router.pathname==="/blogs" && } */}

      </div>
    </nav>
  );
};

export default NavBar;
