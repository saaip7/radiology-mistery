import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar(){
    return(
        <nav className="relative container mx-auto px-32 py-4 flex justify-between items-center border-b border-gray-100 z-10">
        <div className="text-2xl font-bold text-blue-600">Radiology Mistery</div>
        <div className="flex gap-4">
          <Link href="/">
            <Button variant="outline" className="rounded-full border-blue-200 hover:bg-blue-50 hover:text-blue-600">
              Guidance
            </Button>
          </Link>
          <Link href="/suspects">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Suspect List</Button>
          </Link>
        </div>
      </nav>
    )
}