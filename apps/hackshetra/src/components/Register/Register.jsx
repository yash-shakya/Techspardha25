import React from 'react'
import "./Register.css"

function Register() {
  return (
    <div className='footerCover relative text-white md:w-[50%] w-[90%] h-14 bg-slate-700 before:animate-border-spin overflow-hidden rounded-lg hover:rounded-2xl hover:bg-black transition-all duration-300 ease-in-out hover:before:hidden'>
      <a href="https://unstop.com/p/hackshetra-2025-national-institute-of-technology-nit-kurukshetra-1411205">
        <button className='w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] m-[3px] backdrop-blur-xl bg-gray-950/80 rounded-lg text-xl max-md:text-base hover:bg-cyan-500/30 transition-all duration-300 hover:rounded-2xl ease-in-out '>
          Register Here
        </button>
      </a>
    </div>
  )
}

export default Register