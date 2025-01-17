import { useState } from 'react'
import { GrDown } from "react-icons/gr";

function Normalnav(){
    return (
        <>
         <div className=" nav-sections 
         hidden md:flex w-fit h-[90%] rounded-[30px] p-3 self-center text-white font-medium border-[1px] border-white/10 bg-white/10 backdrop-blur-sm 
         ">
    <a
        href="#about"
        className="block w-max no-underline px-2.5  text-lg rounded-[30px] transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]"
    >
        About
    </a>
    <a
        href="#themes"
        className="block w-max no-underline px-2.5 text-lg rounded-[30px] transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]"
    >
        Themes
    </a>
    <a
        href="#schedule"
        className="block w-max no-underline px-2.5  text-lg rounded-[30px] transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]"
    >
        Schedule
    </a>
    <a
        href="#rules"
        className="block w-max no-underline px-2.5  text-lg rounded-[30px] transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]"
    >
        Rules
    </a>
</div>

        </>
    )
}

function Droparrow({clickHandle}){
    return (
        <div className='arrow m-auto text-center h-full 
          bg-[rgba(0,0,0,0.468)]
            backdrop-blur-[100px]
            text-[1.5rem]
            relative
            md:hidden
            flex '
     onClick={clickHandle}>
            <GrDown />
        </div>
    )
}
function Blocknav({clickHandle}){
    return (
        <>
            <Droparrow clickHandle={clickHandle}/>
            <div className='dropnav absolute top-[80%] left-1/2 w-screen max-w-[90%] text-center  flex flex-col justify-center items-center gap-2 rounded-[10px] px-4 pb-4 pt-0 bg-black/50 backdrop-blur-[100px] transform -translate-x-1/2'>
                {/* <a href='#sponsors' onClick={clickHandle}>Sponsors</a> */}
                <a href='#about' className=' px-2.5 py-1 font-light w-[100px] mx-auto text-center
                transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]'    onClick={clickHandle}>About</a>
                <a href='#themes' className=' px-2.5 py-1 font-light w-[100px] mx-auto text-cente
                   transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]'  onClick={clickHandle}>Themes</a>
                <a href='#schedule' className=' px-2.5 py-1 font-light w-[100px] mx-auto text-cente
                   transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]
                   ' onClick={clickHandle}>Schedule</a>
                <a href='#rules' className=' px-2.5 py-1 font-light w-[100px] mx-auto text-cente
                   transition-all hover:rounded-[72px] hover:bg-[#bb13fe81] hover:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]
                   '   onClick={clickHandle}>Rules</a>
            </div>
        </>
    )
}

function Dropnav(){
    const [drop, setDrop] = useState(false);
    const clickHandler = ()=>{
        setDrop((prev) => !prev);
    }
    return (
        <>
            {drop ? <Blocknav clickHandle={clickHandler} /> : <Droparrow clickHandle={clickHandler}/>}
        </>
    )
}

export default function Navbar(){
    let back = '<'
    return(
<nav className="text-white font-kode  mt-12 mb-auto w-[95%] flex justify-between transition-[duration] duration-[500ns] relative h-[60px]">
<a className='relative flex justify-center items-center my-auto'><span className="text-[4rem]  my-auto" >{back}</span></a>
            <Normalnav />
            <Dropnav />
            <span className="techspardha_logo 'relative flex justify-center items-center my-auto"   style={{ filter: 'drop-shadow(0px 0px 20px rgb(54, 124, 255))' }}>
                {/* ellipse svg */}
                <svg    
                className="absolute top-[1.0585rem] w-[6.71369rem] h-[2.3125rem] fill-[#367CFF]"
                style={{ filter: 'blur(40.58064270019531px)' }}
                
                xmlns="http://www.w3.org/2000/svg" width="271" height="201" viewBox="0 0 271 201" fill="none">
                    <g filter="url(#filter0_f_2250_4319)">
                        <ellipse cx="135.71" cy="100.436" rx="53.7097" ry="18.5" fill="#367CFF" fillOpacity="0.7"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_2250_4319" x="0.838715" y="0.774261" width="269.742" height="199.323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="40.5806" result="effect1_foregroundBlur_2250_4319"/>
                        </filter>
                    </defs>
                </svg>
                <img src="/images/TechspardhaLogo.svg" alt="T" />
            </span>
        </nav>
    )
}