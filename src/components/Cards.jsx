import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
    
  return (
    <motion.div data-scroll data-scroll-scetion data-scroll-speed=".1" className='w-full  h-screen px-20 flex items-center gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2 relative'>
            <div className='card rounded-xl w-full h-full bg-[#004D43] relative flex items-center justify-center '>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-5 px-3 py-3 border-2 rounded-full border-[#4E8951] '>&copy; 2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
            <div className='cards rounded-xl w-full h-full bg-[#212121] relative flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-5 px-3 py-3 border-2 rounded-full border-[#4E8951] uppercase '>rating 5.0 on clutch</button>
            </div>
            <div className='cards rounded-xl w-full h-full bg-[#212121] relative flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-5 px-3 py-3 border-2 rounded-full border-[#4E8951] uppercase '>business bootcap alumni</button>
            </div>
        </div>
      
    </motion.div>
  )
}

export default Cards
