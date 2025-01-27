import Image from "next/image";

export interface EventCardProps {
  name: string;
  img: string;
  id?: number;
  isActive: boolean;
}

export default function CarouselEventCard({ name, img, isActive, id }: EventCardProps) {
  const handleUrl = () => {
    window.location.href = `/events/${id}`;
  };

  return (
    <div
      className={`flex flex-col cursor-pointer rounded-md h-[80%] border-[.5px] border-[#00629666] bg-[#012436] transition-transform duration-300 sm:w-[750px] w-[300px] ${
        isActive ? "scale-95 shadow-lg" : ""
      }`}
    >
      <div
        className="relative flex items-center justify-center w-full h-36 sm:h-80 md:h-96 overflow-hidden"
        onClick={handleUrl}
      >
        <Image
          className="object-cover border-[1px] border-[#001926] rounded-lg"
          src={`/${img}`}
          alt={`Image of ${name}`}
          fill
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 80vw,
                  90vw"
        />
      </div>

      <div className="text-white text-lg text-center p-2 font-[Satoshi Variable] sm:text-3xl">
        {name}
      </div>
    </div>
  );
}
