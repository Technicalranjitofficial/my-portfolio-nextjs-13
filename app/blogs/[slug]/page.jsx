
import {  GetSinglePostDetails } from "@/Redux/helper/Blogs";
import Post from "@/components/post/Post";

export async function generateMetadata({params}){
  const data = await GetSinglePostDetails(params.slug);
  if(!data.data){
    return{
      title:"Post Not Found",
      description:"Post you are trying to get is not available"
    }
  }
  return {
    title:data.data.allBlog[0].title,
    description:data.data.allBlog[0].description,
    alternates:{
      canonical:`/blogs/${params.slug}`
    }
  }
}

const Page = async({ params }) => {
  const data = await GetSinglePostDetails(params.slug);

  return (
    <>
    
      <div className="bg-slate-900 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-1 py-6 ">
            <Post blogs={data.data.allBlog[0]} />
        </div>
      </div>
    </>
  );
};

export default Page;