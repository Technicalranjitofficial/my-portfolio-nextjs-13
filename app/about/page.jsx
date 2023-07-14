
import { SINGLE_P } from '@/Services/graphql/query'
import BlogPreviewSkeleton from '@/components/BlogPreviewSkeleton'
import PinnedListSkeleton from '@/components/PinnedListSkeleton'
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton'
import BlogsCardSkeleton from '@/components/blogCardSkeleto'

// import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Ap from './Ap'
import { client } from '@/Services/graphql'
import { gql } from '@apollo/client'
import { store } from '@/Redux/store/store'
import { setMainPageBlogList } from '@/Redux/reducers/BlogsSlice'


export async function generateMetadata({props}){
  return {
    title:"Hello world",
    description:"Hi Guys"
  }
}

const About = async() => {

  async function hello(){
    // const { data } = await fetch("https://helkh138.api.sanity.io/v1/graphql/production/experiment", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: `
    //     query GetSinglePost{
    //       allBlog{
      
           
    //           title,
    //      description,
    //      slug{
    //        current
    //      }
    //      poster{
    //        asset{
    //          url
    //        }
    //      }
       
    //      user{
    //        title
    //      }
    //      createdAt
    //       contentRaw
    //     }
    //   }
    // `,
    //   }),
    //   next: { revalidate: 10 },
    // }).then((res) => res.json());


   
    // console.log("data",data);
  }

  const { data } =await new Promise(async (resolve)=>{

    const p =  await client.query({
        query: gql`
        query GetSinglePost{
                allBlog{
            
                 
                    title,
               description,
               slug{
                 current
               }
               poster{
                 asset{
                   url
                 }
               }
             
               user{
                 title
               }
               createdAt
                contentRaw
              }
            }
        `,
      })
    setTimeout(async() => {
      resolve(p);
    }, 500);

  })
  
  console.log("here we go");
  
  
  hello();
  if(data){
  

  return (
    <div>
     {/* <Ap/> */}
 
     {/* {JSON.stringify(store.getState().BlogSlice.mainPageBlogList)} */}
 
     {<Ap data={data}/>}
 
     
 
   <Ap/>
 
 
    </div>
   )
}


return(
  <h1>Fetching data</h1>
)





 
}

export default About