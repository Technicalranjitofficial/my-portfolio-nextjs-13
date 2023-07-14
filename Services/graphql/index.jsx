// import ApolloClient from "apollo-client";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client"
// require("dotenv").config();

export const client = new ApolloClient({
  // uri:"https://helkh138.api.sanity.io/v1/graphql/production/experiment",
  cache:new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://helkh138.api.sanity.io/v1/graphql/production/experiment',
  }),
  

})