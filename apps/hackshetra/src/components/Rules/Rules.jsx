import React from 'react'
import "./Rules.css"

function Rules(props) {
  return (
    <section className='flex flex-col items-center text-white w-[55%] max-md:w-[80%] min-h-fit my-14 shadow-[0px_0px_10px_0px_#3cb7dd] rounded-lg backdrop-blur-xl ' id='rules'>
      <h3 className='text-4xl max-md:text-2xl m-9 font-kode'>Rules and Guidelines</h3>
      <ul className='rules max-h-[60svh] w-[85%] relative flex flex-col items-center overflow-y-auto mb-9 '>
        {props.data.map((item) => (
          <li key={item.key} className="w-[98%] bg-cyan-700/30 mb-4 rounded-xl backdrop-blur-xl border-gray-600 border-[1px]">
            <p className="before:content-['🔹'] my-5 pl-4 text-xl">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Rules