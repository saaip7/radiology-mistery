"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"


import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageCarousel } from "@/components/suspects/image-carousel"


import {use} from "react"

import { codes } from "@/data/codes"

export default function CodePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const router = useRouter()
  const [selectedCode] = useState(
    codes.find((suspect) => suspect.id === id) || codes[0],
  )
  

  // Update the URL when the selected code changes
  useEffect(() => {
    if (selectedCode.id !== id) {
      router.push(`/suspects/${selectedCode.id}`)
    }
  }, [selectedCode, id, router])
  

  return (

      <div className="flex min-h-screen bg-white">
      

        <main className="flex-1 relative z-10">
          <div className="p-4 md:p-8">
            <div className="mb-6">
              <Link href="/suspects">
                <Button variant="ghost" className="gap-1 text-blue-600 hover:text-blue-700 p-0">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Suspect List
                </Button>
              </Link>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="border-0 shadow-md rounded-xl overflow-hidden">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="text-2xl">{selectedCode.title}</CardTitle>
                  </CardHeader>
                <CardContent className="p-6">
                  <Tabs defaultValue="clinical" className="w-full">
                    <TabsList className="grid grid-cols-4 mb-6">
                      <TabsTrigger value="clinical">Clinical Findings</TabsTrigger>
                      <TabsTrigger value="radiology">Radiology Findings</TabsTrigger>
                      <TabsTrigger value="differential">Differential Diagnosis</TabsTrigger>
                      <TabsTrigger value="pathomechanism">Pathomechanism</TabsTrigger>
                    </TabsList>

                    <TabsContent value="clinical" className="mt-0">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Clinical Findings</h3>
                        <p>{selectedCode.clinicalFindings}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="radiology" className="mt-0">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Radiology Findings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(selectedCode.radiologyFindings).map(([region, finding]) => (
                            <div key={region} className="flex">
                              <span className="font-medium min-w-[120px]">{region}:</span>
                              <span>{finding}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="differential" className="mt-0">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Differential Diagnosis</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedCode.differentialDiagnosis.map((diagnosis, index) => (
                            <li key={index}>{diagnosis}</li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="pathomechanism" className="mt-0">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Pathomechanism</h3>
                        <p>{selectedCode.pathomechanism}</p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Radiological Images</h3>
                    <ImageCarousel images={selectedCode.images} imageSource={selectedCode.imageSource} />
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>

          <Footer />
        </main>
      </div>
  )
}
