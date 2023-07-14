
"use client"
import { setMainPageBlogList } from '@/Redux/reducers/BlogsSlice'
import { store } from '@/Redux/store/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Ap = ({data}) => {

    const dispatch  = useDispatch();
    const d = useSelector((state)=>state.BlogSlice.mainPageBlogList);
    
    useEffect(()=>{
        if(data){
            dispatch(setMainPageBlogList(data));
        }
    },[data])
    
  return (
    <div>
        {JSON.stringify(d)}
        <button onClick={()=>store.dispatch(setMainPageBlogList([]))}>Clear data</button>
    </div>
  )
}

export default Ap