"use client"

import { useState } from "react"
import Image from "next/image"

export function ExpandingHero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    {
      src: "/temp-img.jpg",
      alt: "Medical scan image 1",
    },
    {
      src: "/temp-img.jpg",
      alt: "Medical scan image 2",
    },
    {
      src: "/temp-img.jpg",
      alt: "Medical scan image 3",
    },
  ]

  return (
    <div className="hidden lg:flex gap-4 h-[30rem] w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`h-full rounded-2xl transition-all duration-700 ease-in-out cursor-pointer relative overflow-hidden ${
            index === activeIndex ? "w-[60%]" : index === (activeIndex + 1) % images.length ? "w-[25%]" : "w-[15%]"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-all duration-700 ease-in-out"
          />

          {index === activeIndex && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Radiological Case Study {index + 1}</h3>
              <p className="text-sm">
                Explore this fascinating case with unique radiological findings and diagnostic challenges.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
