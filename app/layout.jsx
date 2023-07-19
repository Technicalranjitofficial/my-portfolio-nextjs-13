import Link from "next/link";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Provider, useSelector } from "react-redux";
import { store } from "@/Redux/store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/Services/graphql";
import { Porviders } from "./provider";
import NewsLetter from "@/components/NewsLetter";
import Copyright from "@/components/Copyright";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  metadataBase:new URL("https://www.ranjitdas.com.np"),
  title: {
    default:"Ranjit Das - Portfolio | Blogs",
    template:`%s | Ranjit Das`
  },
  description: "Technicalranjit,Technical ranjit,This blog is belongs to technical ranjit,tech and science blog,technical website,tips and tricks website",

  verification:{
    google:"google-site-verification=BQCN5inQQhw7ZfyyOW6giDPeoi2uBPw_LQ1JMyDdKEw"
  }

};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="relative  scrollbar-thin scrollbar-thumb-cyan-600">
        <Porviders>
         
          <div className="bg-slate-900  min-h-screen">
            <div className="mx-auto min-h-screen max-w-screen-xl pb-28 px-3 z-50 md:px-0 ">
              <NavBar />
              <SkeletonTheme baseColor="#162037" highlightColor="#343536">
                {children}
              </SkeletonTheme>
          
              <div className="border-t mt-10 border-gray-800 "></div>
              
              <Copyright  />
             
            </div>

           
          </div>
        </Porviders>
      </body>
    </html>
  );
}
