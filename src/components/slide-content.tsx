import { ImageCard } from "@/components/image-card"

interface SlideContentProps {
  title: string
  description: string
  cards: {
    title: string
    imageSrc: string
  }[]
}

export function SlideContent({ title, description, cards }: SlideContentProps) {
  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <ImageCard key={index} title={card.title} imageSrc={card.imageSrc} />
        ))}
      </div>
    </div>
  )
}
