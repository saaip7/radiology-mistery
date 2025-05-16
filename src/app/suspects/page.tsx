import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

import { codes } from "@/data/codes"

export default function SuspectsPage() {


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

      <main className="relative container mx-auto py-8 px-32 z-10">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-1 text-blue-600 hover:text-blue-700 p-0">
              <ChevronLeft className="h-4 w-4" />
              Back to Guidance
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Suspect List</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codes.map((code) => (
            <div
              key={code.id}
              className="flex flex-col p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="mb-4">
                <Image
                  src={code.images[0] || "/placeholder.svg"}
                  alt={code.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="flex-1">
                <div className="flex gap-2 mb-2">
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{code.title}</h2>
                <Link href={`/suspects/${code.id}`}>
                  <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 mt-auto">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
