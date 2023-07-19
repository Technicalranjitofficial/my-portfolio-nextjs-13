// // import ApolloClient from "apollo-client";
// import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client"
// // require("dotenv").config();

// export const client = new ApolloClient({
//   // uri:"https://helkh138.api.sanity.io/v1/graphql/production/experiment",
//   cache:new InMemoryCache({
//     // typePolicies:{
//     //   Query:{
//     //     fields:{
//     //       blog:{
//     //         keyArgs:false,
//     //         merge(existing, incoming) {
//     //           return incoming;
//     //         },
//     //         read(existing) {
//     //           return existing;
//     //         },
//     //       }
//     //     }
//     //   }
//     // }
//   }),
//   link: new HttpLink({
//     uri: 'https://helkh138.api.sanity.io/v1/graphql/production/experiment',
//     defaultOptions: {
//       watchQuery: {
//         fetchPolicy: 'cache-and-network',
//         nextFetchPolicy: 'cache-first',
        
//         fetchOptions: {
//           cacheTime: 1000, // 15 minutes in milliseconds
//         },
//       },
//     },
//   }),
  

// })