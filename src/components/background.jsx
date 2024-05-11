import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
    <div className=' absolute w-full py-10 top-[5%] flex justify-center text-zinc-600 text-xl font-semibold'>Your Space.</div>
      <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900'>Notes.</h1>
  
    </div>
    </>
  )
}

export default Background