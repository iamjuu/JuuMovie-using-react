import React from 'react'

function liItem(){
    return(
        <>
<ul className='flex gap-10 m-3 hidden sm:flex z-10'>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'>series</li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'>kids</li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'>comedies</li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'>action</li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'>Documentary</li>
</ul>


        </>
    );
}

export default liItem;