// app/suspects/layout.tsx
import { Sidebar } from "@/components/sidebar-suspects"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function SuspectsLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <SidebarProvider>
      <Sidebar/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}