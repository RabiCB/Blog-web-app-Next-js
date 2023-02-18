import Link from "next/link";
import {RiEarthFill} from "react-icons/ri"
import {AiFillCopy} from "react-icons/ai"
import dayjs from "dayjs"
import { useState ,useEffect} from "react";

import ClipLoader from "react-spinners/ClipLoader";


const AllPost = ({ post }) => {

  const fromatedate=(date)=>{
   return dayjs(date).format('D  MMM, YYYY')
  }
  let [loading, setLoading] = useState(false);
  const [copy,setCopy]=useState(false)
  const [read,setRead]=useState(false)
  const hanldleClick=(text)=>{
      navigator.clipboard.writeText(text)
      
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setCopy(true)
      }, 1500);
  }
 

  return (
    <div className="flex max-sm:flex-col border-none flex-nowrap  items-start justify-start rounded-md   h-full">
      <img className="w-[200px] max-md:w-[160px] max-md:h-[160px] max-sm:w-[120px] max-sm:h-[120px] border-2 border-slate-200 h-[200px] mr-12 rounded-lg object-contain" src={post.frontmatter.cover_image}/>
      <div className="flex items-start flex-col flex-1 justify-start gap-2">
      <span className="font-semibold text-gray-400 flex items-center justify-center"><RiEarthFill className="mr-2"/>{fromatedate(post.frontmatter.date)}</span>
      <Link href={`/blog/${post.slug}`}><h1 className="font-semibold font-lg ">{post.frontmatter.title}</h1></Link>
      {read?<p className="font-sm">{post.frontmatter.excerpt}</p>:<p className="font-sm ">{post.frontmatter.excerpt.substring(0,50)}...</p>}
      <span className="text-gary-400 text-[12px] cursor-pointer" onClick={()=>setRead(!read)}>{read?"readless":"readmore"}</span>

    
      {post.frontmatter.package?
       <div className="bg-black text-white w-[200px] max-sm:text-[12px]  h-10 flex  items-start justify-start relative rounded-lg"> 
      <span className="px-4 py-2 text-[12px] ">{post.frontmatter.package}</span>
       <AiFillCopy onClick={()=>hanldleClick(post.frontmatter.package)} className="cursor-pointer absolute bottom-[2px] right-2"/>
       {copy?<p className="bottom-[2px] absolute right-6 text-[8px]">copied</p>:""}
       {loading?<ClipLoader
        color="blue"
        loading={loading}
        size={20}
        className="absolute top-[2px] right-2"
        aria-label="Loading Spinner"
        data-testid="loader"
      />:''}
      </div>:''
}     
       </div>
      
      
    </div>
  );
};

export default AllPost;
