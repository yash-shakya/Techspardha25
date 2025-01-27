interface WallCardProps {
  name: string
  role: string
  testimonial: string
  imageUrl: string
}

export default function WallCard({ name, role, testimonial, imageUrl }: WallCardProps) {
  return (
    <div className="relative p-6 rounded-lg h-[300px] w-[230px] md:h-[376px] md:w-[304px] bg-[#0c1921c9] text-white">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="w-6 h-6 md:w-10 md:h-10 rounded-full border-[#367CFF] border-[2px] object-cover"
        />
        <div>
          <h3 className="font-semibold text-xs">{name}</h3>
          <p className="text-[7px] md:text-xs text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-[8px] md:text-sm leading-relaxed h-[85%] rounded-md px-2 pt-3 text-xs bg-[#012436] text-gray-300">{testimonial}</p>
    </div>
  )
}

