import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "Components/Navbar";
import { useEffect, useState } from "react";
import {AiFillCopy} from "react-icons/ai"
import {RiEarthFill} from "react-icons/ri"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import md from 'markdown-it';
export default function SinglePost({ frontmatter,slug, content }) {
  const { title, about, date,excerpt} = frontmatter;
  let [loading, setLoading] = useState(false);
  const [copy,setCopy]=useState(false)

  return (
    <>
      <Navbar />
      <div className="px-10 max-md:px-4 max-sm:2 h-auto">
        <div className=" flex flex-col gap-6 mt-8">
            <div className="flex flex-col items-start justify-start relative">
            <img className="w-full h-[300px] object-contain" src={frontmatter.cover_image} alt="bg"/>
            <div className="text-[12px] absolute flex items-center justify-center bottom-[-30px] right-4"><RiEarthFill className="mr-2"/>{date}</div>
            </div>
          <h6 className="font-bold text-center font-xl">{title || <Skeleton/>}</h6>
          <p>{about}</p>

          {frontmatter.package ? (
            <>
            <p>using npm:</p>
            <div className="bg-black text-white w-[200px] h-10 flex items-start justify-start relative rounded-lg">
              <span className="px-4 py-2 text-[12px] ">
                {frontmatter.package}
              </span>
              <AiFillCopy
                onClick={() => hanldleClick(frontmatter.package)}
                className="cursor-pointer absolute bottom-[2px] right-2"
              />
              {copy ? (
                <p className="bottom-[2px] absolute right-6 text-[8px]">
                  copied
                </p>
              ) : (
                ""
              )}
              {loading ? (
                <ClipLoader
                  color="blue"
                  loading={loading}
                  size={20}
                  className="absolute top-[2px] right-2"
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                ""
              )}
            </div>
            </>
          ) : (
            <Skeleton width={200} height={40}/>
          )}
          {frontmatter.package2 ? (
            <>
            <p>using yarn:</p>
            <div className="bg-black text-white w-[200px] h-10 flex items-start justify-start relative rounded-lg">
              <span className="px-4 py-2 text-[12px] ">
                {frontmatter.package2}
              </span>
              <AiFillCopy
                onClick={() => hanldleClick(frontmatter.package2)}
                className="cursor-pointer absolute bottom-[2px] right-2"
              />
              {copy ? (
                <p className="bottom-[2px] absolute right-6 text-[8px]">
                  copied
                </p>
                
              ) : (
                ""
              )}
              {loading ? (
                <ClipLoader
                  color="blue"
                  loading={loading}
                  size={20}
                  className="absolute top-[2px] right-2"
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                ""
              )}
            </div>
            </>
          ) : (
            ""
          )}
          {
            content?<div >
                <h2 className="mb-4">Below is an example of {slug}:</h2>
                <div className="bg-black text-white w-auto max-sm:text-[12px] h-auto p-4 flex-col flex items-start justify-start relative rounded-lg" dangerouslySetInnerHTML={{ __html: md().render(content) }}/>
            </div>:""
          }
        </div>
        
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
 
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}
