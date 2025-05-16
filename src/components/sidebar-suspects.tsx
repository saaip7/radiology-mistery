// components/Sidebar.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

import {codes} from "@/data/codes"

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Suspect List</h2>
      <div className="space-y-2">
        {codes.map((item) => (
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
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}