import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ImageCardProps {
  title: string
  imageSrc: string
}

export function ImageCard({ title, imageSrc }: ImageCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardContent className="p-4">
        <div className="relative w-full h-48 mb-2">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="pb-4 pt-0 px-4">
        <h3 className="text-center w-full font-medium">{title}</h3>
      </CardFooter>
    </Card>
  )
}
