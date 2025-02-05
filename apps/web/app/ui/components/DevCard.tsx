// Purpose: A component that displays a card with information about a developer.

import { isValidURL } from "../../helpers";
import Image from "next/image";
import Link from "next/link";
import {
    TbBrandGithubCopilot,
    TbBrandInstagramFilled,
    TbBrandLinkedinFilled,
} from "react-icons/tb";

interface Developer {
    name: string;
    year: string;
    github?: string;
    insta?: string;
    linkedin?: string;
    imageUrl?: string;
}

interface DevCardProps {
    dev: Developer;
    theme?: string; // A css theme
}

// Component that displays a card with information about a developer.
export default function DevCard({ dev, theme = "stone" }: DevCardProps) {
    // Check if the Links are valid URLs
    const isGithubValid = isValidURL(dev.github ?? "");
    const isInstaValid = isValidURL(dev.insta ?? "");
    const isLinkedinValid = isValidURL(dev.linkedin ?? "");
    const anyLinkValid = isGithubValid || isInstaValid || isLinkedinValid;
    // Forcing the theme
    
    if(dev.year === "Sophomore")
        theme = "slate";

    return (
        <>
            <div className={`w-[280px] h-[400px] rounded-2xl relative shadow-lg shadow-slate-900 todo-theme`}>
                <div className={`h-[55%] ${theme === "slate" ? "bg-slate-500" : "bg-stone-500"} rounded-t-2xl text-gray-900 flex flex-wrap items-center justify-center relative todo-theme`}>
                    {/* A small notch */}
                    <div className="absolute w-[100px] h-3 bg-gray-800 rounded-3xl top-3"></div>
                    {/* Dev Name */}
                    <div
                        className={`${
                            dev.name.length > 15 ? "text-2xl" : "text-3xl"
                        } font-black text-center flex flex-wrap items-center justify-center w-fit mx-auto mb-[5rem] bg-gradient-to-b from-gray-700 to-gray-950 text-transparent bg-clip-text filter drop-shadow-sm`}
                    >
                        {dev.name}
                    </div>
                </div>
                {/* Dev Image */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 rounded-full w-[150px] h-[150px] shadow-md shadow-slate-500 todo-theme`}>
                    <Image
                        src={dev.imageUrl ?? "/dev.png"}
                        alt={dev.name}
                        // width={200}
                        // height={200}
                        fill={true}
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div className="h-[45%] bg-gray-900 rounded-b-2xl pt-5 flex flex-col gap-3">
                    <div className="p-2 grow flex flex-col">
                        {/* Dev Year */}
                        <div className={`text-2xl text-slate-500 mt-auto text-center todo-theme`}>
                            {dev.year}
                        </div>
                    </div>
                    {/* SOCIAL LINKS */}
                    {anyLinkValid && (
                        <div className={`flex justify-center gap-7 w-fit mx-auto px-8 mt-auto border-t py-3 border-slate-500 todo-theme`}>
                            {isGithubValid && (
                                <Link href={dev.github ?? ""}>
                                    {" "}
                                    <TbBrandGithubCopilot className={`text-slate-500 text-4xl cursor-pointer todo-theme`} />{" "}
                                </Link>
                            )}
                            {isInstaValid && (
                                <Link href={dev.insta ?? ""}>
                                    {" "}
                                    <TbBrandInstagramFilled className={`text-slate-500 text-4xl cursor-pointer todo-theme`} />{" "}
                                </Link>
                            )}
                            {isLinkedinValid && (
                                <Link href={dev.linkedin ?? ""}>
                                    {" "}
                                    <TbBrandLinkedinFilled className={`text-slate-500 text-4xl cursor-pointer todo-theme`} />{" "}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
