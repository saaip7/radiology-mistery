"use client"

import { useState } from "react"
import { motion as m, AnimatePresence } from "framer-motion"
import Image from "next/image"

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"




// Sample data for the interactive section
const items = [
  {
    id: 1,
    title: "Penetrasi",
    description: "Good visualization of  Pulmonary vessel, Lung fields, and Bones",
    images: [
      { url: "/penetrasi/Good Exposure.png", title: "Good Exposure" },
      { url: "/penetrasi/Over Exposure.png", title: "Over Exposure" },
      { url: "/penetrasi/Under Exposure.png", title: "Under Exposure" },
    ],
  },
  {
    id: 2,
    title: "Inspirasi",
    description: "Good visualization of 5-6 anterior ribs, 10-11 posterior ribs, Lung apices, and costophrenic angles.",
    images: [
      { url: "/inspirasi/Good Inspiration.png", title: "Good Inspiration" },
      { url: "/inspirasi/Over Inspiration.png", title: "Over Inspiration" },
      { url: "/inspirasi/Under Inspiration.png", title: "Under Inspiration" },
    ],
  },
  {
    id: 3,
    title: "Rotation",
    description: "Medial aspect of of each clavicule should be equidistant from the spinous processes",
    images: [
      { url: "/rotation/LAO.png", title: "LAO" },
      { url: "/rotation/Symmetric.png", title: "Symmetric" },
      { url: "/rotation/RAO.png", title: "RAO" },
    ],
  },
  {
    id: 4,
    title: "Angulation",
    description: "Good visualization of diaphragm and vertebrae spinosus",
    images: [
      { url: "/angulation/Cranially.png", title: "Cranially" },
      { url: "/angulation/Well-Angulated.png", title: "Well-Angulated" },
      { url: "/angulation/Caudally.png", title: "Caudally" },
    ],
  },
]

export default function InteractiveSection() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section className="w-full py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4">

        <div>
            <h2 className="text-4xl font-bold text-left mb-12">Image Assessment</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Trigger cards - smaller width on desktop */}
          <div className="lg:col-span-3 space-y-4">
            {/* Mobile trigger selector */}
            <div className="block lg:hidden mb-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={activeId}
                onChange={(e) => setActiveId(Number(e.target.value))}
              >
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
                <p className="text-gray-600">{items[activeId - 1].description}</p>
              </div>
            </div>

            {/* Desktop trigger cards */}
            <div className="hidden lg:block space-y-4">
            {items.map((item) => (
              <m.div
                key={item.id}
                className={`border border-gray-200 rounded-md cursor-pointer overflow-hidden transition-all duration-300 shadow-sm ${
                  activeId === item.id ? "p-6 bg-blue-50" : "p-4"
                }`}
                onClick={() => setActiveId(item.id)}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(59, 130, 246, 0.8)",
                  boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)",
                }}
                animate={{
                  height: activeId === item.id ? "auto" : "60px",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-xl font-bold ${activeId === item.id ? "text-blue-600" : ""}`}>{item.title}</h3>
                {activeId === item.id && (
                  <m.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-gray-600"
                  >
                    {item.description}
                  </m.p>
                )}
              </m.div>
            ))}
            </div>
          </div>

          {/* Right side - Content cards - larger width on desktop */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <m.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {items[activeId - 1].images.map((image, index) => (
                  <Dialog key={index}>
                  <DialogTrigger asChild>
                  <div className="group border border-gray-200 rounded-md overflow-hidden shadow-sm hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="aspect-square relative">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={`${items[activeId - 1].title} - ${image.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {image.title}
                      </h4>
                    </div>
                  </div>
                  </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden">
                      <DialogHeader>
                        <DialogTitle className="text-lg md:text-2xl font-bold">
                          {items[activeId - 1].title} - {image.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="relative w-full aspect-square">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={`${items[activeId - 1].title} - ${image.title}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
