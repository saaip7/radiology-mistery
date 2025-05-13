// app/suspects/page.tsx
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const codes = [
  {
    id: "A",
    title: "Code A: Initial Findings",
    description:
      "The initial radiograph shows a subtle opacity in the right upper lobe with irregular borders. There are no calcifications visible within the lesion.",
    image: "/temp-img.jpg",
    difficulty: "Medium",
    category: "Chest",
  },
  // ... rest of the codes remain the same
]

export default function SuspectsPage() {
  return (
    <>
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
                src={code.image || "/placeholder.svg"}
                alt={code.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <div className="flex-1">
              <div className="flex gap-2 mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {code.category}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  {code.difficulty}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{code.title}</h2>
              <p className="text-gray-600 mb-4">{code.description}</p>
              <Link href={`/suspects/${code.id}`}>
                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 mt-auto">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}