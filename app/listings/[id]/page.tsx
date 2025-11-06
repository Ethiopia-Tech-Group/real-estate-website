"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { useParams } from "next/navigation"
import { PropertyHeader } from "./components/property-header"
import { RoomExplorer } from "./components/room-explorer"
import { PropertyDetails } from "./components/property-details"
import { AgentCard } from "./components/agent-card"
import { InteractiveMap } from "./components/interactive-map"
import { propertyData } from "./data/property-data"
import Link from "next/link"
import { ActionButtons } from "./components/action-button"

export default function PropertyDetailPage() {
  const { id } = useParams()
  const property = propertyData[Number(id)]
  const [isSaved, setIsSaved] = useState(false)

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="pt-16 bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Property not found</h1>
            <Link href="/listings" className="text-primary hover:text-primary/80">
              Back to Listings
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/listings" className="text-primary hover:text-primary/80">
                Listings
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{property.title}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PropertyHeader 
            property={property} 
            isSaved={isSaved} 
            onSaveToggle={() => setIsSaved(!isSaved)} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 space-y-8">
              <RoomExplorer property={property} />
              <InteractiveMap property={property} />
              <PropertyDetails property={property} />
            </div>

            <div className="lg:col-span-1 space-y-6">
              <AgentCard property={property} />
              <ActionButtons />
            </div>
            <div className="grid-cols-3">
            {/* <InteractiveMap property={property} /> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}