import React from 'react'
import {AiFillRead} from "react-icons/ai"

const Landing = () => {
  return (
    <div className='relative h-[calc(100vh-16)]  max-md:h-auto max-md:gap-6 grid max-md:place-content-center max-md:place-items-center max-md:grid-cols-1 max-md:grid-rows p-12 gap-20   grid-cols-2 grid-rows-1 '>
        <div className='w-full  border-none  flex items-center justify-center bg-black rounded-md'>
        <a href="https://reactjs.org/"><img className='w-[400px] object-contain p-4 cursor-pointer' src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react-log"/></a>
        </div>
        <div className='flex items-start max-md:items-center max-md:justify-center justify-start gap-4 flex-col'>
        <h4 className='font-extrabold font-2xl'>About React</h4>
        <p className='font-xl leading-normal '>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
        <ul className='mt-2'>
            <p className='mb-4 text-lg font-semibold'>Points to Focus</p>
            <li className="flex items-center justify-start cursor-pointer gap-4 text-blue-400"><AiFillRead color="red"/><a href="https://reactjs.org/docs/hooks-reference.html#usestate">useState</a></li>
            <li className="flex items-center justify-start cursor-pointer gap-4 text-blue-400"><AiFillRead color="red"/><a href="https://reactjs.org/docs/hooks-reference.html#useeffect">useEffect</a></li>
            <li className="flex items-center justify-start cursor-pointer gap-4 text-blue-400"><AiFillRead color="red"/><a href="https://reactjs.org/docs/legacy-context.html#how-to-use-context">useContext</a></li>
            <li className="flex items-center justify-start cursor-pointer gap-4 text-blue-400"><AiFillRead color="red"/><a href="https://reactjs.org/docs/testing-recipes.html#data-fetching">Data fetching using API(Application Programming Interface)</a></li>
            <li className="flex items-center justify-start cursor-pointer gap-4 text-blue-400"><AiFillRead color="red"/><a href="https://reactrouter.com">React Router</a></li>
        </ul>
        </div>
    </div>
  )
}



export default Landing