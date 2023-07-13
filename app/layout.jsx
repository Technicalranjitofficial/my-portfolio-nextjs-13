import Link from "next/link";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Provider } from "react-redux";
import { store } from "@/Redux/store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/Services/graphql";
import { Porviders } from "./provider";
import NewsLetter from "@/components/NewsLetter";
import Copyright from "@/components/Copyright";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const metadata = {
  title: "Ranjit Das - Portfolio | Blogs",
  description: "Technicalranjit,Technical ranjit,This blog is belongs to technical ranjit,tech and science blog,technical website,tips and tricks website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Porviders>
          <div className="bg-slate-900 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-3 z-50 md:px-0 ">
              <NavBar />
              <SkeletonTheme baseColor="#162037" highlightColor="#343536">
                {children}
              </SkeletonTheme>
              <NewsLetter />
              <div className="border-t mt-7 border-gray-600 "></div>
              <Copyright />
            </div>
          </div>
        </Porviders>
      </body>
    </html>
  );
}
