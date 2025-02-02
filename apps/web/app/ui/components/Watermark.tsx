import Image from "next/image";
import logo from "../../../public/technoLogo.svg";
import Carousel from "./Carousel";
import { TEAMS } from "../../constants/teampage";

export default function Watermark() {
	const teamArray = Object.values(TEAMS);
	return (
		<div className="w-full overflow-hidden flex flex-col justify-start items-center gap-3 mt-9">
			{/* TODO: Its not looking Good */}
			{/* <div className="w-[230px] text-center text-[#d2d6db]/60 text-base font-medium font-['Satoshi Variable'] leading-snug">
				Team Techspardha 🙌🏼
			</div> */}

			<div className="w-full h-fit relative flex-col justify-start items-start">
				<Carousel css="basis-1/4" controls={false} delay={1000} toScroll={true}>
					{teamArray.map((item, index) => (
						<div key={index} className="w-fit bg-transparent">
							<Image
								alt="logo"
								className="w-[360px]  m-3 mix-blend-soft-light opacity-30"
								src={item.logo}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
