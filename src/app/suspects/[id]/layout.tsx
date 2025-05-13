// app/suspects/layout.tsx
import { Sidebar } from "@/components/sidebar-suspects"

import { SidebarProvider } from "@/components/ui/sidebar"

export default function SuspectsLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <SidebarProvider>
      <Sidebar/>
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}