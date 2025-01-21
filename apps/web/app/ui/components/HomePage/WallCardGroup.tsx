import WallCard from "./WallCard"
import { title } from "../../../constants/WallCard"

interface Testimonial {
  id: string
  name: string
  role: string
  testimonial: string
  imageUrl: string
}

interface WallCardGroupProps {
  title?: string
  testimonials: Testimonial[]
}

export default function WallCardGroup({testimonials }: WallCardGroupProps) {
  return (
    <div className="w-full min-h-screen bg-transparent p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-transparent mb-12  bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text  font-[Satoshi Variable]">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <WallCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

