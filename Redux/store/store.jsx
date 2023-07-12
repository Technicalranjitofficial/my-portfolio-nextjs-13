import { configureStore } from "@reduxjs/toolkit";
import TerminalSlice from "../reducers/TerminalSlice";
import BlogsSlice from "../reducers/BlogsSlice";


export const store = configureStore({
    reducer:{
        TerminalSlice:TerminalSlice,
        BlogSlice:BlogsSlice
    }
    ,
});




