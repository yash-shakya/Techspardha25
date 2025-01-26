import Image from "next/image";
import logo from "../../../public/technoLogo.svg";
import Carousel from "./Carousel";

export default function Watermark() {
	return (
		<div className="w-full overflow-hidden flex flex-col justify-start items-center gap-3 mt-9">
			<div className="w-[230px] text-center text-[#d2d6db]/60 text-base font-medium font-['Satoshi Variable'] leading-snug">
				Team Techspardha 🙌🏼
			</div>

			<div className="w-full h-fit relative flex-col justify-start items-start">
				<Carousel css="basis-1/4" controls={false} delay={1000} toScroll={true}>
					{[...Array(5)].map((_, index) => (
						<div key={index} className="w-fit bg-transparent">
							<Image
								alt="logo"
								className="w-[216px] mix-blend-soft-light opacity-30"
								src={logo}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
