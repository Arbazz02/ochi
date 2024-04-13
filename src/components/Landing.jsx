import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function Landing() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className=' w-full h-screen bg-zinc-100 text-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create","Eye-Opening","Presentation"].map((item,index)=>{
                return (
                <div className='masker  '>
                 <div className='w-fit flex itmes-end overflow-hidden  ' >
                   {index===1 && 
                   (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] w-[9vw] rounded-md h-[5.3vw] top-[.5vw] relative'>
                    <img className=' w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                     </motion.div>)}
                 <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[8vw] leading-[.94]  font-['Founders_Grotesk'] font-semibold">
                        {item}
                    </h1>
                </div>
                </div>
                );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-600 mt-12 flex justify-between items-center py-3 px-10 capitalize'>
            {["For Public and Private Companies","From the First Pitch to IPO"].map((item,index)=>(<p className='text-md font-light tracking-tight leading-none'>
                {item}
            </p>))}
            <div className='start flex gap-3'>
                <div className='text-sm border-[1px] rounded-full px-6 py-2 font-light uppercase '>start the project</div>
                <div className='w-10 h-10 flex justify-center items-center  border-[1px] rounded-full'>
                    <MdArrowOutward/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
