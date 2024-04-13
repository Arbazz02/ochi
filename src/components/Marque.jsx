import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    
    <div data-scroll data-scroll-scetion data-scroll-speed=".1" className='w-full  py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2  border-b-2 border-zinc-300 flex  uppercase whitespace-nowrap overflow-x-hidden overflow-y-hidden  '>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10,}}  className='text-[25vw] pr-10 leading-none font-["Founders_Grotesk"] font-semibold pt-10 -mb-[7vw]'>
                we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity, duration: 10,}} className='text-[25vw] pr-10 leading-none font-["Founders_Grotesk"] font-semibold pt-10 -mb-[7vw]'>
                we are ochi</motion.h1>
            
                
        </div>
    </div>
  )
}

export default Marque
