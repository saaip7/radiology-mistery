import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

import { codes } from "@/data/codes"

export default function SuspectsPage() {


  return (
    <div className="min-h-screen bg-white px-[2.5vw]">

      <main className="relative container mx-auto py-8 px-16 z-10">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-1 text-blue-600 hover:text-blue-700 p-0">
              <ChevronLeft className="h-4 w-4" />
              Back to Image Assessment
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
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{code.title}</h2>
                <p className="text-gray-700 min-h-[60px]">{code.clinicalFindings}</p>
                <Link href={`/suspects/${code.id}`}>
                  <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 mt-auto">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
