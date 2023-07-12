import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BlogPreviewSkeleton = () => {
  return (
   <div className='pt-12 md:pt-20 w-full flex flex-col'>
    <div className='flex flex-col'>
    <Skeleton className='w-full h-[30rem]' />
    <Skeleton className='w-full h-10 mt-3' />
    <Skeleton className='w-full h-5 mt-2' count={10}/>
    </div>

    
   </div>
  )
}

export default BlogPreviewSkeleton