import React, { useCallback } from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data, referenco, deleteTodo, editTodo }) {
  const { desc, tag, importance } = data;

  const urgent = importance ? "Important" : "Normal";

  const handleDelete = () => {
    deleteTodo(data);
  };

  const handleEdit = () => {
    const newDesc = window.prompt("Enter new description:", desc);
    if (newDesc) {
      editTodo({
        ...data,
        desc: newDesc,
      });
    }
  };

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(desc);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.text-m'));
    selection.removeAllRanges();
    selection.addRange(range);
  }, [desc]);

  return (
    <motion.div
      drag
      dragConstraints={referenco}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      style={{ userSelect: 'text' }}
      className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
    >
      <FaRegFileAlt />
      <p className='text-m mt-5 font-semibold' style={{ userSelect: 'text' }}>
        {desc}
      </p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5 className='font-bold'>{urgent}</h5>
          <button
            className='w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center hover:bg-red-500'
            onClick={handleDelete}
          >
            <MdDelete />
          </button>
          <button
            className='w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center hover:bg-blue-500'
            onClick={handleEdit}
          >
            <FiEdit2 />
          </button>
        </div>
        {tag.isOpen && (
          <div
            className={`tag w-full py-3 ${importance ? 'bg-red-500' : 'bg-slate-700'} flex justify-center items-center`}
          >
            <h3 className='text-sm font-semibold'>
              <button onClick={handleCopy}>{tag.Tagtitle}</button>
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
