import { gql } from "@apollo/client";

export const GET_POST_MAIN =`

query GetPost{
  latestBlogs: allBlog(sort:{createdAt:DESC},limit:3){
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

export const GET_POST_PAGE = `

query GetPost{
  latestBlogs: allBlog(sort:{createdAt:DESC},offset:0,limit:3) {
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
  pinnedBlogs: allBlog(limit: 4, sort: { createdAt: DESC }, where: { pinned: { eq: "true" } }) {
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


export const FETCH_MORE = `

query GetPost($limit:Int){
  latestBlogs: allBlog(sort:{createdAt:DESC},limit: $limit,offset:7) {
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


export const SINGLE_POST=`
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

export const SINGLE_POST_OPENGRAPH=`
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



export const SINGLE_P=`
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
export const SEARCH_BLOG=`
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


export const GET_ALL_BLOGS = `

query GetPost{
  allBlog{
   
    slug {
      current
    }
    createdAt

  }
  

  
}

`;