import React, { useState } from 'react';
import Card from './card';
import { useRef } from 'react';
import { CgNotes } from "react-icons/cg";
import Header from './header';

function Foreground() {
  const [todo, Settodo] = useState(""); // Add missing import for useState hook

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
    <>
     <Header/>
   
    <div ref={ref} className='fixed z-[3] top-40 left-0 w-full h-screen flex gap-5 fex-wrap flex-row p-5'>
      
      {data.map((item,index)=>(
       < Card data={item} referenco={ref}/>
      ))} 
    </div>
    </>
  )
}

export default Foreground