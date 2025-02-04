import React from 'react'
import "./Footer.css"
import techspardha from "../../assets/footerlogo.webp"
import {
    FaDiscord,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";


function Footer() {
    return (
        <footer className='w-[50%] flex flex-col items-center'>
            <div className='footerCover relative text-white md:w-[25%] w-[80%] h-14 bg-slate-700 before:animate-border-spin overflow-hidden rounded-lg hover:rounded-2xl hover:bg-black transition-all duration-300 ease-in-out hover:before:hidden'>
                <button className='w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] m-[3px] backdrop-blur-xl bg-gray-950/80 rounded-lg text-xl hover:bg-cyan-500/30 transition-all duration-300 hover:rounded-2xl ease-in-out '>Contact Us</button>
            </div>
            <div className="relative my-5 shadow-[0px_0px_10px_0px_#3cb7dd] py-2 bg-gradient-to-b from-slate-800 to-slate-950 rounded-lg px-4">
                {/* may comment this based on UI */}
                <div className="absolute  mt-10 inset-0 -z-10 bg-no-repeat bg-center md:bg-contain"></div>

                {/* may comment this based on UI */}
                <div className="container mx-auto flex flex-col items-center ">
                    <div className="w-72 h-32 md:w-96 md:h-32 relative">
                        <img
                            src={techspardha}
                            alt="Techspardha Logo"
                            className="object-contain"
                        />
                    </div>

                    <p className="text-white text-xs md:text-sm flex items-center gap-1 pt-2 border-t-2 mb-5 border-[#00a6ff66]">
                        Developed with <span className="text-red-500 animate-pulse">❤️</span>{" "}
                        by Technobyte
                    </p>

                    <nav className="flex gap-6 items-center">
                        <a
                            // href={socials.discord}
                            className="text-white hover:text-cyan-400 transition-colors"
                            aria-label="Discord"
                        >
                            <FaDiscord size={20} />
                        </a>
                        <a
                            // href={socials.linkedin}
                            className="text-white hover:text-cyan-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            // href={socials.twitter}
                            className="text-white hover:text-cyan-400 transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            // href={socials.youtube}
                            className="text-white hover:text-cyan-400 transition-colors"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a
                            // href={socials.instagram}
                            className="text-white hover:text-cyan-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer