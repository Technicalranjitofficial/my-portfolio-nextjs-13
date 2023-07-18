import { GetAllBlogs } from "@/Redux/helper/Blogs";

export default async function sitemap() {

    const baseUrl = "https://www.ranjitdas.com.np";




    const posts = await GetAllBlogs();
    const posturl = posts.allBlog.map((val,index)=>({
        url:`${baseUrl}/blogs/${val.slug.current}`,
        lastModified:val.createdAt
    }))
    return [
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
      },
      {
        url: baseUrl,
        lastModified: new Date(),
      },

      ...posturl
    
    ]
  }