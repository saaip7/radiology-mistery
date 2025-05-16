"use client"

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { SlideContent } from "@/components/slide-content"

const slides = [
  {
    title: "Penetration",
    description: "Short description about penetration concept goes here...",
    cards: [
      {
        title: "Over-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Under-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Normal exposure",
        imageSrc: "/temp-img.jpg",
      },
    ],
  },
  {
    title: "Inspiration",
    description: "Short description about inspiration concept goes here...",
    cards: [
      {
        title: "Over-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Under-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Normal exposure",
        imageSrc: "/temp-img.jpg",
      },
    ],
  },
  {
    title: "Rotation",
    description: "Short description about rotation concept goes here...",
    cards: [
      {
        title: "Over-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Under-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Normal exposure",
        imageSrc: "/temp-img.jpg",
      },
    ],
  },
  {
    title: "Angulation",
    description: "Short description about angulation concept goes here...",
    cards: [
      {
        title: "Over-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Under-exposure",
        imageSrc: "/temp-img.jpg",
      },
      {
        title: "Normal exposure",
        imageSrc: "/temp-img.jpg",
      },
    ],
  },
]

export function CarouselSlideshow() {
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)

    // Initialize with the current slide
    handleSelect()

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <SlideContent title={slide.title} description={slide.description} cards={slide.cards} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4">
          <CarouselPrevious className="static transform-none mx-2" />
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext className="static transform-none mx-2" />
        </div>
      </Carousel>
    </div>
  )
}
