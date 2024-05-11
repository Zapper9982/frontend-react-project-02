import React, { useState } from 'react';
import Card from './card';
import { useRef } from 'react';
import { CgNotes } from "react-icons/cg";
import Header from './header';


function Foreground() {
  const [todo, Settodo] = useState("");  
  const [todos, Settodos] = useState([]);
  const ref = useRef(null);



 const Handleform =(e)=>{
    e.preventDefault();
    Settodos([todos ,{desc: todo,
    filesize: "0.9mb",
    close:false,
    tag:{isOpen:true,Tagtitle:"Download now" , TagColor:"sky"}}]);
    Settodo("");

}


  
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

  console.log(todos);
 

  return (
    <>
     <Header/>
    <div 
   
    className=' fixed w-full  h-[90px] flex items-center justify-center z-[4]' >
      <form onSubmit={Handleform}><input 
    value={todo}
    onChange={(e) => Settodo(e.target.value)}
    type="text" name="" id="" placeholder='New Note' className=' w-[200px] text-center bg-zinc-900 text-white rounded-2xl py-2 mt-10' />
    <button type="submit" className=' mx-3 w-[80px] py-2  bg-sky-400 rounded-2xl text-white text-extrabold '>Create</button></form></div> 
    <div ref={ref} className='fixed z-[3] top-40 left-0 w-full h-screen flex gap-5 fex-wrap flex-row p-5'>
      
    {data.map((item,index)=>(
       < Card data={item} referenco={ref}/>
      ))} 
    </div>
    </>
  )
}

export default Foreground