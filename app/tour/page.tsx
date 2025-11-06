"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Grid3x3, MapPin, Phone, Mail } from "lucide-react"

interface Tour {
  id: number
  title: string
  location: string
  bedrooms: number
  bathrooms: number
  price: string
  description: string
  rooms: Array<{
    name: string
    image: string
    description: string
  }>
  image: string
  agent: {
    name: string
    phone: string
    email: string
    image: string
  }
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "Downtown San Francisco",
    bedrooms: 2,
    bathrooms: 2,
    price: "Br 1,250,000",
    description:
      "Experience this stunning modern loft featuring open floor plans, floor-to-ceiling windows, and smart home technology.",
    rooms: [
      {
        name: "Living Room",
        image: "/modern-living-room-with-floor-to-ceiling-windows.jpg",
        description: "Spacious living area with panoramic city views",
      },
      {
        name: "Kitchen",
        image: "/modern-stainless-steel-kitchen.png",
        description: "State-of-the-art kitchen with premium appliances",
      },
      {
        name: "Master Bedroom",
        image: "/modern-master-bedroom-with-city-views.jpg",
        description: "Luxurious master suite with spa bathroom",
      },
      {
        name: "Guest Bedroom",
        image: "/bright-guest-bedroom.jpg",
        description: "Comfortable guest bedroom with natural light",
      },
      {
        name: "Master Bath",
        image: "/luxury-modern-bathroom.jpg",
        description: "Spa-inspired master bathroom",
      },
      {
        name: "Powder Room",
        image: "/modern-powder-room.jpg",
        description: "Modern powder room with designer fixtures",
      },
    ],
    image: "/modern-loft-3d-rendering.jpg",
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@smartrealty.com",
      image: "/professional-headshot.png",
    },
  },
  {
    id: 2,
    title: "Luxury Bay View Penthouse",
    location: "Financial District",
    bedrooms: 3,
    bathrooms: 3,
    price: "Br 3,500,000",
    description:
      "Indulge in luxury with this exceptional penthouse offering breathtaking bay views, premium finishes, and an outdoor terrace.",
    rooms: [
      {
        name: "Living Room",
        image: "/modern-living-room-with-floor-to-ceiling-windows.jpg",
        description: "Grand living room with bay views",
      },
      {
        name: "Dining Room",
        image: "/modern-stainless-steel-kitchen.png",
        description: "Formal dining area with chandelier",
      },
      {
        name: "Chef Kitchen",
        image: "/modern-stainless-steel-kitchen.png",
        description: "Professional chef's kitchen",
      },
      {
        name: "Master Suite",
        image: "/modern-master-bedroom-with-city-views.jpg",
        description: "Private master suite with terrace access",
      },
      {
        name: "Bedroom 2",
        image: "/bright-guest-bedroom.jpg",
        description: "Spacious secondary bedroom",
      },
      {
        name: "Bedroom 3",
        image: "/bright-guest-bedroom.jpg",
        description: "Third bedroom with ocean views",
      },
    ],
    image: "/luxury-penthouse-3d-rendering.jpg",
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "michael@smartrealty.com",
      image: "/placeholder.svg?key=agent-2&height=100&width=100",
    },
  },
  {
    id: 3,
    title: "Charming Victorian Home",
    location: "Pacific Heights",
    bedrooms: 4,
    bathrooms: 3,
    price: "Br 2,100,000",
    description:
      "Step back in time with this beautifully restored Victorian featuring original hardwood floors, ornate details, and modern updates.",
    rooms: [
      {
        name: "Entry Hall",
        image: "/modern-living-room-with-floor-to-ceiling-windows.jpg",
        description: "Grand entry foyer with original details",
      },
      {
        name: "Parlor",
        image: "/modern-living-room-with-floor-to-ceiling-windows.jpg",
        description: "Elegant parlor with fireplace",
      },
      {
        name: "Dining Room",
        image: "/modern-stainless-steel-kitchen.png",
        description: "Formal dining with ornate ceiling",
      },
      {
        name: "Kitchen",
        image: "/modern-stainless-steel-kitchen.png",
        description: "Updated kitchen with vintage charm",
      },
      {
        name: "Master Bedroom",
        image: "/modern-master-bedroom-with-city-views.jpg",
        description: "Master bedroom with period details",
      },
      {
        name: "Bedroom 2",
        image: "/bright-guest-bedroom.jpg",
        description: "Bright secondary bedroom",
      },
    ],
    image: "/victorian-home-3d-rendering.jpg",
    agent: {
      name: "Emma Rodriguez",
      phone: "+1 (555) 345-6789",
      email: "emma@smartrealty.com",
      image: "/placeholder.svg?key=agent-3&height=100&width=100",
    },
  },
]

export default function TourPage() {
  const [selectedTour, setSelectedTour] = useState(tours[0])
  const [selectedRoom, setSelectedRoom] = useState(0)

  const currentTourIndex = tours.findIndex((t) => t.id === selectedTour.id)

  const goToPreviousTour = () => {
    const previousIndex = (currentTourIndex - 1 + tours.length) % tours.length
    setSelectedTour(tours[previousIndex])
    setSelectedRoom(0)
  }

  const goToNextTour = () => {
    const nextIndex = (currentTourIndex + 1) % tours.length
    setSelectedTour(tours[nextIndex])
    setSelectedRoom(0)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-4">
            <div className="flex items-center gap-2 mb-2">
              {/* <Grid3x3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" /> */}
              {/* <h1 className="text-3xl sm:text-3xl font-bold text-foreground">Virtual 3D Tours</h1> */}
            </div>
            <p className="text-base sm:text-md text-muted-foreground">
              Explore properties in immersive 3D environments
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Tour Viewer */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden border border-border">
                <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden group">
                  <img
                    src={selectedTour.rooms[selectedRoom].image || "/placeholder.svg"}
                    alt={selectedTour.rooms[selectedRoom].name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={goToPreviousTour}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10"
                    aria-label="Previous property"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={goToNextTour}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10"
                    aria-label="Next property"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <div className="absolute inset-0 flex items-end justify-start pointer-events-none">
                    <div className="p-4 sm:p-6">
                      <p className="text-white font-semibold text-lg sm:text-2xl drop-shadow-lg">
                        {selectedTour.rooms[selectedRoom].name}
                      </p>
                      <p className="text-white/90 text-sm sm:text-base drop-shadow drop-shadow-md">
                        {selectedTour.rooms[selectedRoom].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tour Info */}
                <div className="p-4 sm:p-6 bg-white border-t border-border">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{selectedTour.title}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm sm:text-base">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{selectedTour.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm">Bedrooms</p>
                      <p className="text-xl sm:text-2xl font-bold text-primary">{selectedTour.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm">Bathrooms</p>
                      <p className="text-xl sm:text-2xl font-bold text-primary">{selectedTour.bathrooms}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm">Price</p>
                      <p className="text-lg sm:text-2xl font-bold text-primary">{selectedTour.price}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {selectedTour.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="flex-1 bg-primary text-primary-foreground px-6 py-2 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base">
                      Schedule a Tour
                    </button>
                    <button className="flex-1 border border-primary text-primary px-6 py-2 sm:py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium text-sm sm:text-base">
                      Save Property
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              {/* Room Navigator */}
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-border">
                  <h3 className="font-bold text-foreground mb-4 text-sm sm:text-base">Explore Rooms</h3>
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {selectedTour.rooms.map((room, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedRoom(index)}
                        className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                          selectedRoom === index
                            ? "bg-primary text-primary-foreground font-medium shadow-md"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {room.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tour Selection */}
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-border">
                  <h3 className="font-bold text-foreground mb-4 text-sm sm:text-base">Other Properties</h3>
                  <div className="space-y-3">
                    {tours.map((tour) => (
                      <button
                        key={tour.id}
                        onClick={() => {
                          setSelectedTour(tour)
                          setSelectedRoom(0)
                        }}
                        className={`w-full text-left p-3 rounded-lg border transition-all text-sm ${
                          selectedTour.id === tour.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <p className="font-medium text-foreground text-xs sm:text-sm">{tour.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{tour.location}</p>
                        <p className="text-xs sm:text-sm font-bold text-primary mt-2">{tour.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agent Info */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl overflow-hidden text-white">
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold mb-4 text-sm sm:text-base">Contact Agent</h3>
                  <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <img
                      src={selectedTour.agent.image || "/placeholder.svg"}
                      alt={selectedTour.agent.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-sm sm:text-lg">{selectedTour.agent.name}</p>
                      <p className="text-white/80 text-xs sm:text-sm">Real Estate Agent</p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <a
                      href={`tel:${selectedTour.agent.phone}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity text-xs sm:text-sm break-all"
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{selectedTour.agent.phone}</span>
                    </a>
                    <a
                      href={`mailto:${selectedTour.agent.email}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity text-xs sm:text-sm break-all"
                    >
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{selectedTour.agent.email}</span>
                    </a>
                  </div>

                  <button className="w-full bg-white text-primary px-4 py-2 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-xs sm:text-sm">
                    Contact Agent
                  </button>
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
