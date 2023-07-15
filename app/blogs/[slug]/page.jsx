// "use client";



// import NavBar from '@/Components/NavBar';
// import Post from '@/Components/post/Post';
// import NewsLetter from '@/Components/NewsLetter';
// import Copyright from '@/Components/Copyright';

import { SINGLE_POST } from "@/Services/graphql/query";


// import Loader from '@/Components/Loader';
// import Copyright from "@/components/Copyright";
// import NavBar from "@/components/NavBar";
// import NewsLetter from "@/components/NewsLetter";
// import Post from "@/components/post/Post";
// import BlogPreviewSkeleton from "@/components/BlogPreviewSkeleton";
// import BlogsCardSkeleton from "@/components/blogCardSkeleto";
import { GetAllBlogs, GetSinglePostDetails, getPostData } from "@/Redux/helper/Blogs";
import Post from "@/components/post/Post";



// export const revalidate = 60;

// export async function generateStaticParams(){
//   const data = await GetAllBlogs();
//   console.log("hello")
//   return data.allBlog.map((blog)=>{
//     return{
//       slug:blog.slug.current
//     }
//   })
// }

export async function generateMetadata({params}){
  const data = await GetSinglePostDetails(params.slug);
  // console.log("dataclient",data.allBlog);
  if(!data){
    return{
      title:"Post Not Found",
      description:"Post you are trying to get is not available"
    }
  }
  return {
    title:data.allBlog[0].title,
    description:data.allBlog[0].description
  }
}

const Page = async({ params }) => {



  //   const router = useRouter({params});
  //

  // console.log(params.slug)

  // console.log(params, params.slug);

  // const { data, error, loading } = useQuery(SINGLE_POST, {
  //   variables: { slug: params.slug },
  // });

  // // console.log(params)

  // if (loading) {
  //   console.log("loading");
  // }
  // if (data) {
  //   console.log(data);
  //   if(document.body.getElementsByClassName("body-overflow-hidden")!=null){
  //     document.body.classList.remove("body-overflow-hidden");
  
  //     }
  // }

  const data = await GetSinglePostDetails(params.slug);

  
  // console.log("AllBlogs",p.allBlog[0].slug.current);

  // console.log(data);



  return (
    <>
    
      <div className="bg-slate-900 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-1 py-6 ">
          
            <Post blogs={data.allBlog[0]} />
          
        </div>
      </div>
    </>
  );
};

export default Page;

// export async function getServerSideProps(context){
//   const {slug} = context.query;

//     const blogs = await client.fetch(`*[_type=="blog" && slug.current=='${slug}']`);
//     const user = await client.fetch(`*[_id == '${blogs[0].User.Admin._ref}']`)

//     console.log("bl",user)

//     return{
//       props:{
//         blogs:blogs[0],user:user[0]
//       }
//     }

//   }
