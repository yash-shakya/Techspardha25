import DevCard from "../../ui/components/DevCard";
import { DEVS, THEMES } from "../../constants/devpage";
import SERVICES from "../../server/actions/services";

export default async function Developers() {
	const devs = DEVS;

	return (
		<>
			<div className="w-[85%] m-auto">
				<h1 className="p-4 text-5xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text">
					Our Developers
				</h1>
				{/* {DEVS[0]?.members[0] && <DevCard dev={DEVS[0].members[0]} theme={THEMES[3]} />} */}
				<div className="flex flex-col gap-12 p-4">
					{devs.map((devGroup, index) => (
						<div key={index} className="flex flex-col gap-4">
							{/* <h2 className="text-4xl tracking-wider font-mono">
                                {devGroup.id === "aboutAppDevs" ? "App Developers" : "Developers"}
                            </h2> */}
							<div className="flex flex-wrap gap-4">
								{devGroup.members.map((dev, index) => (
									<DevCard
										key={index}
										dev={dev}
										theme={THEMES[(index+devGroup.members.length) % THEMES.length]}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
