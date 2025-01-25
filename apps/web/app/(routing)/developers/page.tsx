import DevCard from "../../ui/components/DevCard";
import { DEVS } from "../../constants/devpage";

export default function Developers() {
	return (
		<>
			<div className="w-[85%] m-auto">
				<h1 className="p-4 text-5xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text">
					Our Developers
				</h1>
				{DEVS[0]?.members[0] && <DevCard dev={DEVS[0].members[0]} />}
			</div>
		</>
	);
}
