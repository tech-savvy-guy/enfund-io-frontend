"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Dashboard } from "@/components/Dashboard"
import { Footer } from "@/components/Footer"
import useResizeHandler from "@/hooks/useResizeHandler"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const scale = useResizeHandler()

  return (
    // <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Dashboard isSidebarOpen={isSidebarOpen} />
        <Footer />
      </div>
    // </div>
  )
}