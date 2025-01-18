import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Register from './components/Resgister/Register.jsx'
import Themes from './components/Themes/Themes.jsx'
import Data from './components/Themes/Data.jsx'
import './components/Themes/Themes.css'

function App() {

  return (
    <>
      <div className={`min-h-screen flex flex-col items-center h-min w-full absolute bg-map bg-no-repeat bg-fixed bg-55% bg-center md:bg-bottom`}>
        <Navbar />
        <div className='w-fit items-center flex flex-col'>
          <h1 className={`text-[#8FFFFF] text-center text-[2rem] md:text-8xl font-porter-sans-block tracking-[0.25rem] [text-shadow:5px_4px_3px_#00cccc] transition-all duration-500
          sm:text-[3.5rem]
          md:text-[4rem] 
          lg:text-[5rem] 
          xl:text-[6rem] xl:[text-shadow:6px_6px_3px_#00cccc]`}>HACKSHETRA</h1>

          <div className='text-white text-[2.5rem] font-blanka mt-14  backdrop-blur-sm w-fit align-middle text-center p-4 pt-0 mb-10'>
            DESIGN | DEVELOP | DOMINATE
          </div>

          <div className=' w-fit h-min rounded-lg p-5 bg-white/5 backdrop-blur-xl shadow-md
          text-gray-300 text-2xl mx-2 text-center font-pirata
            max-md:scale-[1] max-sm:scale-[0.8] max-xs:scale-[0.7]'>

            <Register />

          </div>
        </div>
        <AboutUs />
        <Themes data={Data} activeSlide={2}/>
      </div>


    </>
  )
}

export default App
