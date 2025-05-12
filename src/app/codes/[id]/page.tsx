"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Footer } from "@/components/footer"

// Sample data for the codes
const codes = [
  {
    id: "A",
    title: "Code A: Initial Findings",
    description:
      "The initial radiograph shows a subtle opacity in the right upper lobe with irregular borders. There are no calcifications visible within the lesion. The surrounding lung parenchyma appears normal with no evidence of pleural effusion.",
    emoji: "🔍",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "B",
    title: "Code B: Follow-up CT",
    description:
      "The follow-up CT scan reveals a spiculated mass measuring approximately 2.8 x 2.3 cm with areas of central necrosis. There is evidence of bronchial involvement and early signs of chest wall invasion.",
    emoji: "📊",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "C",
    title: "Code C: PET Scan Results",
    description:
      "The PET scan demonstrates intense FDG uptake within the primary lesion with an SUV max of 12.4. There are also two hypermetabolic mediastinal lymph nodes suggesting nodal metastasis. No distant metastatic disease is identified.",
    emoji: "⚡",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "D",
    title: "Code D: Biopsy Report",
    description:
      "Histopathological examination of the biopsy specimen shows malignant cells with features consistent with non-small cell lung carcinoma, adenocarcinoma subtype. Immunohistochemistry is positive for TTF-1 and negative for p40.",
    emoji: "🔬",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "E",
    title: "Code E: Treatment Plan",
    description:
      "Based on the clinical stage IIIA (T3N1M0) disease, the multidisciplinary tumor board recommends neoadjuvant chemotherapy followed by surgical resection if downstaging is achieved. Radiation therapy will be considered based on surgical margins.",
    emoji: "💊",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function CodePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedCode, setSelectedCode] = useState(codes.find((code) => code.id === params.id) || codes[0])

  // Update the URL when the selected code changes
  useEffect(() => {
    if (selectedCode.id !== params.id) {
      router.push(`/codes/${selectedCode.id}`)
    }
  }, [selectedCode, params.id, router])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-white">
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

        <Sidebar className="border-r border-gray-200">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Case Files</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {codes.map((code) => (
                    <SidebarMenuItem key={code.id}>
                      <SidebarMenuButton isActive={selectedCode.id === code.id} onClick={() => setSelectedCode(code)}>
                        <span className="mr-2">{code.emoji}</span>
                        <span>Code {code.id}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 relative z-10">
          <nav className="p-4 flex justify-between items-center border-b border-gray-100">
            <div className="text-2xl font-bold text-blue-600">Radiology Mistery</div>
            <div className="flex gap-4">
              <Link href="/">
                <Button variant="outline" className="rounded-full border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                  Guidance
                </Button>
              </Link>
              <Link href="/suspects">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Suspect List</Button>
              </Link>
            </div>
          </nav>

          <div className="p-6 md:p-10">
            <div className="mb-6">
              <Link href="/suspects">
                <Button variant="ghost" className="gap-1 text-blue-600 hover:text-blue-700 p-0">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Suspect List
                </Button>
              </Link>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-md rounded-xl">
                <CardContent className="p-0">
                  <div className="relative h-48 md:h-64 w-full">
                    <Image
                      src={selectedCode.image || "/placeholder.svg"}
                      alt={selectedCode.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{selectedCode.emoji}</span>
                      <h1 className="text-3xl font-bold">{selectedCode.title}</h1>
                    </div>
                    <p className="text-gray-600 text-lg">{selectedCode.description}</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🔍</span>
                          <h3 className="font-semibold">Key Observations</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 pl-2">
                          <li>Primary finding location and characteristics</li>
                          <li>Secondary findings and associated features</li>
                          <li>Comparison with previous studies</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">💡</span>
                          <h3 className="font-semibold">Differential Diagnosis</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 pl-2">
                          <li>Most likely diagnosis based on imaging</li>
                          <li>Alternative diagnostic considerations</li>
                          <li>Recommended follow-up studies</li>
                        </ul>
                      </div>
                    </div>

                    <Button className="mt-6 rounded-full bg-blue-600 hover:bg-blue-700">Download Full Report</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </SidebarProvider>
  )
}
