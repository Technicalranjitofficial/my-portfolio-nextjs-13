import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const BlogsCardSkeleton = ({count}) => {
   
  return (
    <div className='w-full h-full grid mt-3 grid-cols-1  md:grid-cols-3 gap-8'>
       {Array(count).fill(0).map((val,index)=>{
        return <div key={index} className='overflow-hidden rounded-md min-h-full   bg-slate-900 justify-center'>
             <div>
            <Skeleton className='h-64'/>
        </div>
        <div>
            <Skeleton count={3} className='mt-2 h-5'/>
        </div>
        </div>
       })}
    </div>
  )
}

export default BlogsCardSkeleton