import Link from "next/link";
import { aboutPageImages, ABOUT_TECHSPARDHA } from "../../constants/aboutpage";
import Image from "next/image";

export default function About() {
	return (
		<>
			<div className="space-y-12">
				<h1 className="text-4xl font-extrabold uppercase bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center tracking-wide shadow-xl mb-8">
					About Techspardha
				</h1>

				<section className="space-y-6">
					<h2 className="text-2xl md:text-3xl font-semibold">
						What is Techspardha 2024?
					</h2>
					<p className="text-gray-300 leading-relaxed w-full text-justify">
						{ABOUT_TECHSPARDHA}
					</p>
				</section>
			</div>
			<div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
				{aboutPageImages.map(
					(img: { name: string; link: string }, index: number) => (
            <div
              key={index}
              className="flex w-[90vw] p-2"
            >
              <Image
                src={img.link || "/placeholder.svg"}
                alt={`Guest ${index + 1}`}
                width={1200}
                height={1200}
                sizes="100vw"
                className="object-contain w-full rounded-lg shadow-md"
              />
            </div>
					)
				)}
			</div>

			<Link
				href={`/`}
				className="font-extralight shadow-sm mx-auto w-fit px-3 py-1 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] rounded-2xl m-5"
			>
				View Them All
			</Link>
		</>
	);
}
