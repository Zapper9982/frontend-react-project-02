import React from 'react'
import { CgNotes } from "react-icons/cg";

function Header() {
  return (
    <>
    <div className='flex px-8 justify-start items-center bg-slate-700 h-[80px]'>
    <div className=' flex justify-center items-center text-[1.9em] h-[100%]'><CgNotes color='#000'  />
    <h1 className='text-white font-sans font-extrabold'>WobbleNotes</h1></div>
     </div>
     </>
  )
}

export default Header