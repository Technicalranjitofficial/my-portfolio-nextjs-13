import { gql } from "@apollo/client";

export const GET_POST_MAIN = gql`

query GetPost($limit:Int){
  latestBlogs: allBlog(sort:{createdAt:DESC},limit: $limit) {
    title
    description
    slug {
      current
    }
    poster {
      asset {
        url
      }
    }
    user {
      title
    }
    createdAt
  }
  

    allProject{
        title,
        description,
     
        tags,
        createdAt,
        githubLink,
        demolink
        projectImage{
          asset{
            url
          }
        }
        
        
        
      }
}

`;

export const GET_POST_PAGE = gql`

query GetPost($limit:Int,$pinnedLimit:Int,$offset:Int){
  latestBlogs: allBlog(sort:{createdAt:DESC},limit: $limit,offset:$offset,where:{pinned:{neq:true}}) {
    title
    description
    slug {
      current
    }
    poster {
      asset {
        url
      }
    }
    user {
      title
    }
    createdAt
  }
  pinnedBlogs: allBlog(limit: $pinnedLimit, sort: { createdAt: DESC }, where: { pinned: { eq: true } }) {
    title
    description
    slug {
      current
    }
    poster {
      asset {
        url
      }
    }
    user {
      title
    }
    createdAt
  }

  
}

`;


export const FETCH_MORE = gql`

query GetPost($limit:Int,$offset:Int){
  latestBlogs: allBlog(sort:{createdAt:DESC},limit: $limit,offset:$offset,where:{pinned:{neq:true}}) {
    title
    description
    slug {
      current
    }
    poster {
      asset {
        url
      }
    }
    user {
      title
    }
    createdAt
  }
  

  
}

`;


export const SINGLE_POST=gql`
query GetSinglePost($slug:String){
    allBlog(where:{slug:{current:{eq:$slug}}}){

     
        title,
   description,
   slug{
     current
   }
   poster{
     asset{
       url
     }
   }
 
   user{
     title
   }
   createdAt
    contentRaw
  }
}

`