import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards= [useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation()];
  const handleHover= (index)=>{
    cards[index].start({y:"0"})
  }

  const handleHoverEnd= (index)=>{
    cards[index].start({y:"100%"})
  }

  return (
    <div className="w-full py-20 bg-white text-black">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-10">
        <h1 className=' text-black text-[4vw] leading-none font-["Neue_motreal"] capitalize tracking-tight'>
          Featured Projects:
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className=" relative cardcontainer 1-1/2 h-[75vh]">
            <h1 className='absolute overflow-hidden flex text-[#CDEA68]  z-[9] font-["Founders_Grotesk"] uppercase text-[4vw] leading-none tracking-tight right-0 top-1/2 translate-x-1/2 -translate-y-1/2'>
              {"FYDE".split("").map((item, index) => (
                <motion.span 
                initial={{y:"-100%"}}
                 animate={cards[0]} 
                 transition={{ease:[0.22,1,0.36, 1], delay:index*.09}}
                className=" inline-block">{item}</motion.span>
              ))}
            </h1>
          
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className=" object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="loading..."
              />
            </div>
            <div className="flex gap-3">
            <div className="w-[9vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600  ">audit</h1>
            </div>
            <div className="w-[9vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600 ">copywriting</h1>
            </div>
            <div className="w-[9vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600 ">sales deck</h1>
            </div>
            <div className="w-[9vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600 ">slides design</h1>
            </div>
            </div>
          </motion.div>

          <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer 1-1/2 h-[75vh] relative">
            <h1 className='absolute text-[#CDEA68] flex overflow-hidden  z-[9] font-["Founders_Grotesk"] uppercase text-[4vw] leading-none tracking-tight right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
              {"VISE".split("").map((item, index) => (
                <motion.span 
                initial={{y:"100%"}}
                animate={cards[1]}
                transition={{ease:[0.22,1,0.36, 1],delay:index*.09}}
                className=" inline-block"
                >{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className=" object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="loading..."
              />
            </div>
            <div className="flex gap-3">
            <div className="w-[9vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600  ">agency</h1>
            </div>
            <div className="w-[15vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600  ">company presentation</h1>
            </div>
            </div>
          </motion.div>
          
        </div>

        
        <div className="flex gap-10 mt-32">
        <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className="cardcontainer 1-1/2 h-[75vh] relative">
            <h1 className='absolute text-[#CDEA68]  flex overflow-hidden z-[9] font-["Founders_Grotesk"] uppercase text-[4vw] leading-none tracking-tight left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}}
                animate={cards[2]}
                transition={{ease:[0.22,1,0.36, 1], delay:index*0.08}}
                className=" inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className=" object-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt="loading..."
              />
            </div>
            <div className="flex gap-3">
            <div className="w-[12vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600  ">brand identity</h1>
            </div>
            <div className="w-[15vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600  ">design research</h1>
            </div>
            <div className="w-[15vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600  ">investor deck</h1>
            </div>
            </div>
          </motion.div>

          <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className="cardcontainer 1-1/2 h-[75vh] relative">
            <h1 className='absolute text-[#CDEA68] flex overflow-hidden  z-[9] font-["Founders_Grotesk"] uppercase text-[4vw] leading-none tracking-tight right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
              {"PREMINUM BLEND".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}}
                animate={cards[3]}
                transition={{ease:[0.22,1,0.36, 1],delay:index*0.03}}
                className=" inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className=" object-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt="loading..."
              />
            </div>
            <div className="flex gap-3">
            <div className="w-[15vw] h-[5vh] rounded-full border-[1px] border-zinc-900 mt-5 flex justify-center items-center">
                <h1 className="uppercase font-[Neue-Motreal] font-semibold text-zinc-600  ">barnded template</h1>
            </div>
           
            </div>
          </motion.div>
          </div>
      </div>
    </div>
    
  );
}

export default Featured;
