import Loader from "@/components/Loader";
import ReactLoading from 'react-loading';
export default function Loading(){
    return   <div className="flex gap-8 flex-col w-full pt-28 md:flex-row ">
    <div className="left flex flex-col w-full md:w-8/12">
      <div className="h-[30rem] bg-slate-700
      animate-pulse duration-75 relative rounded-md overflow-hidden">
       
      </div>

      <div className="text-white mt-2">
       {Array(4).fill(0).map((val,index)=>{
        return  <div className="items-center  text-sm mt-2 text-slate-400 bg-slate-700 animate-pulse w-full h-2 font-bold">
        </div>
       })}
       
      </div>
    </div>

    <div className="right gap-8 flex flex-col w-full md:w-4/12 h-[40rem]">
       <div  className='h-1/2 animate-pulse bg-slate-700 rounded-md relative'>
       
      </div>

      <div className='h-1/2 mt-2 animate-pulse bg-slate-700 rounded-md relative'>
        
      </div>
      
    </div>
  </div>
}