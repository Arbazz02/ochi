import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='text-[4vw] tracking-tight font-["Neue_Montreal"] leading-[4vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" border-t-[1px] border-[#a9bd60] w-full mt-[2vw] flex gap-[19vw] items-center">
        <h1>What you can expect:</h1>
        <h1 className="mt-4 leading-[2.4vw]">
          We create tailored presentations to help <br /> you persuade your
          colleagues, clients, or <br /> investors. Whether it’s live or
          digital, <br /> delivered for one or a hundred people. <br /> We
          believe the mix of strategy and <br />
          design (with a bit of coffee) is what <br /> makes your message clear,
          convincing, <br /> and captivating.
        </h1>
      </div>

      <div className=' border-t-[1px] flex gap-5 pt-10 border-[#a9bd60] w-full mt-[2vw]'>
        <div className='w-1/2'>
            <h1 className='text-[3vw] capitalize font-semibold'>our approach:</h1>
            <button className='py-4 uppercase mt-2 px-10 bg-zinc-900 rounded-full flex items-center gap-5 text-white'>read more 
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-red-400  overflow-hidden'>
            <img className='w-full h-full object-cover'  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="loading.." />
        </div>
      </div>
    </div>
  );
}

export default About
