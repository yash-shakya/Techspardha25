import Image from "next/image";
import Link from "next/link";
export interface EventCardProps {
  name: string;
  img: string;
  id?:number;
  isActive: boolean;
}

export default function EventCard({ name, img, isActive,id }: EventCardProps) {
  return (
    
    <div
      className={`flex flex-col rounded-md h-[80%] border-[.5px] border-[#00629666]  bg-[#012436] transition-transform duration-300 sm:w-[750px] w-[350px] ${
        isActive ? "scale-95 shadow-lg" : ""
      }`}
    
    >
          

      <div className="relative flex items-center justify-center w-full h-36 sm:h-80 md:h-96 overflow-hidden">
      <Link href={`/events/${id}`} >
        <Image
          className="object-cover border-[1px] border-white  rounded-lg"
          src={`/${img}`}
          alt={`Image of ${name}`}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 80vw,
                 90vw"
        />
      </Link>

      </div>
      
      <div className="text-white text-lg text-center p-2 font-[Satoshi Variable] sm:text-3xl">
        {name}
      </div>
    </div>
  );
}