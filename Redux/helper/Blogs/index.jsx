import { client } from "@/Services/graphql"
import { GET_ALL_BLOGS, GET_POST_MAIN, GET_POST_PAGE, SINGLE_POST } from "@/Services/graphql/query"

export const GetMainPageData=async()=>{
 
   return await client.query({
        query:GET_POST_MAIN,
        variables:{
            limit:3
        }
    }).then((data)=>{
        return data.data

       
    }).catch((err)=>{
        
    });
}


export const GetBlogsPage=async()=>{
 
    return await client.query({
         query:GET_POST_PAGE,
         variables:{
             limit:3,
             offset:0,
             pinnedLimit:3
         }
     }).then((data)=>{
         return data.data
 
        
     }).catch((err)=>{
         
     });
 }


 export const GetSinglePostDetails = async(slug)=>{
    return await client.query({
        query:SINGLE_POST,
        variables:{
            slug:slug
        },
        
        
    }).then((data)=>{
        return data.data

       
    }).catch((err)=>{
        
    });
 }

 export const GetAllBlogs =async()=>{
    return await client.query({
        query:GET_ALL_BLOGS,
    }).then((data)=>{
        return data.data
    }).catch((err)=>{
        
    });
 }