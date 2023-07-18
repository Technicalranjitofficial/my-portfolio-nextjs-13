
export default function Loading(){
    return   <div className="flex flex-col  w-full border-t-2 border-l-2 border-r-2 border-b-2 rounded-md md:border-b-0 border-slate-800 md:border-slate-700  mt-0 ">
    <div className="justify-center h-[20rem] md:h-[30rem] items-center  animate-pulse w-full flex relative">

      <div className='max-h-[30rem] h-full  w-full bg-slate-700 rounded-md animate-pulse'>

      </div>

     
    </div >
   {Array(5).fill(0).map((val,index)=>{
    return  <div key={index} className="mt-2 h-2 bg-slate-700 w-full animate-pulse">
    </div>
   })}
  </div >
  
}