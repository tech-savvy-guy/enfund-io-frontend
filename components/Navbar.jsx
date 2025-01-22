"use client"

import Link from "next/link"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu, Search, LayoutGrid, Package, FileText, BarChart3, MessageSquare } from "lucide-react"

export const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-background px-4 shadow-sm lg:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold">Enfund</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="w-[200px] pl-9" placeholder="Search..." />
          </div>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/83786816" alt="@tech_savvy_guy" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <aside
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-[240px] overflow-y-auto bg-background transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <nav className="space-y-1 p-4">
          <Link href="#" className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground">
            <LayoutGrid className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="https://www.sohamdatta.com" target="_blank"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <Package className="h-4 w-4" />
            Campaigns
          </Link>
          <Link
            href="https://www.sohamdatta.com" target="_blank"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <FileText className="h-4 w-4" />
            Report
          </Link>
          <Link
            href="https://www.sohamdatta.com" target="_blank"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <BarChart3 className="h-4 w-4" />
            Products
          </Link>
          <Link
            href="https://www.sohamdatta.com" target="_blank"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <MessageSquare className="h-4 w-4" />
            Comments
          </Link>
        </nav>
      </aside>
    </>
  )
}

