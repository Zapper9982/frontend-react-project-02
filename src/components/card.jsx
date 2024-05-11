import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data ,referenco}) {
     
  return (
    <motion.div  drag dragConstraints={referenco} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} style={{userSelect:'text'}} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm mt-5 font-semibold' style={{userSelect:'text'}} >{data.desc}</p>
      <div className='footer  absolute bottom-0 w-full  left-0  '>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close? <IoClose />: <LuDownload size=".8em" color='#000' />}
            </span>
        </div>
        { data.tag.isOpen && <div className={`tag w-full py-3 ${data.tag.TagColor==="blue"? "bg-sky-400": "bg-green-600"} flex justify-center items-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.Tagtitle}</h3></div>}
       
         
       
      </div>
    </motion.div>
  )
}

export default Card