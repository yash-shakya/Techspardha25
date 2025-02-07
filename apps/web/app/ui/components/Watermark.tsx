import Image from "next/image";
import logo from "../../../public/technoLogo.svg";

export default function Watermark() {
  return (
    <div className="w-[1920px] h-[auto] flex-col justify-start items-center gap-3 inline-flex overflow-hidden mt-[35px]">
      <div className="w-[230px] h-[22.40px] text-center text-[#d2d6db]/60 text-base font-medium font-['Satoshi Variable'] leading-snug">
        Team Techspardha 🙌🏼
      </div>
      <div className="w-[1200px] h-[54px] relative flex-col justify-start items-start flex">
        {/* <div className="w-[1200px] h-[54px] bg-gradient-to-r from-black via-black to-black" /> */}
        <div className="h-[54px] pl-2.5 py-2.5 justify-end items-center inline-flex overflow-hidden">
          <div className="w-[1200px] self-stretch justify-start items-center gap-[100px] inline-flex">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
