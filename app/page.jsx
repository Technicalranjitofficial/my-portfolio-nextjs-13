
import NavBar from "../components/NavBar";
import RecentProjects from "../components/RecentProjects";
// import RecentPosts from '../components/posts/RecentPosts'
import Info from "../components/Info";
import NewsLetter from "../components/NewsLetter";
import Copyright from "../components/Copyright";
// import Navbar from '../components/Navbar'

import RecentPosts from "../components/post/RecentPosts";


import { GET_POST_MAIN } from "@/Services/graphql/query";
import TerminalHome from "../components/Terminal/TerminalHome";
import Post from "../components/post/Post";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../Redux/store/store";

import {
  setBlogOffset,
  setMainPageBlogList,
  setProjectList,
} from "@/Redux/reducers/BlogsSlice";
import BlogsCardSkeleton from "@/components/blogCardSkeleto";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import { client } from "@/Services/graphql";
import { gql } from "@apollo/client";
import { GetMainPageData } from "@/Redux/helper/Blogs";

export default async function Home() {
  // const blogsData = useSelector((state) => state.BlogSlice.mainPageBlogList);
  // const projectList = useSelector((state) => state.BlogSlice.projectList);
  // const dispatch = useDispatch();
  // console.log("running");
  // const { data, error, loading } = useQuery(GET_POST_MAIN, {
  //   variables: { limit: 3, pinnedLimit: 3 },
  // });


  const data = await GetMainPageData()

  
    console.log("data",data);

  
  

  // const { data, error } = useSuspenseQuery<Response>(query);

  // useEffect(() => {
  //   if (loading) {
  //     console.log("loading...");
  //   }
  //   if (error) {
  //     console.log(error);
  //   }
  //   if(document.body.getElementsByClassName("body-overflow-hidden")!=null){
  //   document.body.classList.remove("body-overflow-hidden");

  //   }
  //   if (data) {
  //     if (store.getState().BlogSlice.mainPageBlogList.length < 1) {
  //       dispatch(setMainPageBlogList(data.latestBlogs));

  //     }
  //     if (store.getState().BlogSlice.projectList.length < 1) {
  //       dispatch(setProjectList(data.allProject));
  //     }
  //   }
  // }, [data]);


  console.log("daadad",data);
  return (
    <>
      <div className=" pt-20 md:pt-28 z-40">
        <Info />
      </div>

      <div>
        <h1 className="text-green-500 font-bold mt-5 mb-3">__Terminal__</h1>
        <TerminalHome />
      </div>

      <div>
        <span className="text-white font-bold text-xl md:text-2xl font-Alegreya">
          Recent <span className="text-cyan-500">Projects</span>
        </span>
       

     
          <RecentProjects data={data.allProject} />
        
      </div>
      <br />
      <div className="mt-6">
        <span className="text-white font-bold text-xl  md:text-2xl font-Alegreya">
          Recent <span className="text-cyan-400">Blogs</span>
        </span>
       
      
          <RecentPosts data={data.latestBlogs} />
          
      
        <div className="border-t mt-7 border-gray-600 "></div>
      </div>
    </>
  );
}
