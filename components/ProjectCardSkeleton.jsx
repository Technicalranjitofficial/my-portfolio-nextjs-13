import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProjectCardSkeleton = () => {
    const p = [1,2];
  return (
   <>
{p.map((val,index)=>{
    return  <div key={index} className='border mt-3
    md:border-none border-slate-700 rounded-md px-2  h-64 md:h-36 flex w-full flex-col md:flex-row'>
    <div className='w-full md:w-36 items-center justify-center flex flex-col h-full'>
        <Skeleton width={100} height={100} circle />
    </div>
    <div className='flex w-full justify-around   flex-col flex-1'>
        <Skeleton  height={40}  count={3} className='w-full h-full'/>
    </div>
</div>
})}
   </>
  )
}

export default ProjectCardSkeleton