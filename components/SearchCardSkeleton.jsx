import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SearchCardSkeleton = () => {
  return (
    <div className='rounded-md bg-slate-900 p-5'>
{
    Array(3).fill(0).map((val,index)=>{
        return  <div key={index} className=' '>
        <Skeleton />
        <Skeleton width="50%" count={2} />
        <br />
        <div className='bg-slate-800 w-full h-0.5'></div>
        <br />
      </div>
       })
}
    </div>
   
  )
}

export default SearchCardSkeleton