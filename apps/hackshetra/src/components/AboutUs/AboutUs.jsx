import React, { useEffect, useRef, useState } from 'react'
import { imageData } from '../../constants/imageData';
import "./AboutUs.css"

function AboutUs(props) {
    const [activeSlide, setActiveSlide] = useState(1);
    const time = useRef(null)
    const timer = () => {
        clearTimeout(time.current)
        time.current = setTimeout(() => {
            setActiveSlide((prev) => prev == 5 ? 1 : prev + 1)
        }, 2500)
    }

    useEffect(() => {
        timer()
        return () => clearTimeout(time.current) 
    }, [activeSlide])

    return (
        <section className='text-white w-[75%] max-md:w-[90%] mt-11  backdrop-blur-xl md:p-4 font-kode rounded-lg shadow-[0px_0px_10px_0px_#3cb7dd]' id='about'>
            <h3 className='text-center text-4xl max-md:text-2xl my-6'>{props.que}</h3>
            <div className='flex flex-col justify-center items-center md:justify-between md:flex-row'>
                <div id="slider" className='w-[45vw] h-[21vw] max-md:w-[90vw] max-md:h-[40vw] mb-3'>
                    <input
                        type="radio"
                        id="s1"
                        name="slider"
                        checked={activeSlide === 1}
                        onChange={() => { setActiveSlide(1); timer() }}
                    />
                    <input
                        type="radio"
                        id="s2"
                        name="slider"
                        checked={activeSlide === 2}
                        onChange={() => { setActiveSlide(2); timer() }}
                    />
                    <input
                        type="radio"
                        id="s3"
                        name="slider"
                        checked={activeSlide === 3}
                        onChange={() => { setActiveSlide(3); timer() }}
                    />
                    <input
                        type="radio"
                        id="s4"
                        name="slider"
                        checked={activeSlide === 4}
                        onChange={() => { setActiveSlide(4); timer() }}
                    />
                    <input
                        type="radio"
                        id="s5"
                        name="slider"
                        checked={activeSlide === 5}
                        onChange={() => { setActiveSlide(5); timer() }}
                    />

                    <label id="slide1" htmlFor="s1" className='backdrop-blur-lg rounded-xl'><img src={imageData[0]} alt="img1" className='border border-cyan-400 bg-cyan-800/20 shadow-[0px_0px_15px_0px_#3cb7dd] rounded-lg' loading='lazy'/></label>
                    <label id="slide2" htmlFor="s2" className='backdrop-blur-lg rounded-xl'><img src={imageData[1]} alt="img2" className='border border-cyan-400 bg-cyan-800/20 shadow-[0px_0px_15px_0px_#3cb7dd] rounded-lg' loading='lazy'/></label>
                    <label id="slide3" htmlFor="s3" className='backdrop-blur-lg rounded-xl'><img src={imageData[2]} alt="img3" className='border border-cyan-400 bg-cyan-800/20 shadow-[0px_0px_15px_0px_#3cb7dd] rounded-lg' loading='lazy'/></label>
                    <label id="slide4" htmlFor="s4" className='backdrop-blur-lg rounded-xl'><img src={imageData[3]} alt="img4" className='border border-cyan-400 bg-cyan-800/20 shadow-[0px_0px_15px_0px_#3cb7dd] rounded-lg' loading='lazy'/></label>
                    <label id="slide5" htmlFor="s5" className='backdrop-blur-lg rounded-xl'><img src={imageData[4]} alt="img5" className='border border-cyan-400 bg-cyan-800/20 shadow-[0px_0px_15px_0px_#3cb7dd] rounded-lg' loading='lazy'/></label>
                </div>
                <p className='about-event w-[75%] lg:w-[35%] my-6 h-56 lg:h-fit overflow-y-auto scroll scroll-smooth '>
                    {props.data}
                </p>
            </div>
        </section>

    )
}

export default AboutUs