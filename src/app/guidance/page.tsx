import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function GuidancePage() {
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

      {/* Navigation */}
      <nav className="relative container mx-auto p-4 flex justify-between items-center border-b border-gray-100 z-10">
        <div className="text-2xl font-bold text-blue-600">Radiology Mistery</div>
        <div className="flex gap-4">
          <Link href="/guidance">
            <Button variant="outline" className="rounded-full border-blue-200 hover:bg-blue-50 hover:text-blue-600">
              Guidance
            </Button>
          </Link>
          <Link href="/suspects">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Suspect List</Button>
          </Link>
        </div>
      </nav>

      <main className="relative container mx-auto py-8 z-10">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-1 text-blue-600 hover:text-blue-700 p-0">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Guidance</h1>

          <div className="prose max-w-none">
            <h2>How to Use Radiology Mistery</h2>
            <p>
              Welcome to Radiology Mistery, an educational platform designed to help radiology students, residents, and
              professionals sharpen their diagnostic skills through interesting and challenging cases.
            </p>

            <h3>Getting Started</h3>
            <ol>
              <li>
                Browse through our collection of cases in the <strong>Suspect List</strong> section.
              </li>
              <li>Select a case that interests you or matches your current learning objectives.</li>
              <li>Review the provided clinical information and images carefully.</li>
              <li>Form your own diagnosis before checking the solution.</li>
              <li>Compare your findings with the expert analysis provided.</li>
            </ol>

            <h3>Case Difficulty Levels</h3>
            <ul>
              <li>
                <strong>Easy:</strong> Straightforward cases with classic findings, suitable for beginners.
              </li>
              <li>
                <strong>Medium:</strong> More nuanced cases that require careful analysis.
              </li>
              <li>
                <strong>Hard:</strong> Complex cases with subtle findings or uncommon presentations.
              </li>
              <li>
                <strong>Expert:</strong> Challenging cases that might stump even experienced radiologists.
              </li>
            </ul>

            <h3>Tips for Success</h3>
            <ul>
              <li>Always start with a systematic approach to image interpretation.</li>
              <li>Consider the clinical context provided with each case.</li>
              <li>Look for both primary findings and associated secondary signs.</li>
              <li>Don't rush - take your time to examine all images thoroughly.</li>
              <li>Challenge yourself with cases outside your comfort zone to expand your knowledge.</li>
            </ul>

            <h3>Contributing</h3>
            <p>
              Are you an experienced radiologist with interesting cases to share? We welcome contributions to our case
              library. Please contact us for more information on how to submit your cases.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
