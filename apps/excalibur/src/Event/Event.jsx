import { useState, useEffect } from "react";
import "./Event.css";
import img1 from '../assets/photos/IMG_0499.jpg'
import img2 from '../assets/photos/IMG_0532.jpg'
import img3 from '../assets/photos/IMG_0540.jpg'
import img4 from '../assets/photos/IMG_5583.jpg'
import img5 from '../assets/photos/IMG_5587.jpg'
import img6 from '../assets/photos/IMG_5592.jpg'

const imgUrls = [img1, img2, img3, img4, img5, img6]
export default function Event(){
    let idx = 0;
    useEffect(()=>{
        setInterval(()=>{
            idx = (idx+1)%imgUrls.length
            document.querySelector(".image-holder").querySelector("img").src = imgUrls[idx];
        }, 4000)
        
        console.log(imgUrls);

    }, [])
    return (
        <div className="w-full h-min rounded-lg px-12 pb-12 bg-white/5 backdrop-blur-xl shadow-[0_0_22px_rgba(0,0,0,0.2)] text-[#d5d5d5] text-[1.5rem] m-2 text-center
        max-xs:scale-[0.9]">
            <h2 className="p-8">What is <span className="text-[pink] font-pirata text-4xl font-thin tracking-[2px] transition-all duration-[1500ms]">Excalibur</span>?</h2>
            <div className="flex justify-evenly flex-wrap">
                <div className="about-event min-w-[300px] h-96 text-[1.5rem] p-8 text-left bg-[rgba(0,0,0,0.42)] rounded-[10px] mb-[1rem] overflow-y-auto basis-[45%]
                max-xs:text-base mini:text-xs">
                    {/* <p className="question-title">
                        What is Excalibur?
                    </p> */}
                    <p className="text-[#E2E8F0] font-kode-mono text-[1.25rem] font-normal mt-[2rem] leading-[1.75rem] max-xs:text-base mini:text-xs">
                        Excalibur is a software development team event.
                        Students from the first, second, pre-final years of all branches and programs are eleigible to participate.
                        Each team will comprise of 3 to 4 members and
                        inclusion of at least one female member is compulsory for each team.
                    </p>
                </div>
                <div className="min-w-[300px] h-96 text-[1.5rem] p-8 text-center bg-[rgba(0,0,0,0.427)] rounded-[10px] basis-[45%]">
                    <p>
                        Excalibur Glimpses
                    </p>
                    <div className="my-8 h-[80%] text-center flex">
                        <img src={imgUrls[0]} alt="Excalibur Glimpses"
                        className="m-auto max-w-full max-h-full rounded-[20px] transition-all duration-[1500s]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}