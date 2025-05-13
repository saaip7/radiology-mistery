// components/Sidebar.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    id: "A",
    title: "Code A: Initial Findings",
    category: "Chest",
    difficulty: "Medium"
  },
  {
    id: "B", 
    title: "Code B: Follow-up CT",
    category: "Chest", 
    difficulty: "Hard"
  },
  {
    id: "C",
    title: "Code C: PET Scan Results", 
    category: "Nuclear",
    difficulty: "Hard"
  },
  {
    id: "D",
    title: "Code D: Biopsy Report",
    category: "Pathology", 
    difficulty: "Medium"
  },
  {
    id: "E",
    title: "Code E: Treatment Plan",
    category: "Oncology",
    difficulty: "Expert"
  }
]

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Suspect List</h2>
      <div className="space-y-2">
        {sidebarItems.map((item) => (
          <Link 
            key={item.id} 
            href={`/suspects/${item.id}`}
            className="block"
          >
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left hover:bg-gray-100"
            >
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-gray-500 flex gap-2">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.difficulty}</span>
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}