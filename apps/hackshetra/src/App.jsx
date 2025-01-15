import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
    <div className={`min-h-screen h-min w-screen absolute bg-map bg-no-repeat bg-fixed bg-60% bg-center md:bg-bottom`}>
      <Navbar/>
      
      <h1 className={`text-[#8FFFFF] text-center text-4xl md:text-6xl font-blanka tracking-wide`}>HACKSHETRA</h1>
    </div>

    </>
  )
}

export default App
