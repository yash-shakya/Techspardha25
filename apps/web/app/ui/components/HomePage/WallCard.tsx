interface WallCardProps {
  name: string
  role: string
  testimonial: string
  imageUrl: string
}

export default function WallCard({ name, role, testimonial, imageUrl }: WallCardProps) {
  return (
    <div className="relative p-6 rounded-lg bg-[#012436] text-white">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-300">{testimonial}</p>
    </div>
  )
}

