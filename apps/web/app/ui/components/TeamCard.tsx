// Purpose: A component that displays a card with information about a developer.

import Image from "next/image";

interface Contacts {
	name: string;
	post: string;
	imageURL?: string;
}

interface ContactCardProps {
	contact: Contacts;
}

// Component that displays a card with information about a developer.
export default function ContactCard({
	contact,
}: ContactCardProps) {
    let theme = "slate";
    if(contact.post === "Convenor") {
        theme = "stone";
    }

    
	return (
		<>
			<div
				className={`w-[350px] h-[500px] rounded-2xl relative shadow-lg ${theme === "stone" ? "shadow-stone-900" : "shadow-slate-900"}`}
			>
				<div
					className={`h-[55%] ${theme === "stone" ? "bg-stone-500" : "bg-slate-500"} rounded-t-2xl text-gray-900 flex flex-wrap items-center justify-center relative`}
				>
					{/* A small notch */}
					<div className="absolute w-[100px] h-3 bg-gray-800 rounded-3xl top-3"></div>
					{/* Contact Name */}
					<div
						className={`${
							contact.name.length > 20 ? "sm:text-4xl text-3xl" : "sm:text-5xl text-4xl"
						} font-black text-center flex flex-wrap items-center justify-center w-fit mx-auto mb-[7rem] bg-gradient-to-b from-gray-700 to-gray-950 text-transparent bg-clip-text p-2 filter drop-shadow-sm`}
					>
						{contact.name}
					</div>
				</div>
				{/* Contact Image */}
				<div
					className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 rounded-full w-[200px] h-[200px] shadow-md shadow-${theme}-500`}
				>
					<Image
						src={contact.imageURL ?? "/dev.png"}
						alt={contact.name}
						// width={200}
						// height={200}
                        fill={true}
                        objectFit="cover"
						className="rounded-full"
					/>
				</div>
				<div className="h-[45%] bg-gray-900 rounded-b-2xl pt-5 flex flex-col gap-3">
					<div className="p-4 grow flex flex-col">
						{/* Conatct Post */}
						<div className={`text-3xl ${theme === "stone" ? "text-stone-500" : "text-slate-500"} my-auto text-center ${contact.post === "Convenor" ? "font-bold" : ""}`}>
							{contact.post}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
