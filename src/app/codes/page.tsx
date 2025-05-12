"use client"

import { useState } from "react"
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

// Sample data for the codes
const codes = [
  {
    id: "A",
    title: "Code A",
    description: "This is the description for Code A. It includes details about the features and functionality.",
    emoji: "🚀",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "B",
    title: "Code B",
    description: "Code B offers a different set of features focused on design and aesthetics.",
    emoji: "🎨",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "C",
    title: "Code C",
    description: "Code C is all about performance and optimization for the best user experience.",
    emoji: "⚡",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "D",
    title: "Code D",
    description: "With Code D, you get access to advanced analytics and reporting tools.",
    emoji: "📊",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "E",
    title: "Code E",
    description: "Code E specializes in interactive elements and engaging user interfaces.",
    emoji: "✨",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function CodesPage() {
  const [selectedCode, setSelectedCode] = useState(codes[0])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-white">
        <Sidebar className="border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Available Codes</SidebarGroupLabel>
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

        <main className="flex-1 p-6 md:p-10">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="gap-1">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
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
                    <div className="p-4 rounded-lg bg-gradient-to-r from-pink-50 to-blue-50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">🔍</span>
                        <h3 className="font-semibold">Key Features</h3>
                      </div>
                      <ul className="list-disc list-inside text-gray-600 pl-2">
                        <li>Feature one explanation</li>
                        <li>Feature two details</li>
                        <li>Feature three highlights</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-green-50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h3 className="font-semibold">Use Cases</h3>
                      </div>
                      <ul className="list-disc list-inside text-gray-600 pl-2">
                        <li>Primary application</li>
                        <li>Secondary usage</li>
                        <li>Alternative scenario</li>
                      </ul>
                    </div>
                  </div>

                  <Button className="mt-6 rounded-full bg-black text-white hover:bg-gray-800">
                    Activate {selectedCode.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
