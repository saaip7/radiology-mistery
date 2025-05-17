"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageCarousel } from "@/components/suspects/image-carousel"
import { use } from "react"
import { codes } from "@/data/codes"
import { Button } from "@/components/ui/button"

export default function CodePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const router = useRouter()
  const [selectedCode, setSelectedCode] = useState(
    codes.find((suspect) => suspect.id === id) || codes[0],
  )
  
  // Update the URL when the selected code changes
  useEffect(() => {
    if (selectedCode.id !== id) {
      router.push(`/suspects/${selectedCode.id}`)
    }
  }, [selectedCode, id, router])
  
  return (
    <div className="flex min-h-screen bg-white w-full">
      <main className="w-full mt-8">
{/* Mobile dropdown selector */}
<div className="p-3 md:p-8 flex flex-row w-full justify-between space-x-4 block lg:hidden">
                {codes.map((code) => (
                  <Button
                  key={code.id}
                  variant={selectedCode.id === code.id ? "default" : "outline"}
                  className={`w-full h-10 p-0 rounded-sm ${
                    selectedCode.id === code.id ? "bg-blue-600 text-white" : "border-blue-200 text-blue-600"
                  }`}
                  onClick={() => setSelectedCode(code)}
                  aria-label={`Select Code ${code.id}`}
                >
                  {code.id}
                </Button>
                )
              )}
        </div>

        <div className="p-3 md:p-8 w-full items-center">
          {/* This wrapper ensures consistent width */}
          <div className="w-full lg:max-w-5xl mb-12">
            <Card className="w-full border-0 shadow-md rounded-xl overflow-hidden">
              <CardHeader className="bg-blue-600 text-white p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl break-words">{selectedCode.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 md:p-6">
                {/* The key fix is to ensure the Tab component maintains full width */}
                <Tabs defaultValue="clinical" className="w-full">
                  <TabsList className="h-auto grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 gap-1 mb-4 md:mb-6 w-full">
                    <TabsTrigger value="clinical" className="text-xs md:text-sm py-2 px-1 md:px-3">Clinical Findings</TabsTrigger>
                    <TabsTrigger value="radiology" className="text-xs md:text-sm py-2 px-1 md:px-3">Radiology Findings</TabsTrigger>
                    <TabsTrigger value="differential" className="text-xs md:text-sm py-2 px-1 md:px-3">Differential Diagnosis</TabsTrigger>
                    <TabsTrigger value="pathomechanism" className="text-xs md:text-sm py-2 px-1 md:px-3">Pathomechanism</TabsTrigger>
                  </TabsList>

                  {/* Apply w-full to all TabsContent to ensure consistent width */}
                  <TabsContent value="clinical" className="mt-0 w-full">
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg w-full">
                      <h3 className="text-base md:text-lg font-semibold mb-2">Clinical Findings</h3>
                      <p className="text-sm md:text-base">{selectedCode.clinicalFindings}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="radiology" className="mt-0 w-full">
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg w-full">
                      <h3 className="text-base md:text-lg font-semibold mb-2">Radiology Findings</h3>
                      <div className="grid grid-cols-1 gap-3 w-full">
                        {Object.entries(selectedCode.radiologyFindings).map(([region, finding]) => (
                          <div key={region} className="flex flex-col md:flex-row w-full">
                            <span className="font-medium md:min-w-[120px] mb-1 md:mb-0">{region}:</span>
                            <span className="text-sm md:text-base">{finding}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="differential" className="mt-0 w-full">
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg w-full">
                      <h3 className="text-base md:text-lg font-semibold mb-2">Differential Diagnosis</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base min-w-full">
                        {selectedCode.differentialDiagnosis.map((diagnosis, index) => (
                          <li key={index}>{diagnosis}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="pathomechanism" className="mt-0 w-full">
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg w-full">
                      <h3 className="text-base md:text-lg font-semibold mb-2">Pathomechanism</h3>
                      <p className="text-sm md:text-base">{selectedCode.pathomechanism}</p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 md:mt-8 w-full">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Radiological Images</h3>
                  <ImageCarousel images={selectedCode.images} imageSource={selectedCode.imageSource} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}