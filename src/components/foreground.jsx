import React from 'react'
import Card from './card'
import { useRef } from 'react';



function Foreground() {
  const ref = useRef(null);
  const data = [
    {desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque qui veritatis sit dignissimos.",
    filesize: "0.9mb",
    close:false,
    tag:{isOpen:true,Tagtitle:"Download now" , TagColor:"sky"},},
    {desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque qui veritatis sit dignissimos.",
    filesize: "0.9mb",
    close:true,
    tag:{isOpen:false,Tagtitle:"Download now" , TagColor:"blue"},},
    {desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque qui veritatis sit dignissimos.",
    filesize: "0.9mb",
    close:false,
    tag:{isOpen:true,Tagtitle:"Upload now " , TagColor:"blue"},},
  ];
  return (
    
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex gap-10 flex-wrap p-5'>
      {data.map((item,index)=>(
       < Card data={item} referenco={ref}/>
      ))}
     
      
    </div>
  )
}

export default Foreground