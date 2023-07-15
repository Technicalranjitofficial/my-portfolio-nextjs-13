"use client"

import { convertDate } from '@/Redux/helper/Other'
import { setAllBlogList, setBlogOffset } from '@/Redux/reducers/BlogsSlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogsCardSkeleton from '../blogCardSkeleto'
import Image from 'next/image'

const BlogList = ({data}) => {
  
  const blogs = useSelector((state)=>state.BlogSlice.allBlogList);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setAllBlogList(data));
    dispatch(setBlogOffset(data.length));
  },[data])
  return (

    <>
{blogs.length==0 && <BlogsCardSkeleton count={6}/>}
    <div>
         <div className="grid mt-3 grid-cols-1  md:grid-cols-3 gap-8">
         {blogs && blogs.map((val,index)=>{
           return  <Link 
           key={index}
           
           href={`/blogs/${val.slug.current}`}
           //  href="/"
           className="hover:translate-y-1">
          <div className="overflow-hidden rounded-md group min-h-full  bg-slate-900 justify-center">
            <div className="relative md:h-52 h-64 ">
              {/* <img
                className="object-cover md:max-h-52 opacity-90 group-hover:opacity-80  h-full w-full object-center"
                
                src={val.poster.asset.url}
                alt="img"
                /> */}

<Image
              src={val.poster.asset.url}
              layout="fill"
              objectFit="cover"
              alt="image"
              className="rounded-md"
            />
            </div>
            <h1 className="font-semibold text-slate-300 text-md md:text-2xl line-clamp-2 pt-2 font-Roboto">
              {/* {val.title} */}
              {val.title}

            </h1>
            <h1 className="items-center ml-0 mt-1 text-sm text-slate-400 font-bold">
             Ranjit Das
            </h1>
            <span className="items-center ml-0 mt-1 text-xs text-slate-400 font-bold">
             {/* {convertDate(val.createdAt)} */}
             {convertDate(val.createdAt)}
            </span>
          
            <div className="mb-4"></div>
          </div>
        </Link>
         })}
          
        </div>
    </div>
         </>
  )
}

export default BlogList