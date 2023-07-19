"use client"

import { store } from "@/Redux/store/store";
import { client } from "@/Services/graphql";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";


export function Porviders({children}){
    return<Provider store={store}>
        {/* <ApolloProvider client={client}> */}
            {children}
        {/* </ApolloProvider> */}
    </Provider>
}