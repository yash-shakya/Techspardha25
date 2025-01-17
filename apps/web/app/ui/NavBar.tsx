import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
}
interface NavBarProps {
  navitems: NavItem[];
}
//        /* TODO: A (position: absolute) NAVBAR to be added here */
export default function NavBar({ navitems }: NavBarProps) {
  return (
    <div className="flex items-center justify-center mt-[36px]">
      <div className="h-16 px-12 py-2 bg-zinc-800/40 rounded-full shadow-[0px_0px_15px_0px_rgba(0,51,102,1.00)] border-b border-zinc-800/50 backdrop-blur-[14.10px] justify-center items-center gap-8 inline-flex">
        {navitems.map((item, i) => {
          if (item.name === "logo")
            return (
              <Link href={item.link} key={i}>
                <Image alt="Logo" src={logo} height={45} width={45} />
              </Link>
            );
          else
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
  );
}
