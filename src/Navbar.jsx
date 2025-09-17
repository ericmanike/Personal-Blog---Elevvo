import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaWindowClose} from 'react-icons/fa'
import { Search } from './searchContext.jsx'
import { useContext } from 'react'

function Navbar() {
const [find, setFind] = useContext(Search)

const [search, setSearch] = useState(false)

 const [Textboxe, setTextboxe] = useState('')

  return (
    <div className='w-full  h-[200px] text-[10px] md:text-2xl flex items-center justify-center  z-70  relative'>
    <ul className="
    flex space-x-8 bg-[#1f0942] p-5 text-3xl 
     absolute h-[150px] w-full z-50 
    justify-between items-center lg:pr-10 lg:pl-16
     top-0 left-0 right-0 mx-auto
    ">

  <div className="flex flex-row justify-around text-white space-x-6">
    <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:h-[5px]  after:w-0 after:bg-red-600 
                   after:transition-all after:duration-300 after:ease-in-out 
                   hover:after:w-[100%] cursor-pointer">
      <NavLink to="/">Home</NavLink>
    </li>

    <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:h-[5px] after:w-0 after:bg-red-600
                   after:transition-all after:duration-300 after:ease-in-out 
                   hover:after:w-full cursor-pointer">
      <NavLink to="blog">Blog</NavLink>
    </li>

    <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:h-[5px]  after:w-0 after:bg-red-600 
                   after:transition-all after:duration-300 after:ease-in-out 
                   hover:after:w-[100%] cursor-pointer">
      <NavLink to="contact">Contact</NavLink>
    </li>
  </div>

  <input  
    type="text"
    placeholder="Search Post..."
    value={find}
    onChange={(e) => setFind(e.target.value)}
    className={`bg-amber-50 h-[50%] text-[18px] w-[500px] lg:ml-[550px] 
                 border-indigo-950 p-3 max-md:ml-auto
                 absolute top-[150px]  md:top-7  max-md:w-[70vw]
                ${search ? " block " : "hidden"} 
                text-black text-2xl rounded-2xl outline-none
                 focus:ring-blue-500 border-2 border-blue-500
                focus:border-blue-500 `}
    style={{ boxShadow: "0px 0px  10px black" }}
  />

  <div
    className="flex flex-row justify-around gap-5 text-white text-2xl cursor-pointer p-5 max-md:absolute max-md:top-14  max-md:right-3"
    onClick={() => 
      setSearch(!search) 
    }
  >
    {!search ? (
      <FaSearch className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
    ) : (
      <FaWindowClose className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out bg-red-500" />
    )}
  </div>
</ul>


      
   
    </div>
  )
}

export default Navbar