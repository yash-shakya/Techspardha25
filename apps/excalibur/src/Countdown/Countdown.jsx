import { useEffect, useState } from "react";
import Register from "../Register/Register";


export default function Countdown() {
    // function countdown(sec){
    //     const minutes = Math.floor(sec/60);
    //     const sec_left = sec%60;
    //     const hours = Math.floor(minutes/60);
    //     const minutes_left = minutes%60;
    //     const days_left = Math.floor(hours/24);
    //     const hours_left = hours%24;
    //     return {
    //         "days" : Math.floor(days_left),
    //         "hours" : Math.floor(hours_left),
    //         "minutes" : Math.floor(minutes_left),
    //         "seconds" : Math.floor(sec_left)
    //     }
    // }
    // const eventDate = new Date('2024-01-14T10:00:00')
    // let now = new Date();
    // let timeLeftSec = Math.floor((eventDate - now)/1000);
    // const [left, setLeft] = useState(countdown(timeLeftSec));
    // ##       useEffect(()=>{
    // ##           setLeft(()=>countdown(timeLeftSec))
    // ##       }, [left])

    function countdown(sec) {
        const minutes = Math.floor(sec / 60);
        const sec_left = sec % 60;
        const hours = Math.floor(minutes / 60);
        const minutes_left = minutes % 60;
        const days_left = Math.floor(hours / 24);
        const hours_left = hours % 24;
        return {
            "days": Math.floor(days_left),
            "hours": Math.floor(hours_left),
            "minutes": Math.floor(minutes_left),
            "seconds": Math.floor(sec_left)
        };
    }

    const eventDate = new Date('2025-02-29T08:00:00');
    let now = new Date();
    let timeLeftSec = Math.floor((eventDate - now) / 1000);

    const [left, setLeft] = useState(countdown(timeLeftSec))

    const intervalId = setInterval(() => {
        now = new Date();
        timeLeftSec = Math.floor((eventDate - now) / 1000);
        setLeft(() => countdown(timeLeftSec));
    }, 1000);


    // ### Message for Future Contributors

    //  ##   While I was writing this logic only god and i knows how it was working
    //  ##   Now only god knows..
    //  ##   Issue is that state changes inside setInterval or setTimeout often lead to some unwanted results
    //  ##   If you dont believe that, just console.log(left)
    //  ##   But somehow it is doing what's needed, so I didn't touched it.
    //  ##   Change it on your own risk
    //  ##   Regards -> Debatreya

    return (
        <div className=" w-fit h-min rounded-lg p-5 bg-white/10 backdrop-blur-xl shadow-md
        text-gray-300 text-2xl mt-auto mb-5 mx-2 text-center font-pirata
        max-md:scale-[1] max-sm:scale-[0.8] max-xs:scale-[0.7]">
            <p>Journey into the realms of code starts in...</p>
            <div className="flex justify-evenly">
                <span className="w-[6.04688rem] h-[7.125rem] text-lg m-2.5 p-2.5 flex flex-col justify-evenly text-center bg-black/85 rounded-lg">
                    <p className="text-green-400 text-center font-pirata text-[3.375rem] font-bold">
                        {left.days > 0 ? left.days : "00"}
                    </p>
                    <span className="text-gray-400 text-center font-pirata text-[1.3125rem] font-light">Days</span>
                </span>
                <span className="w-[6.04688rem] h-[7.125rem] text-lg m-2.5 p-2.5 flex flex-col justify-evenly text-center bg-black/85 rounded-lg">
                    <p className="text-yellow-400 text-center font-pirata text-[3.375rem] font-bold">
                        {left.hours > 0 ? left.hours : "00"}
                    </p>
                    <span className="text-gray-400 text-center font-pirata text-[1.3125rem] font-light">Hours</span>
                </span>
                <span className="w-[6.04688rem] h-[7.125rem] text-lg m-2.5 p-2.5 flex flex-col justify-evenly text-center bg-black/85 rounded-lg">
                    <p className="text-blue-400 text-center font-pirata text-[3.375rem] font-bold">
                        {left.minutes > 0 ? left.minutes : "00"}
                    </p>
                    <span className="text-gray-400 text-center font-pirata text-[1.3125rem] font-light">Minutes</span>
                </span>
                <span className="w-[6.04688rem] h-[7.125rem] text-lg m-2.5 p-2.5 flex flex-col justify-evenly text-center bg-black/85 rounded-lg">
                    <p className="text-red-400 text-center font-pirata text-[3.375rem] font-bold">
                        {left.seconds > 0 ? left.seconds : "00"}
                    </p>
                    <span className="text-gray-400 text-center font-pirata text-[1.3125rem] font-light">Seconds</span>
                </span>
            </div>
            <Register />
        </div>
    )
}