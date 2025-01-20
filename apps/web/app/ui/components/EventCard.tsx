import Image from "next/image";
import Link from "next/link";
export interface EventCardProps {
  name: string;
  img: string;
  id?: number;
  isActive: boolean;
}

export default function EventCard({ name, img, isActive, id }: EventCardProps) {

  const handleUrl = () => {
    window.location.href = `/events/${id}`;
  } 

  return (
    <div
      className={`flex flex-col rounded-md border-[.5px] md:h-[80%] border-[#00629666] bg-[#012436] transition-transform duration-300 
      w-full max-w-[350px] sm:max-w-[750px] ${
        isActive ? "scale-95 shadow-lg" : ""
      }`}
    >
      <div className="relative flex items-center justify-center w-full h-36 sm:h-80 md:h-96 overflow-hidden" onClick={()=>handleUrl()}>
        
          <Image
            className="object-cover border-[1px] border-white rounded-lg"
            src={`/${img}`}
            alt={`Image of ${name}`}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 80vw,
                   (max-width: 1200px) 60vw,
                   50vw"
          />
        
      </div>
      <div className="text-white text-center p-2 font-[Satoshi Variable] text-lg sm:text-3xl">
        {name}
      </div>
    </div>
  );
}
