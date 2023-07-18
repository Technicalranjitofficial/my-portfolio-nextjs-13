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

`;

export const SINGLE_POST_OPENGRAPH=gql`
query GetSinglePost($slug:String){
    allBlog(where:{slug:{current:{eq:$slug}}}){
    title,
   poster{
     asset{
       url
     }
   }
 
   
}
}

`;



export const SINGLE_P=gql`
query GetSinglePost{
    allBlog{

     
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
export const SEARCH_BLOG=gql`
query GetSinglePost($query:String){
  searchBlog: allBlog(where:{title:{matches:$query}}) {
    title
   
    slug {
      current
    }
    poster {
      asset {
        url
      }
    }
    createdAt
  }
}

`;


export const GET_ALL_BLOGS = gql`

query GetPost{
  allBlog{
   
    slug {
      current
    }
    createdAt

  }
  

  
}

`;