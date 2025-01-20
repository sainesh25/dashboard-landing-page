import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CircleUserRound } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b flex items-center justify-between px-4 z-10">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
      <div className="ml-auto flex items-center gap-2">
        <div className="h-8 rounded-full bg-gray-300 w-8 flex justify-center items-center shadow-md">
          <CircleUserRound  />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-[#37afc2]">OPERATIONS ADMIN</div>
          <div className="text-sm text-muted-foreground  flex items-center">Rahul Lad <ChevronDown className="h-4 w-4 ml-2 text-muted-foreground" /></div>
        </div>
        
      </div>
    </header>
  )
}

