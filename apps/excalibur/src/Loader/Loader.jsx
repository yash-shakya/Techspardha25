import React from "react";
import sword from "../assets/photos/loader.svg";
import backgroundImage from "../assets/photos/Home_Page.jpg";

const Loader = () => {
  return (
    <div
      className="flex items-center justify-center h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Replace with the path to your local image
      }}
        >
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated Neon Background */}
        <div className="absolute w-[550px] h-[550px] rounded-full blur-3xl animate-spin-slow pulse-neon"></div>

        {/* Sword Image with Pulsing and Upward Animation */}
        <img
          src={sword}
          alt="Excalibur Sword"
          className="relative h-[500px] m-2 animate-pulse-then-move-down"
          style={{
            filter:
              "drop-shadow(0 0 20px rgba(255, 20, 147, 0.8)) drop-shadow(0 0 40px rgba(255, 20, 147, 1))",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
