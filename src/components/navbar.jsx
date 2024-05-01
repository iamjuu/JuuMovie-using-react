import React from 'react'
import LiItem from './LiElement'
import { FaSearch,FaBars } from 'react-icons/fa';


function Navbar(){
    return(
      <>
        <div className='flex gap-11  justify-center  items-center w-full text-white z-10 fixed'>
<div className='w-2/5 flex  relative'>

      <input
        className=' m-5 w-full backdrop-blur-sm bg-white/10  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 z-10'
        type="text"
     
      />
      <div className="w-7 mt-6 top-0 left-full ml-2 mt-1 z-10 ">
        <FaSearch className="text-gray-500" />

      </div>
      <FaBars className="w-7 flex mt-6 sm:hidden text-gray-500 mt-1 ml-2 z-10" />



    </div>

<LiItem/>


        </div>

        
      </>
    );
}

export default Navbar;