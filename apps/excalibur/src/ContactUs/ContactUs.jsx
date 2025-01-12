import React from 'react';

function ContactUs() {
  return (
    <div className="contactUs relative">
      <a
        href="mailto:technobyte@nitkkr.ac.in"
        className="relative inline-block px-6 py-3 bg-[rgba(0,0,0,0.842)] backdrop-blur-[20px] text-white cursor-pointer transition-all ease-in-out duration-300 mt-4 rounded-[10px] border-none z-2
        hover:rounded-[20px]
        hover:after:bg-[#bb13fe81]
        hover:after:border-[#7c00b5]
        hover:after:rounded-[20px]
        hover:after:h-full 
        hover:after:w-full 
        hover:after:shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,0_0_0.5rem_#bc13fe,inset_0_0_0.5rem_#bc13fe]
        after:content-['']
        after:absolute 
        after:inset-0
        after:border-2 
        after:border-[#7c00b5] 
        after:rounded-[10px] 
        after:z-[-1] 
        after:transition-all 
        after:duration-300"
      >
        <button className="w-full h-full text-white font-kode text-[1.2rem] font-medium no-underline">
          Contact Us
        </button>
      </a>
    </div>
  );
}

export default ContactUs;
