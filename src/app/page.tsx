import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

import InteractiveSection from "@/components/guidance/interactive-section"


export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Cases Section */}
      <section className="relative container mx-auto px-32 py-12 md:py-16 z-10">

        <InteractiveSection/>
        

        <div className="flex justify-between items-center mt-32 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Suspects List</h2>
          <Link href="/suspects">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Lihat Semua</Button>
          </Link>
        </div>

        {/* <div className="space-y-6">
          {codes.slice(0,3).map((caseItem) => (
            <div
              key={caseItem.id}
              className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="md:w-1/3">
                <Image
                  src={caseItem.image || "/placeholder.svg"}
                  alt={caseItem.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{caseItem.title}</h3>
                  <p className="text-gray-600">{caseItem.description}</p>
                </div>
                <div className="mt-4">
                  <Link href={`/suspects/${caseItem.id}`}>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 flex items-center gap-2">
                      Examine Case <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
