"use client";

import { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavItem {
	name: string;
	link: string;
}
interface NavBarProps {
	navitems: NavItem[];
}

export default function NavBar({ navitems }: NavBarProps) {
	const router = useRouter();
	const pathname = usePathname();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	const renderNavItems = () =>
		navitems
			.filter((item) => item.name !== "logo") // Exclude logo from nav items
			.map((item, i) => (
				<Link
					href={item.link}
					key={i}
					className="text-center text-white text-sm font-bold uppercase mb-2"
				>
					{item.name}
				</Link>
			));

	return (
		<nav className="relative">
			{/* Desktop View */}
			<div className="hidden md:flex items-center justify-center mt-[36px]">
				<div className="h-16 px-12 py-2 md:bg-zinc-800/40 rounded-full shadow-[0px_0px_15px_0px_rgba(0,51,102,1.00)] border-b border-zinc-800/50 backdrop-blur-[14.10px] justify-center items-center gap-8 inline-flex">
					{navitems.map((item, i) => {
						if (item.name === "logo")
							return (
								<Link href="/" key={i}>
									<Image alt="Logo" src={logo} height={45} width={45} />
								</Link>
							);
						else if (item.name === "LECTURES" || item.name === "SPONSORS") {
							return (
								<span
									className="cursor-pointer text-center text-white text-xs font-bold font-['Satoshi Variable'] uppercase leading-normal tracking-widest"
									key={i}
									onClick={() => {
										// redirect to home page
										if(pathname !== "/") router.push("/");
										// Go to the required section
										const targetElement = document.getElementById(
											item.name.toLowerCase()
										);
										if (targetElement) {
											targetElement.scrollIntoView({
												behavior: "smooth",
												block: "start",
											});
										}
									}}
								>
									{item.name}
								</span>
							);
						} else
							return (
								<Link
									href={item.link}
									className="text-center text-white text-xs font-bold font-['Satoshi Variable'] uppercase leading-normal tracking-widest"
									key={i}
								>
									{item.name}
								</Link>
							);
					})}
				</div>
			</div>
			<div className="flex md:hidden items-center justify-center px-4 mt-[36px]">
				<button
					onClick={toggleDropdown}
					className="relative group focus:outline-none"
					aria-expanded={isDropdownOpen}
					aria-controls="mobile-menu"
				>
					{/* Glowing Effect */}

					<div className="absolute inset-[-10px] w-16 h-16 rounded-full border-2 border-[#b3cef9bc]  drop-shadow-head "></div>
					<Image alt="Logo" src={logo} height={45} width={45} />
				</button>
			</div>

			{/* Dropdown Menu */}
			{isDropdownOpen && (
				<div
					id="mobile-menu"
					className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bg-[#00000088] z-10 w-[400px] p-4 rounded-lg mt-2"
				>
					{renderNavItems()}
				</div>
			)}
		</nav>
	);
}
