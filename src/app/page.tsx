import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

import InteractiveSection from "@/components/guidance/interactive-section"


export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Cases Section */}
      <section className="relative container mx-auto px-[2.5vw] py-12 md:py-16 z-10">

        <InteractiveSection/>

      </section>
    </div>
  )
}
