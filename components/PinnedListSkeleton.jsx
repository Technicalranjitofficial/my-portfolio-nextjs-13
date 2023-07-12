import React from 'react'
import Skeleton from 'react-loading-skeleton'
import BlogsCardSkeleton from './blogCardSkeleto'

const PinnedListSkeleton = () => {
  return (
    
   
    <div className="flex gap-8 flex-col w-full  md:flex-row ">
    <div className="left flex flex-col w-full md:w-8/12">
     <div className="h-[20rem] md:h-[30rem] rounded-md">
    {/* <Skeleton width={100} height={500} /> */}

    <Skeleton className='bg-slate-600 w-full h-full' />

      </div>


      <div className="text-white mt-5">

       <h1 className="text-3xl font-bold hover:text-blue-500">
        <Skeleton/>
       </h1>


        <p className="mt-2">
        <Skeleton/>
        </p>
        <h1 className="items-center  mt-1 text-sm text-slate-400 font-bold">
        <Skeleton/>
      </h1>
     
      </div>
    </div>

    <div className="right gap-8 flex flex-col w-full md:w-4/12 h-[40rem] pr-2">
     
      <div className='overflow-hidden rounded-md h-1/2   bg-slate-900 justify-center'>
             <div>
            <Skeleton className='h-64'/>
        </div>
        <div>
            <Skeleton count={3} className='mt-2 h-5'/>
        </div>
        </div>


        <div className='overflow-hidden rounded-md h-1/2   bg-slate-900 justify-center'>
             <div>
            <Skeleton className='h-64'/>
        </div>
        <div>
            <Skeleton count={3} className='mt-2 h-5'/>
        </div>
        </div>




        

    </div>
  </div>
  )
}

export default PinnedListSkeleton