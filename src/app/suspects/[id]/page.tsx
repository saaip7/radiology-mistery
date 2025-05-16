"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageCarousel } from "@/components/suspects/image-carousel"


import {use} from "react"

// Sample data for the codes using the new JSON structure
const suspectData = [
  {
    "id": "A",
    "title": "Kode A: Temuan Awal - Kondisi Paru",
    "clinicalFindings": "Pria 35 tahun dengan penurunan berat badan dan batuk kronis.",
    "radiologyFindings": {
      "Paru": "Konsolidasi di zona bagian atas paru kanan. Pembesaran hilus ipsilateral.",
      "Mediastinum": "Normal",
      "Pleura": "Normal",
      "Saluran Napas": "Normal",
      "Tulang": "Normal",
      "Jantung": "Normal",
      "Diafragma": "Normal",
      "Esofagus": "Normal"
    },
    "differentialDiagnosis": [
      "Pneumonia",
      "Karsinoma bronkogenik"
    ],
    "pathomechanism": "Tuberkulosis primer terjadi saat seseorang pertama kali terinfeksi oleh Mycobacterium tuberculosis, biasanya melalui inhalasi droplet dari individu yang menular. Infeksi primer biasanya menghasilkan lesi di paru perifer (fokus Ghon) disertai dengan limfadenopati di kelenjar limfa hilus. Gabungan keduanya disebut kompleks Ghon. Fokus Ghon yang telah mengalami kalsifikasi adalah tanda bahwa infeksi TB primer telah sembuh secara klinis atau memasuki fase laten.",
    "images": [
      "/suspect1/SuspectList1.jpg",
      "/suspect1/SuspectList1-Swiped.jpg",
      "/suspect1/suspectlist1 swipe 2.png"
    ],
    "imageSource": "Primary TB: source: https://www.radiologymasterclass.co.uk/gallery/chest/pulmonary-disease/tuberculosis_tb"
  },  
  {
    "id": "B",
    "title": "Kode B: Temuan Awal - Pasca Trauma",
    "clinicalFindings": "Pria 30 tahun pasca trauma.",
    "radiologyFindings": {
      "Paru": "Corakan paru sinistra (-)",
      "Mediastinum": "Mediastinum deviasi ke arah dextra",
      "Pleura": "Cavum pleura sinistra lusen",
      "Saluran Napas": "Normal",
      "Tulang": "Normal",
      "Jantung": "Normal",
      "Diafragma": "Normal",
      "Esofagus": "Normal"
    },
    "differentialDiagnosis": [
      "Pneumothorax non-tension",
      "Pneumomediastinum",
      "Cystic Lung Disease"
    ],
    "pathomechanism": "",
    "images": [
      "/suspect2/SuspectList2.png",
      "/suspect2/SuspectList2-Swiped.png"
    ],
    "imageSource": "Tension pneumothorax sinistra dengan kolaps pulmo sinistra. Source : Intermediate Radiology skills lab blok II.2"
  },  
  {
    id: "C",
    title: "Code C: PET Scan Results - Metabolic Activity",
    clinicalFindings:
      "45-year-old female with confirmed non-small cell lung carcinoma. PET-CT ordered for staging purposes.",
    radiologyFindings: {
      Lung: "Known right upper lobe mass with intense FDG uptake (SUV max 12.4).",
      Mediastinum: "Two hypermetabolic mediastinal lymph nodes in stations 4R and 7.",
      Pleura: "No pleural involvement.",
      Airway: "Normal",
      Bone: "No evidence of osseous metastases.",
      Cardiac: "Normal cardiac uptake.",
      Diaphragm: "Normal",
      "Distant Sites": "No evidence of distant metastatic disease.",
    },
    differentialDiagnosis: [
      "Stage IIIA (T3N1M0) non-small cell lung carcinoma",
      "Inflammatory process with reactive lymphadenopathy",
      "Granulomatous disease with hypermetabolic activity",
    ],
    pathomechanism:
      "PET scans utilize the glucose analog fluorodeoxyglucose (FDG) which is preferentially taken up by metabolically active cells. Cancer cells typically demonstrate increased glucose metabolism due to the Warburg effect - a shift toward glycolysis even in the presence of oxygen. The SUV (standardized uptake value) quantifies the intensity of FDG uptake, with higher values generally correlating with more aggressive malignancies.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    imageSource: "Source: Nuclear Medicine Department / University Hospital",
  },
  {
    id: "D",
    title: "Code D: Biopsy Report - Histopathological Findings",
    clinicalFindings:
      "45-year-old female with right upper lobe mass. CT-guided core needle biopsy performed for tissue diagnosis.",
    radiologyFindings: {
      Specimen: "Core needle biopsy of right upper lobe mass.",
      "Microscopic Examination":
        "Malignant cells with features consistent with non-small cell lung carcinoma, adenocarcinoma subtype.",
      Immunohistochemistry: "Positive for TTF-1 and Napsin A. Negative for p40, synaptophysin, and chromogranin.",
      "Molecular Studies": "EGFR mutation negative. ALK rearrangement negative. PD-L1 expression 60%.",
    },
    differentialDiagnosis: [
      "Lung adenocarcinoma",
      "Squamous cell carcinoma",
      "Metastatic adenocarcinoma from another primary site",
      "Neuroendocrine tumor",
    ],
    pathomechanism:
      "Lung adenocarcinoma arises from the glandular cells that would normally secrete mucus. TTF-1 (Thyroid Transcription Factor-1) is a protein that regulates transcription of genes specific for the thyroid, lung, and diencephalon. Its presence in tumor cells strongly suggests a primary lung origin for adenocarcinoma. Napsin A is an aspartic proteinase involved in the maturation of surfactant protein B, and its expression further supports the diagnosis of primary lung adenocarcinoma.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    imageSource: "Source: Department of Pathology / University Medical Center",
  },
  {
    id: "E",
    title: "Code E: Treatment Plan - Multidisciplinary Approach",
    clinicalFindings:
      "45-year-old female with stage IIIA (T3N1M0) non-small cell lung adenocarcinoma. ECOG performance status 1. No significant comorbidities.",
    radiologyFindings: {
      "Current Status": "Right upper lobe mass with mediastinal lymphadenopathy. No distant metastases.",
      "Pulmonary Function": "FEV1 85% predicted. DLCO 80% predicted.",
      "Cardiac Evaluation": "Normal cardiac function. LVEF 65%.",
      "Brain MRI": "No evidence of intracranial metastases.",
    },
    differentialDiagnosis: [
      "Neoadjuvant chemotherapy followed by surgical resection",
      "Definitive chemoradiation",
      "Surgical resection followed by adjuvant therapy",
      "Immunotherapy in combination with chemotherapy",
    ],
    pathomechanism:
      "Stage IIIA non-small cell lung cancer represents locally advanced disease that may still be amenable to curative treatment. Neoadjuvant chemotherapy aims to reduce tumor size before surgery, potentially converting unresectable tumors to resectable ones. It also addresses micrometastatic disease early. The combination of platinum-based chemotherapy with surgical resection has shown improved survival compared to surgery alone in stage IIIA disease.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    imageSource: "Source: Oncology Department / Treatment Planning System",
  },
]

export default function CodePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const router = useRouter()
  const [selectedCode] = useState(
    suspectData.find((suspect) => suspect.id === id) || suspectData[0],
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
              {/* <Link href="/suspects">
                <Button variant="ghost" className="gap-1 text-blue-600 hover:text-blue-700 p-0">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Suspect List
                </Button>
              </Link> */}
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

                  <div className="mt-8 flex justify-end">
                    <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Download Full Report</Button>
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
