'use client'

import { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import EventCard from '../../ui/components/EventCard'

//dummy data for events

// const CATEGORIES = [
//   "Coding Events",
//   "Design Events",
//   "Marketing Events",
//   "Business Events",
//   "Tech Events"
// ]

// const EVENTS = [
//   { name: "Python Workshop", img: "placeholder.svg?height=400&width=600", id: 1, category: "Coding Events" },
//   { name: "React Conference", img: "placeholder.svg?height=400&width=600", id: 2, category: "Coding Events" },
//   { name: "UI/UX Workshop", img: "placeholder.svg?height=400&width=600", id: 3, category: "Design Events" },
//   { name: "Digital Marketing", img: "placeholder.svg?height=400&width=600", id: 4, category: "Marketing Events" },
//   { name: "Startup Summit", img: "placeholder.svg?height=400&width=600", id: 5, category: "Business Events" },
//   { name: "AI Conference", img: "placeholder.svg?height=400&width=600", id: 6, category: "Tech Events" },
//   { name: "Web Development", img: "placeholder.svg?height=400&width=600", id: 7, category: "Coding Events" },
//   { name: "Brand Strategy", img: "placeholder.svg?height=400&width=600", id: 8, category: "Marketing Events" },
//   { name: "Mobile Dev Summit", img: "placeholder.svg?height=400&width=600", id: 9, category: "Tech Events" },
// ]

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Coding Events")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const filteredEvents = EVENTS.filter(event => {
    const matchesCategory = selectedCategory === "All Events" || event.category === selectedCategory
    return matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#001926] px-4 py-8 md:px-8 lg:px-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold  md:text-4xl pb-5  bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text  font-[Satoshi Variable]">Events Category</h1>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between w- gap-2 rounded-l-3xl 
              rounded-r-3xl  rounded-y-0 border-[3px]
               border-[#002236] px-6 py-2 text-white transition-colors hover:bg-[#003252] md:w-auto"
            >
              {selectedCategory}
              <FiChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute mt-2 w-full rounded-lg font-[Satoshi Variable] font-bold bg-[#142B37] py-2 shadow-xl z-50">
                <button
                  onClick={() => {
                    setSelectedCategory("All Events")
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-2 text-left text-white hover:bg-[#003252]"
                >
                  All Events
                </button>
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-white font-[Satoshi Variable] font-bold bg-[#142B37]  hover:bg-[#003252]"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-0">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex justify-center"
            onMouseEnter={() => setActiveEvent(event.id)}
            onMouseLeave={() => setActiveEvent(null)}
          >
            <EventCard
            id={event.id}
              name={event.name}
              img='events.png'
              isActive={activeEvent === event.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

