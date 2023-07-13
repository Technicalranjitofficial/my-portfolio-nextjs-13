"use client";

import React, { useState } from "react";

// import NavBar from '@/Components/NavBar';
// import Post from '@/Components/post/Post';
// import NewsLetter from '@/Components/NewsLetter';
// import Copyright from '@/Components/Copyright';
import { useQuery } from "@apollo/client";
import { SINGLE_POST } from "@/Services/graphql/query";
import { useRouter } from "next/navigation";

// import Loader from '@/Components/Loader';
import Copyright from "@/components/Copyright";
import NavBar from "@/components/NavBar";
import NewsLetter from "@/components/NewsLetter";
import Post from "@/components/post/Post";
import BlogPreviewSkeleton from "@/components/BlogPreviewSkeleton";
import BlogsCardSkeleton from "@/components/blogCardSkeleto";

const Page = ({ params }) => {
  //   const router = useRouter({params});
  //

  // console.log(params.slug)

  console.log(params, params.slug);

  const { data, error, loading } = useQuery(SINGLE_POST, {
    variables: { slug: params.slug },
  });

  // console.log(params)

  if (loading) {
    console.log("loading");
  }
  if (data) {
    console.log(data);
    if(document.body.getElementsByClassName("body-overflow-hidden")!=null){
      document.body.classList.remove("body-overflow-hidden");
  
      }
  }

  return (
    <>
    
      <div className="bg-slate-900 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-1 py-6 ">
          {loading ? (
            <div className="">
              <BlogPreviewSkeleton />
            </div>
          ) : (
            <Post blogs={data.allBlog[0]} />
          )}
        </div>
      </div>
    </>
  );
};

export default Page;

// export async function getServerSideProps(context){
//   const {slug} = context.query;

//     const blogs = await client.fetch(`*[_type=="blog" && slug.current=='${slug}']`);
//     const user = await client.fetch(`*[_id == '${blogs[0].User.Admin._ref}']`)

//     console.log("bl",user)

//     return{
//       props:{
//         blogs:blogs[0],user:user[0]
//       }
//     }

//   }
