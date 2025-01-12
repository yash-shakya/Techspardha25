import { useState } from 'react'
import './App.css'
import techSpardhaLogo from "./assets/techspardhaLogo.svg"

function App() {

  return (
    <>
      <div className={`min-h-screen h-min w-screen absolute bg-map bg-no-repeat bg-fixed bg-60% bg-center md:bg-bottom `}>
        <div className='flex justify-between items-center p-4 mx-8 -mb-10 sm:mx-14 md:mx-20 lg:mx-32'>
          <div className='text-white text-6xl text-center'>{"<"}</div>
          <img src={techSpardhaLogo} alt="techSpardhaLogo" />
        </div>
        <div className="text-[#8FFFFF] text-center text-4xl md:text-6xl font-porter-sans-block tracking-wide">HACKSHETRA</div>
      </div>
    </>
  )
}

export default App
