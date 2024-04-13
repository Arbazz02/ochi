import React, { useEffect, useState } from 'react'

function Eye() {
  const [rotate,setRotate]=useState(0);
  const [rotatemain,setRotatemain]=useState(5);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mousex=e.clientX;
      let mousey=e.clientY;

      let deltax=mousex-window.innerWidth/2;
      let deltay=mousey-window.innerHeight/2;

      var angle=Math.atan2(deltay,deltax)*(180/Math.PI);
      setRotate(angle-180);
    })
  })
  useEffect(()=>{
    window.addEventListener("mousemove",(a)=>{
      setRotatemain(a);

    })
  })
  return (
    <div className='eye w-full h-screen overflow-hidden '>
      <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
      <div className='absolute   top-40 left-1/2 -translate-x-[50%] -tarnslate-y-[50%] flex items-center justify-center gap-10'>
        <div id='mains' className=' w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center '>
            <div className=' w-2/3 h-2/3 bg-black rounded-full relative '>
              <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw] '>PLAY</h1>
            <div style={{transform:` translate(-50%,-50%) rotate(${rotate}deg) `}} className='  line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
              <div className=' w-6 h-6 bg-zinc-50 rounded-full '></div>
            </div>
            </div>
        </div>
        <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-50 flex justify-center items-center'>
           <div className=' w-2/3 h-2/3 bg-black rounded-full relative'>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw] uppercase'>play</h1>
           <div style={{transform:` translate(-50%,-50%) rotate(${rotate}deg) `}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
           <div className=' w-6 h-6 bg-zinc-50 rounded-full'></div>
           </div>
           </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Eye
