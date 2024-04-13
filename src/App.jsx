import React from 'react'
import Noob from './components/Noob'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen  text-white bg-zinc-100' >
      <Noob/>
      <Landing/>
      <Marque/>
      <About/>
      <Eye/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
