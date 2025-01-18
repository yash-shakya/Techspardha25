import Link from 'next/link';
import { aboutPageImages } from '../../constants/aboutpage';
import Image from 'next/image';

export default function About(){
    
    return (
        <>
        <div className="space-y-12">
           <h1 className="text-4xl font-extrabold uppercase bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center tracking-wide shadow-xl mb-8">
            About Techspardha
          </h1>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              What is Techspardha 2024?
            </h2>
            <p className="text-gray-300 leading-relaxed w-full text-justify">
              Techspardha is the annual techno-managerial festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha. Etymologically, the word 'Techspardha' is composed of two words, 'Tech' in English is a contraction of technology and 'Spardha' in Hindi means competition. Techspardha is known for hosting a variety of events that include competitions, exhibitions, guest lectures as well as workshops.
            </p>
          </section>
          </div>
          <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
  {aboutPageImages.map((img: { name: string; link: string }, index: number) => (
    <div key={index} className="w-[1250px] flex justify-center">
      <Image
        src={img.link || "/placeholder.svg"}
        alt={`Guest ${index + 1}`}
        width={1800}
        height={2700}
        className="object-contain"
      />
    </div>
  ))}
</div>



      <Link
                href={`/`}
                className="font-extralight shadow-sm mx-auto w-fit px-3 py-1 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] rounded-2xl m-5"
            >
                View Them All
      </Link>
        </>
    )
}