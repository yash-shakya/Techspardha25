import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/app/server/actions/constants";

interface SingleEventClientProps {
	event: Event;
}

const SingleEventClient: React.FC<SingleEventClientProps> = async ({
	event,
}) => {
	if (!event) {
		return (
			<div className="bg-[#001926] text-gray-100 p-8 flex items-center justify-center">
				<h1 className="text-3xl">Event not found</h1>
			</div>
		);
	}

	return (
		<div className="bg-transparent text-gray-100 p-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
					<h1 className="text-4xl sm:text-5xl pb-8 font-light bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text  font-[Satoshi Variable]">
						{event.eventName}
					</h1>
					<div className="flex gap-4">
						<Link href="/">
							{" "}
							{/** change this # with link. but no link in Event object */}
							<button className="px-10 font-['Satoshi Variable'] py-1  rounded-l-3xl rounded-r-3xl  bg-gray-800/70 hover:bg-gray-700/50 transition-colors">
								Visit
							</button>
						</Link>
						<Link href="/">
							<button className=" px-0 md:px-6 py-1 w-[160px] md:w-auto rounded-md font-['Satoshi Variable']  rounded-l-3xl rounded-r-3xl bg-gray-800/70 hover:bg-gray-700/50 transition-colors">
								Register Now
							</button>
						</Link>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-4 p-4">
					{/* Event Poster */}
					<div className="flex-shrink-0 w-full md:w-1/2 h-auto rounded-lg overflow-hidden border border-gray-300">
						<Image
							src={event.poster}
							alt={`${event.eventName} event`}
							width={500}
							height={300}
							className="w-full h-auto object-contain"
						/>
					</div>

					{/* Event Details */}
					<div className="flex flex-col w-full md:w-1/2 space-y-6">
						{/* Basic Event Info */}
						<div className="space-y-2">
							<p>
								<span className="font-semibold">Event Venue:</span>{" "}
								{event.venue}
							</p>
							<p>
								<span className="font-semibold">Start Time:</span>{" "}
								{event.startTime}
							</p>
							<p>
								<span className="font-semibold">End Time:</span> {event.endTime}
							</p>
							{event && event.coordinators && event.coordinators.map((coordinator, index) => (
								<p key={index}>
									<span className="font-semibold">Event Coordinator:</span>{" "}
									{coordinator.coordinator_name}
								</p>
							))}
						</div>

						{/* Event Rules */}
						<div className="space-y-2">
							<p className="font-semibold text-2xl">Rules:</p>
							<ul className="space-y-1 list-none">
								{event && event.rules && event.rules.map((rule, index) => (
									<li key={index} className="flex items-start">
										<span className="mr-2">&#10140;</span>
										<span>{rule}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{/* Event Description */}
				<div className="space-y-2 p-4">
					<p className="font-semibold text-2xl">Description:</p>
					<p className="leading-relaxed whitespace-pre-line">
						{event.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleEventClient;
