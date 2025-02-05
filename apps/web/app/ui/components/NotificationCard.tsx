import Link from "next/link";
import { tempNotifications } from "../../constants/landingpage";

export default function NotificationCard() {
	return (
		<div className="w-[270px] h-[auto] flex-col justify-start items-center gap-[50px] inline-flex">
			<div className="w-[270px] h-[168px] flex flex-col gap-[20px]">
				{tempNotifications.map((tempNoti, i) => {
					return (
						<div
							className="w-[270px] h-6 flex flex-row justify-around text-[#e5e1e6]/60 hover:text-[#e5e1e6] hover:font-extrabold cursor-pointer"
							key={i}
						>
							<div className="text-2xl font-extrabold font-['JetBrains Mono'] uppercase leading-normal">
								&gt;&gt;
							</div>
							<div className="text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal">
								{tempNoti.title}
							</div>
						</div>
					);
				})}
			</div>
			<Link href={"/notification"}>
				<div className="px-4 py-1.5 bg-white/10 rounded-[32px] border border-white/10 justify-start items-center gap-2.5 inline-flex overflow-hidden">
					<div className="text-white text-sm font-bold font-['Satoshi Variable'] leading-normal">
						View Them All
					</div>
				</div>
			</Link>
		</div>
	);
}
