import React from 'react'
import {BsThreeDots} from "react-icons/bs"
import { useState } from 'react'
import Link from "next/link"
import {AiOutlineSearch} from "react-icons/ai"
const Navbar = ({setSearchbar,searchbar}) => {
  return (
    <div className='flex items-center justify-between px-8 h-16  z-2  text-black'>
        <div className='flex items-center gap-6 justify-center'>
           <Link href="/"><h1 className='font-bold text-xl cursor-pointer'>Blogiee</h1></Link>
        <ul className=' flex items-center justify-center '>
            <li className='m-4 text-lg max-sm:text-[14px] cursor-pointer font-semibold'><a href='/'>Home</a></li>
            <BsThreeDots fontSize="24px" className='ml-4 '/>
        </ul>
        </div>
        <div className='flex items-center justify-center '>
            <AiOutlineSearch onClick={()=>setSearchbar(!searchbar)} fontSize="24px" className='mr-6 flex items-center justify-center cursor-pointer'/>
          
        </div>
    </div>
  )
}

export default Navbar