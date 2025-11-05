"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { MapPin, Search, Home, Utensils, BookOpen, ShoppingCart, DollarSign } from "lucide-react"

interface Property {
  id: number
  title: string
  price: string
  lat: number
  lng: number
  beds: number
  baths: number
}

interface Amenity {
  name: string
  type: "school" | "restaurant" | "shopping" | "grocery"
  lat: number
  lng: number
}

export default function MapPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [amenitiesFilter, setAmenitiesFilter] = useState<string[]>(["school", "restaurant", "shopping"])
  const [searchTerm, setSearchTerm] = useState("")

  const properties: Property[] = [
    { id: 1, title: "Modern Downtown Loft", price: "Br 1.25M", lat: 37.7749, lng: -122.4194, beds: 2, baths: 2 },
    { id: 2, title: "Luxury Penthouse", price: "Br 3.5M", lat: 37.7949, lng: -122.4094, beds: 3, baths: 3 },
    { id: 3, title: "Victorian Home", price: "Br 2.1M", lat: 37.7949, lng: -122.4394, beds: 4, baths: 3 },
    { id: 4, title: "Marina Apartment", price: "Br 850K", lat: 37.7949, lng: -122.4494, beds: 2, baths: 2 },
    { id: 5, title: "Tech Hub Studio", price: "Br 450K", lat: 37.7849, lng: -122.4094, beds: 1, baths: 1 },
  ]

  const amenities: Amenity[] = [
    { name: "Lincoln High School", type: "school", lat: 37.7849, lng: -122.4194 },
    { name: "Michelin Star Restaurant", type: "restaurant", lat: 37.7849, lng: -122.4294 },
    { name: "Ferry Building Market", type: "shopping", lat: 37.7949, lng: -122.3994 },
    { name: "Whole Foods", type: "grocery", lat: 37.7949, lng: -122.4194 },
    { name: "Central Elementary", type: "school", lat: 37.7749, lng: -122.4294 },
    { name: "Local Cafe", type: "restaurant", lat: 37.7749, lng: -122.4094 },
  ]

  const getAmenityIcon = (type: string) => {
    switch (type) {
      case "school":
        return <BookOpen className="w-4 h-4" />
      case "restaurant":
        return <Utensils className="w-4 h-4" />
      case "shopping":
        return <ShoppingCart className="w-4 h-4" />
      case "grocery":
        return <DollarSign className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  const toggleAmenityFilter = (type: string) => {
    setAmenitiesFilter((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const filteredProperties = properties.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const filteredAmenities = amenities.filter((a) => amenitiesFilter.includes(a.type))

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Explore Neighborhoods</h1>
            <p className="text-lg text-muted-foreground">
              Discover properties and nearby amenities on our interactive map
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search */}
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Amenities Filter */}
              <div className="bg-white rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-4">Show Amenities</h3>
                <div className="space-y-3">
                  {[
                    { id: "school", label: "Schools", icon: BookOpen },
                    { id: "restaurant", label: "Restaurants", icon: Utensils },
                    { id: "shopping", label: "Shopping", icon: ShoppingCart },
                    { id: "grocery", label: "Grocery", icon: DollarSign },
                  ].map(({ id, label, icon: Icon }) => (
                    <label key={id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={amenitiesFilter.includes(id)}
                        onChange={() => toggleAmenityFilter(id)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-foreground text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Properties List */}
              <div className="bg-white rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-4">Properties</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredProperties.map((property) => (
                    <button
                      key={property.id}
                      onClick={() => setSelectedProperty(property)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedProperty?.id === property.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-medium text-foreground text-sm">{property.title}</p>
                      <p className="text-primary font-bold text-sm mt-1">{property.price}</p>
                      <p className="text-muted-foreground text-xs mt-1">
                        {property.beds} bed • {property.baths} bath
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="lg:col-span-3">
              <div className="relative bg-white rounded-lg border border-border overflow-hidden h-[600px] flex items-center justify-center">
                {/* Map Placeholder with Grid */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg font-medium">Interactive Map</p>
                    <p className="text-muted-foreground text-sm mt-1">Integrate with Mapbox or Google Maps</p>
                  </div>
                </div>

                {/* Property Markers Grid */}
                <div className="absolute inset-0 p-4">
                  <div className="grid grid-cols-5 grid-rows-3 gap-2 h-full">
                    {filteredProperties.map((property) => (
                      <button
                        key={property.id}
                        onClick={() => setSelectedProperty(property)}
                        className={`relative group transition-all ${
                          selectedProperty?.id === property.id ? "col-span-2 row-span-2" : "col-span-1"
                        }`}
                      >
                        <div
                          className={`h-full rounded-lg border-2 flex flex-col items-center justify-center transition-all ${
                            selectedProperty?.id === property.id
                              ? "border-primary bg-primary/20"
                              : "border-primary/50 bg-primary/10 hover:bg-primary/15"
                          }`}
                        >
                          <Home
                            className={`${selectedProperty?.id === property.id ? "w-6 h-6" : "w-4 h-4"} text-primary`}
                          />
                          {selectedProperty?.id === property.id && (
                            <div className="mt-2 text-center">
                              <p className="text-xs font-bold text-primary">{property.title}</p>
                              <p className="text-xs font-bold text-primary">{property.price}</p>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Property Card */}
                {selectedProperty && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg border border-border shadow-lg p-4 z-10 max-w-xs">
                    <h3 className="font-bold text-foreground text-sm mb-2">{selectedProperty.title}</h3>
                    <p className="text-primary font-bold text-lg mb-3">{selectedProperty.price}</p>
                    <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                      <span>{selectedProperty.beds} Beds</span>
                      <span>{selectedProperty.baths} Baths</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded text-xs font-medium hover:bg-primary/90">
                        View Details
                      </button>
                      <button className="flex-1 border border-primary text-primary px-3 py-2 rounded text-xs font-medium hover:bg-primary/5">
                        Tour
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Legend */}
              <div className="mt-4 bg-white rounded-lg border border-border p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Home, label: "Properties", color: "text-primary" },
                    { icon: BookOpen, label: "Schools", color: "text-blue-500" },
                    { icon: Utensils, label: "Restaurants", color: "text-orange-500" },
                    { icon: ShoppingCart, label: "Shopping", color: "text-purple-500" },
                  ].map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${color}`} />
                      <span className="text-sm text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
