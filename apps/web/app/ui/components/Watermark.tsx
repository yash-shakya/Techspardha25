import Image from "next/image";
import logo from "../../../public/technoLogo.svg";
import Carousel from "./Carousel/Carousel";

export default function Watermark() {
  return (
    <div className="w-full overflow-hidden flex flex-col justify-start items-center gap-3 mt-9">
      <div className="w-[230px] text-center text-[#d2d6db]/60 text-base font-medium font-['Satoshi Variable'] leading-snug">
        Team Techspardha 🙌🏼
      </div>
      
      <div className="w-[1200px] h-[54px] relative flex-col justify-start items-start">
        <Carousel>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
          <div className="w-[216px] h-[152px] mix-blend-soft-light">
            <Image
              alt="logo"
              className="w-[216px] h-[152px] mix-blend-soft-light"
              src={logo}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
