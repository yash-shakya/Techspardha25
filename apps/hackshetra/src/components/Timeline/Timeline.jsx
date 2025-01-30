import "./Timeline.css";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Card = ({ side, initialX, date, name, detail }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`timeline-card-container relative w-[80%] max-md:w-full mx-auto p-2 px-1 overflow-hidden ${side === "left" ? "pr-[42%] md:pl-[4%] max-md:pr-[calc(50%+1rem)] text-right" : "pl-[42%] md:pr-[4%] max-md:pl-[calc(50%+1rem)] text-left"
        }`}
    >
      <motion.div
        className="card timeline-card w-full h-[12.75rem] max-md:h-40 max-md:p-0 flex flex-col justify-evenly items-center bg-[rgba(0,0,0,0.776)] rounded-[10px] overflow-y-auto shadow-custom max-md:w-[100%] shadow-[0px_0px_10px_0px_#3cb7dd] border border-[cyan]"
        variants={{
          hidden: { x: initialX },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col">
          <span className="text-cyan-500 text-center font-quicksand px-1 py-2 text-xl max-md:text-lg font-extrabold leading-7">
            {date}
          </span>
          <span className="text-cyan-400 mb-2 font-kode text-lg max-md:text-sm max-md:px-1 text-center font-semibold leading-7">
            {name}
          </span>
          <p className="text-white font-quicksand text-base max-md:text-xs text-center px-2 font-normal leading-6">
            {detail}
          </p>
        </div>
      </motion.div>
      <div
        className={`timeline-dot absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2ca7cc] border-[8px] border-white shadow-[0_0_20px_4px_#2ca7cc] ${side === "left" ? "right-[49.3%] max-md:right-[47.5%]" : "left-[49.3%] max-md:left-[47.5%]"
          }`}
      ></div>
    </div>
  );
};

export default function Timeline(props) {
  return (
    <section className="w-[75%] backdrop-blur-xl text-[#d5d5d5] rounded-lg p-5 max-md:px-2 text-center max-md:w-[95%] shadow-[0px_0px_10px_0px_#3cb7dd]" id="schedule">
      <h2 className="m-12 max-md:mb-8 max-md:mt-4 font-kode max-md:text-2xl md:text-4xl tracking-[2px] font-normal">Schedule</h2>
      <div className="timeline-container my-0 relative max-md:w-[100%]">
        <div className="timeline-line absolute left-1/2 top-0 h-full w-2 bg-[#3cb7dd] -translate-x-1/2"></div>
        {props.data.map((item) => (
          <Card
            key={item.key}
            side={item.side}
            initialX={item.initialX}
            date={item.date}
            name={item.name}
            detail={item.detail}
          />
        ))}


      </div>
    </section>
  );
}
