"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample carousel data
const carouselItems = [
  {
    id: 1,
    title: "Diagnostic Challenges",
    description:
      "Explore complex radiological cases that challenge even experienced practitioners. Sharpen your diagnostic skills with our curated collection of unusual findings.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Learning Resources",
    description:
      "Access comprehensive educational materials designed to enhance your understanding of radiological patterns and diagnostic approaches.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Expert Analysis",
    description:
      "Benefit from detailed case breakdowns by leading radiologists, providing insights into complex diagnostic reasoning and decision-making processes.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
                <div>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-md object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-gray-900">{item.title}</h2>
                  <p className="text-lg text-gray-600">{item.description}</p>
                  <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Learn more</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
