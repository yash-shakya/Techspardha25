"use client";

import { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
          onClick={toggleDropdown}
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
        <div className="h-16 px-12 md:bg-zinc-800/40 rounded-full shadow-[0px_0px_15px_0px_rgba(0,51,102,1.00)] border-b border-zinc-800/50 backdrop-blur-[14.10px] justify-center items-center gap-8 inline-flex">
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
                    if (pathname !== "/") router.push("/");
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

      <div className="flex md:hidden w-[86%] items-center justify-between px-4 mt-[36px]">
        <div className="flex items-center justify-start">
          <button
            onClick={toggleDropdown}
            className="relative group focus:outline-none"
            aria-expanded={isDropdownOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={30} className="m-3" />
          </button>
        </div>

        <div className="relative flex items-center justify-center w-full">
          <div className="w-16 h-16 rounded-full border-2 border-[#b3cef9bc] z-[-10] drop-shadow-head absolute"></div>
          <Link href="/">
            <Image alt="" src={logo}></Image>
          </Link>
        </div>
      </div>

      {isDropdownOpen && (
        <div
          id="mobile-menu"
          className={`flex flex-col items-center justify-center w-[100vw] absolute top-[-32] left-0 bg-[#001926] z-30 p-4 rounded-lg 
              transition-all duration-300 ease-in-out transform translate-y-[-100%] opacity-0
             animate-[slideDown_0.3s_ease-in-out_forwards]`}
        >
          {renderNavItems()}
        </div>
      )}

      {isDropdownOpen && (
        <button
          onClick={toggleDropdown}
          className="z-40 absolute top-0 left-6 font-bold text-white transition duration-300"
        >
          ✕
        </button>
      )}
    </nav>
  );
}
