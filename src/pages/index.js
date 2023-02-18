import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Inter } from "@next/font/google";
import AllPost from "Components/Post";
import Landing from "Components/Landing";
import { useState } from "react";
import Link from "next/link";
import Navbar from "Components/Navbar";
import {GiCrossedSabres} from "react-icons/gi"
const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  const [searchbar, setSearchbar] = useState(false);
  const [input, setInput] = useState("");
  return (
    <>
      <Head>
        <title>Blogiee</title>
      </Head>
      <Navbar searchbar={searchbar} setSearchbar={setSearchbar} />
      {searchbar? (
        <div className="flex items-center justify-center cursor-pointer">
        <div className="relative max-sm:w-[300px]  h-40 z-4 overflow-hidden flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-md   w-[500px]  mx-16 border">
        <GiCrossedSabres  onClick={()=>setSearchbar(false)} color="white" className="absolute z-10 top-2 right-4"/>
          <input
            type="text"
            className="border-2 outline-none h-10 pl-2 absolute top-4 rounded-md"
            onChange={(e) => setInput(e.target.value)}
            placeholder="search here"
          />
          <div className="flex items-start  h-[100px] absolute top-14 justify-center overflow-y-scroll scrollbar-hide flex-col">
           
            {posts
              .filter((serchedata) => {
                if (input === "") {
                  return serchedata;
                } else if (
                  serchedata.frontmatter.title
                    .toLowerCase()
                    .includes(input.toLowerCase())
                ) {
                  return serchedata;
                }
              })
              .map((serchedata) => {
                return (
                  <div className="cusror-pointer text-white font-lg mt-4">
                    <Link href={`/blog/${serchedata.slug}`}><p>{serchedata.frontmatter.title}</p></Link>
                  </div>
                );
              })}
          </div>
        </div>
        </div>
      ) : (
        ""
      )}

      <Landing />
      <div className="grid grid-cols-1 gap-8 grid-flow-row grid-rows-8 h-auto px-12  ">
        {posts.map((post, index) => {
          return <AllPost key={index} post={post}></AllPost>;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
