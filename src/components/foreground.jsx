import React, { useState } from 'react';
import Card from './card';
import { useRef } from 'react';
import { CgNotes } from "react-icons/cg";
import Header from './header';



export default function Foreground() {
  const [todo, Settodo] = useState("");  
  const [todos, Settodos] = useState([]);
  const [important, setImportant] = useState(false); 
  const ref = useRef(null);
  const sample = {desc: "This is A sample note         TRY dragging it Around !!!", close:false, tag:{isOpen:true,Tagtitle:"Copy Note" , TagColor:"green"}, importance:true}
  
  function deleteTodo (deleteValue)  {
    const restTodoList = [
      ...todos.filter((val) => {
        return val!== deleteValue;
      }),
    ];
    Settodos(restTodoList);
  };

  const Handleform =(e)=>{
    e.preventDefault();
    if (todo) {
      Settodos([...todos, {desc: todo, close:false, tag:{isOpen:true,Tagtitle:"Copy Note" , TagColor:"green"}, importance:important}]); 
      Settodo("");
      setImportant(false); 
    }
  }
  const editTodo = (updatedTodo) => {
    Settodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };
  return (
    <>
      <Header/>
      <div className='fixed w-full h-[90px] flex items-center justify-center z-[4]'>
        
        <form onSubmit={Handleform}>
          <input 
            value={todo}
            onChange={(e) => Settodo(e.target.value)}
            type="text" 
            name="" 
            id="" 
            placeholder='New Note' 
            className='w-[200px] text-center bg-zinc-900 text-white rounded-2xl py-2 mt-10' 
          />
         
          <button type="submit" className='mx-3 w-[80px] py-2 bg-sky-400 rounded-2xl text-white text-extrabold'>Create</button>
          <label htmlFor="important" className="ml-3 text-white text-bold px-2 font-extrabold ">
            <input
              type="checkbox"
              id="important"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
               
            />
            Important
          </label>
        </form>
      </div> 
      <div ref={ref} className='fixed z-[3] top-40 left-0 w-full h-screen flex gap-5 fex-wrap flex-row p-5'>
        {todos.map((item, index) => (
          <Card key={index} data={item} referenco={ref} deleteTodo={deleteTodo} editTodo={editTodo}/>
        ))}
        <Card data={sample} referenco={ref} deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}


