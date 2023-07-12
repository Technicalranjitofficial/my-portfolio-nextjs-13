import { createSlice } from "@reduxjs/toolkit";
import { CommandMap } from "../helper/TerminalHelper";




const initialState = {
    projectList:[],
    mainPageBlogList:[],
    pinnedList:[],
    allBlogList:[],
    loading:false,
    blogOffset:0,
    hasMoreBlogs:true,
}
const BlogSlice = createSlice({
    name:"BlogSlice",
    initialState,
    reducers:{
        setProjectList:(state,action)=>{
            state.projectList = action.payload;
        },
        setMainPageBlogList:(state,action)=>{
            state.mainPageBlogList = action.payload;
        },
        setPinnedList:(state,action)=>{
            state.pinnedList = action.payload;
        },
        setAllBlogList:(state,action)=>{
            state.allBlogList = action.payload;
        },
        setMorePost:(state,action)=>{
            console.log(action.payload);
            state.allBlogList=state.allBlogList.concat(action.payload);
        },
        setLoading:(state,action)=>{
            state.loading = action.payload;
        },
        setBlogOffset:(state,action)=>{
            state.blogOffset = action.payload;
        },
        setHasMoreBlogs:(state,action)=>{
            state.hasMoreBlogs = action.payload;
        }

        


    }
    
})

export const {setProjectList,setMainPageBlogList,setPinnedList,setAllBlogList,setMorePost,setBlogOffset,setLoading,setHasMoreBlogs} = BlogSlice.actions

export default BlogSlice.reducer;