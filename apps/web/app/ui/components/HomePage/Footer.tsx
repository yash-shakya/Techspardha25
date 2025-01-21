import Link from "next/link";
import Image from "next/image";
import {
  FaDiscord,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { socials } from "../../../constants/Socials";

export default function Footer() {
  return (
    <footer className="relative bg-transparent py-8 px-4">
      {/* may comment this based on UI */}
      <div
        className="absolute w-screen mt-10 inset-0 -z-10 bg-no-repeat bg-center md:bg-contain"
        style={{
          backgroundImage: "url('/Home/footer-grid.png')",
        }}
      ></div>

      {/* may comment this based on UI */}
      <div className="container mx-auto flex flex-col items-center ">
        <div className="w-72 h-32 md:w-96 md:h-32 relative">
          <Image
            src="/Home/footerlogo.png"
            alt="Techspardha Logo"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-white text-xs md:text-sm flex items-center gap-1 pt-2 border-t-2 mb-5 border-[#00a6ff66]">
          Developed with <span className="text-red-500 animate-pulse">❤️</span>{" "}
          by Technobyte
        </p>

        <nav className="flex gap-6 items-center">
          <Link
            href={socials.discord}
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label="Discord"
          >
            <FaDiscord size={20} />
          </Link>
          <Link
            href={socials.linkedin}
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            href={socials.twitter}
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href={socials.youtube}
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href={socials.instagram}
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
