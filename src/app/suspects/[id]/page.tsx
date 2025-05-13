'use client'
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { codes } from "@/data/codes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CodeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: string;
  category: string;
}

export default function SuspectsPage() {
  const params = useParams();
  const [selectedCode, setSelectedCode] = useState<CodeItem | null>(null);


  useEffect(() => {
    if (params && params.id) {
      const codeId = Array.isArray(params.id) ? params.id[0] : params.id;
      const foundCode = codes.find((code) => code.id === codeId);
      setSelectedCode(foundCode || null);
    }
  }, [params]);

  if (!selectedCode) {
    return (
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900">Code not found</h1>
        <Link href="/suspects">
          <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-700">
            Back to Suspect List
          </Button>
        </Link>
      </div>
    );
  }

  return (
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
  );
}