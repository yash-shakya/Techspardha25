import { rubik_wet_paint } from "./fonts";

interface RubikWetHeadingProps {
    text: string;
}

export default function RubikWetHeading( { text }: RubikWetHeadingProps ) {
	return (
		<>
			<div
				className={`${rubik_wet_paint.className} font-black text-center tracking-wider container mx-auto con text-8xl max-lg:text-7xl max-md:text-5xl max-sm:text-4xl max-xs:text-2xl`}
			>
				{text}
			</div>
		</>
	);
}
