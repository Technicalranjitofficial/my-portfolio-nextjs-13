import BlogPreviewSkeleton from '@/components/BlogPreviewSkeleton'
import PinnedListSkeleton from '@/components/PinnedListSkeleton'
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton'
import BlogsCardSkeleton from '@/components/blogCardSkeleto'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const About = () => {
  return (
    <div className='text-red-500 pt-28'>
        {/* About */}
        {/* <Skeleton width={200} height={200}/> */}
        
        {/* <ProjectCardSkeleton/> */}
        <PinnedListSkeleton/>
        <BlogPreviewSkeleton/>
    </div>
  )
}

export default About