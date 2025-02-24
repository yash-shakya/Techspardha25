import Link from "next/link";
import { tempNotifications } from "../../constants/landingpage";

export default function NotificationCard() {
	return (
		<div className="h-[auto] flex-col justify-start items-center gap-[30px] inline-flex">
			<div className="flex flex-col gap-[20px] sm:text-2xl">
				{tempNotifications.map((tempNoti, i) => {
					return (
						<div
							className="h-6 flex flex-row justify-start gap-[20px] text-[#e5e1e6]/60 hover:text-[#e5e1e6] hover:font-extrabold cursor-pointer"
							key={i}
						>
							<div className="font-extrabold font-['JetBrains Mono'] uppercase leading-normal">
								&gt;&gt;
							</div>
							<div className="font-bold font-['Satoshi Variable'] leading-normal">
								{tempNoti.title}
							</div>
						</div>
					);
				})}
			</div>
			<Link href={"/notifications"}>
				<div className="px-4 py-1.5 bg-white/10 rounded-[32px] border border-white/10 justify-start items-center gap-2.5 inline-flex overflow-hidden">
					<div className="text-white text-sm sm:font-bold font-['Satoshi Variable'] leading-normal">
						View Them All
					</div>
				</div>
			</Link>
		</div>
	);
}
