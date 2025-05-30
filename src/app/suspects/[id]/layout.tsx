// app/suspects/layout.tsx
import { Sidebar } from "@/components/sidebar-suspects"


export default function SuspectsLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" >
      <body>
        <div className="flex flex-row">
          <Sidebar/>
          {children}
        </div>
      </body>
    </html>
  )
}