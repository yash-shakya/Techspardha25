import React from 'react'

function NormalNav() {
    return (
        <nav className='max-md:hidden flex h-16 lg:px-12 lg:gap-14 justify-center w-fit p-3 mx-auto font-kode my-9 text-white text-lg bg-cyan-800/15 shadow-[0px_0px_20px_0px_rgba(0,51,102,1.00)] backdrop-blur-sm rounded-full
        md:gap-8 md:px-10'>
            <button className='hover:text-xl transition-all duration-150'>
                About
            </button>
            <button className='hover:text-xl transition-all duration-150'>
                Theme
            </button>
            <a href="" className='w-9 hover:w-10 transition-all du'>

                <span className="techspardha_logo 'relative flex justify-between items-center my-auto" style={{ filter: 'drop-shadow(0px 0px 20px rgb(54, 124, 255))' }}>
                    {/* ellipse svg */}
                    <svg
                        className="absolute top-[1.0585rem] w-[6.71369rem] h-[2.3125rem] fill-[#367CFF]"
                        style={{ filter: 'blur(40.58064270019531px)' }}

                        xmlns="http://www.w3.org/2000/svg" width="271" height="201" viewBox="0 0 271 201" fill="none">
                        <g filter="url(#filter0_f_2250_4319)">
                            <ellipse cx="135.71" cy="100.436" rx="53.7097" ry="18.5" fill="#367CFF" fillOpacity="0.7" />
                        </g>
                        <defs>
                            <filter id="filter0_f_2250_4319" x="0.838715" y="0.774261" width="269.742" height="199.323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="40.5806" result="effect1_foregroundBlur_2250_4319" />
                            </filter>
                        </defs>
                    </svg>
                    <img src="/TechspardhaLogo.svg" alt="T" loading='lazy' decoding='async' />
                </span>
            </a>
            <button className='hover:text-xl transition-all duration-150'>
                Schedule
            </button>
            <button className='hover:text-xl transition-all duration-150'>
                Rule
            </button>
        </nav>
    )
}

function Navbar() {
    return (
        <NormalNav />
    )
}

export default Navbar