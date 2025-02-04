import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer className='w-[50%] flex flex-col items-center'>
            <div className='footerCover relative text-white md:w-[25%] w-[80%] h-14 bg-slate-700 before:animate-border-spin overflow-hidden rounded-lg hover:rounded-2xl hover:bg-black transition-all duration-300 ease-in-out hover:before:hidden'>
                <button className='w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] m-[3px] backdrop-blur-xl bg-gray-950/80 rounded-lg text-xl hover:bg-cyan-500/30 transition-all duration-300 hover:rounded-2xl ease-in-out '>Contact Us</button>
            </div>
                <p className="text-white  flex items-center gap-1 pt-2 my-5 ">
                    Developed with <span className="text-red-500 animate-pulse">❤️</span>{" "}
                    by Technobyte
                </p>
        </footer>
    )
}

export default Footer