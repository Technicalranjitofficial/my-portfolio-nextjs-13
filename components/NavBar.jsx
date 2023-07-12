import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 z-50 fixed w-full flex justify-between  mx-auto max-w-screen-xl px-0 md:px-0 py-5">
      <div
      >
        <Link href="/">
        <span className="text-cyan-500 font-bold text-2xl md:text-3xl font-Roboto ">
          Ranjit Das
        </span></Link>
      </div>
      <div className="items-center  hidden sm:flex">
        <Link
          href="/"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-bold font-xl font-Alegreya "
        >
          Home
        </Link>
        <Link
          href="/about"
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
          href="/blogs"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          Blogs
        </Link>        

      </div>
    </nav>
  );
};

export default NavBar;
