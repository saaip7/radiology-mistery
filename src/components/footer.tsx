import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-12 px-[2.5vw]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-[600px]">
            <h3 className="text-lg font-bold text-blue-600 mb-4">Radiology Mistery</h3>
            <p className="text-gray-600">
              An educational platform for radiologists and medical professionals to enhance diagnostic skills through
              interactive case studies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Image Assessment
                </Link>
              </li>
              <li>
                <Link href="/suspects" className="text-gray-600 hover:text-blue-600">
                  Suspect List
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>© 2025 Radiology Mistery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
