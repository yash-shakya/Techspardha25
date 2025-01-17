import { rubik_wet_paint } from "../fonts";

interface RubikWetHeadingProps {
    text: string;
}

export default function RubikWetHeading( { text }: RubikWetHeadingProps ) {
	return (
		<>
			<div
				className={`${rubik_wet_paint.className} font-black text-center tracking-wider container mx-auto con text-8xl max-lg:text-7xl max-md:text-5xl max-sm:text-4xl max-xs:text-2xl mt-[70px] mb-[-5px] bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.44)] w-[auto] inline-block text-transparent bg-clip-text drop-shadow-head`}
			>
				{text}
			</div>
		</>
	);
}

/*
Refer: https://github.com/tailwindlabs/tailwindcss/discussions/5548 Multiple drop shadows
	   https://design2tailwind.com/blog/tailwindcss-gradient-text/  Text linear gradient
*/