import React from "react";
import { useSelector } from "react-redux";

const SearchBox = () => {

    const openSearch = useSelector((state)=>state.BlogSlice.openSearch);
  return openSearch &&  <div className="w-screen z-50 h-screen fixed bg-red-900/80">hi</div>;
};

export default SearchBox;
