import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExpandingHero } from "@/components/expanding-hero"
import { Footer } from "@/components/footer"

export default function Home() {
  // Sample case data
  const cases = [
    {
      id: "case-1",
      title: "Mysterious Lung Nodule",
      description:
        "A 45-year-old patient presents with an unusual nodular pattern in the right upper lobe. Can you identify the underlying condition?",
      image: "/temp-img.jpg",
    },
    {
      id: "case-2",
      title: "Cranial Abnormality",
      description:
        "This pediatric case shows an unexpected finding in the temporal region. Review the images and provide your diagnosis.",
      image: "/temp-img.jpg",
    },
    {
      id: "case-3",
      title: "Spinal Irregularity",
      description:
        "Patient reports chronic back pain with no prior trauma. The imaging reveals a subtle but significant finding.",
      image: "/temp-img.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-blue-500"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full border border-blue-500"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-100 rounded-full"></div>
        <svg className="absolute top-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Cases Section */}
      <section className="relative container mx-auto px-32 py-12 md:py-16 z-10">
        <ExpandingHero />

        <div className="flex justify-between items-center mt-32 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Cases</h2>
          <Link href="/suspects">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">View All Cases</Button>
          </Link>
        </div>

        <div className="space-y-6">
          {cases.map((caseItem) => (
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
