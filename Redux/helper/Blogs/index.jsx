import { client } from "@/Services/graphql"
import { GET_ALL_BLOGS, GET_POST_MAIN, GET_POST_PAGE, SINGLE_POST, SINGLE_POST_OPENGRAPH } from "@/Services/graphql/query"

const baseUrl = "https://helkh138.api.sanity.io/v1/graphql/production/experiment";
export const GetMainPageData=async()=>{
 

  return await fetch(
    baseUrl,
    {
      method: "POST",
      body: JSON.stringify({
        query: GET_POST_MAIN,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }
    }
  ).then((res) => res.json()).catch((err)=>console.log(err));
}


export const GetBlogsPage=async()=>{
 
    return await fetch(
        baseUrl,
        {
          method: "POST",
          body: JSON.stringify({
            query: GET_POST_PAGE,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          next: { revalidate: 3600 }
        }
      ).then((res) => res.json()).catch((err)=>console.log(err));
 }


 export const GetSinglePostDetails = async(slug)=>{
    return await fetch(
        baseUrl,
        {
          method: "POST",
          body: JSON.stringify({
            query: SINGLE_POST,
            variables:{
                slug:slug
            }
          }),
          headers: {
            "Content-Type": "application/json",
          },
          next: { revalidate: 3600 }
        }
      ).then((res) => res.json()).catch((err)=>console.log(err));
 }

 export const GetSinglePostOpenGraph = async(slug)=>{
    return await fetch(
        baseUrl,
        {
          method: "POST",
          body: JSON.stringify({
            query: SINGLE_POST_OPENGRAPH,
            variables:{
                slug:slug
            }
          }),
          headers: {
            "Content-Type": "application/json",
          },
          next: { revalidate: 3600 }
        }
      ).then((res) => res.json()).catch((err)=>console.log(err));
 }

 export const GetAllBlogs =async()=>{
    return await fetch(
        baseUrl,
        {
          method: "POST",
          body: JSON.stringify({
            query: GET_ALL_BLOGS,
            
          }),
          headers: {
            "Content-Type": "application/json",
          },
        //   next: { revalidate: 300 }
        }
      ).then((res) => res.json()).catch((err)=>console.log(err));
 }