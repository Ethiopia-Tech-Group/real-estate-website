"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Bed, Bath, Square, Heart, Share2 } from "lucide-react"
import Link from "next/link"

interface Room {
  name: string
  description: string
  image: string
}

interface Property {
  id: number
  title: string
  price: number
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
  category: string
  featured: boolean
  description: string
  yearBuilt: number
  parking: number
  rooms: Room[]
  agent: {
    name: string
    phone: string
    email: string
    image: string
  }
}

const propertyData: Record<number, Property> = {
  1: {
    id: 1,
    title: "Modern Downtown Loft",
    price: 1250000,
    location: "Downtown San Francisco",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "/modern-downtown-loft.png",
    category: "For Sale",
    featured: true,
    description:
      "Experience this stunning modern loft featuring open floor plans, floor-to-ceiling windows, and smart home technology. Perfect for urban professionals.",
    yearBuilt: 2020,
    parking: 2,
    rooms: [
      {
        name: "Living Room",
        description: "Spacious open-concept living area with floor-to-ceiling windows and modern finishes.",
        image: "/modern-living-room-with-floor-to-ceiling-windows.jpg",
      },
      {
        name: "Kitchen",
        description: "Chef's kitchen with stainless steel appliances, marble countertops, and smart storage.",
        image: "/modern-stainless-steel-kitchen.png",
      },
      {
        name: "Master Bedroom",
        description: "Luxurious master suite with walk-in closet and ensuite bathroom.",
        image: "/modern-master-bedroom-with-city-views.jpg",
      },
      {
        name: "Guest Bedroom",
        description: "Comfortable guest bedroom with natural light and modern décor.",
        image: "/bright-guest-bedroom.jpg",
      },
      {
        name: "Master Bath",
        description: "Spa-like master bathroom with soaking tub and rainfall shower.",
        image: "/luxury-modern-bathroom.jpg",
      },
      {
        name: "Powder Room",
        description: "Elegant powder room with modern fixtures.",
        image: "/modern-powder-room.jpg",
      },
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@smartrealty.com",
      image: "/professional-headshot.png",
    },
  },
  2: {
    id: 2,
    title: "Luxury Bay View Penthouse",
    price: 3500000,
    location: "Financial District",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "/luxury-penthouse-with-bay-view.jpg",
    category: "For Sale",
    featured: true,
    description:
      "Indulge in luxury with this exceptional penthouse offering breathtaking bay views, premium finishes, and an outdoor terrace.",
    yearBuilt: 2022,
    parking: 3,
    rooms: [
      {
        name: "Living Room",
        description: "Grand living room with floor-to-ceiling windows overlooking the bay.",
        image: "/luxury-penthouse-living-room-with-bay-views.jpg",
      },
      {
        name: "Dining Room",
        description: "Sophisticated dining area perfect for entertaining guests.",
        image: "/elegant-dining-room.png",
      },
      {
        name: "Chef Kitchen",
        description: "State-of-the-art kitchen with premium appliances and custom cabinetry.",
        image: "/luxury-chef-kitchen.jpg",
      },
      {
        name: "Master Suite",
        description: "Lavish master suite with panoramic views and spa bathroom.",
        image: "/luxury-master-bedroom-penthouse.jpg",
      },
      {
        name: "Terrace",
        description: "Private outdoor terrace with stunning city views.",
        image: "/penthouse-terrace-with-city-views.jpg",
      },
    ],
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "michael@smartrealty.com",
      image: "/professional-headshot.png",
    },
  },
  3: {
    id: 3,
    title: "Charming Victorian Home",
    price: 2100000,
    location: "Pacific Heights",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "/charming-victorian-home.jpg",
    category: "For Sale",
    featured: true,
    description:
      "Step back in time with this beautifully restored Victorian featuring original hardwood floors, ornate details, and modern updates.",
    yearBuilt: 1895,
    parking: 2,
    rooms: [
      {
        name: "Entry Hall",
        description: "Grand entry with original crown molding and chandelier.",
        image: "/victorian-entry-hall-with-chandelier.jpg",
      },
      {
        name: "Parlor",
        description: "Elegant parlor with fireplace and period details.",
        image: "/victorian-parlor-room.jpg",
      },
      {
        name: "Dining Room",
        description: "Formal dining room with wainscoting and built-in shelving.",
        image: "/victorian-dining-room.jpg",
      },
      {
        name: "Kitchen",
        description: "Renovated kitchen with modern appliances and vintage charm.",
        image: "/placeholder.svg?key=kitchen-victorian&height=500&width=700",
      },
      {
        name: "Master Bedroom",
        description: "Master bedroom with ornate fireplace and bay windows.",
        image: "/placeholder.svg?key=master-victorian&height=500&width=700",
      },
      {
        name: "Library",
        description: "Cozy library with built-in bookshelves and reading nook.",
        image: "/placeholder.svg?key=library-victorian&height=500&width=700",
      },
    ],
    agent: {
      name: "Emma Rodriguez",
      phone: "+1 (555) 345-6789",
      email: "emma@smartrealty.com",
      image: "/professional-headshot.png",
    },
  },
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = propertyData[Number(params.id)]
  const [currentRoom, setCurrentRoom] = useState(0)
  const [isSaved, setIsSaved] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

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

  const handleRoomChange = (newIndex: number) => {
    setDirection(newIndex > currentRoom ? "right" : "left")
    setCurrentRoom(newIndex)
  }

  const goToPreviousRoom = () => {
    const newIndex = currentRoom === 0 ? property.rooms.length - 1 : currentRoom - 1
    handleRoomChange(newIndex)
  }

  const goToNextRoom = () => {
    const newIndex = (currentRoom + 1) % property.rooms.length
    handleRoomChange(newIndex)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Breadcrumb */}
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
          {/* Header with Price */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{property.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className="p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                </button>
                <button className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary">${(property.price / 1000000).toFixed(2)}M</div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Room Explorer - Main Content */}
            <div className="lg:col-span-2">
              {/* Room Image with Navigation */}
              <div className="bg-white rounded-xl overflow-hidden border border-border mb-6">
                <div className="relative h-64 sm:h-80 md:h-96 bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={property.rooms[currentRoom].image || "/placeholder.svg"}
                    alt={property.rooms[currentRoom].name}
                    className={`w-full h-full object-cover ${direction === "right" ? "animate-slide-right" : "animate-slide-left"}`}
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={goToPreviousRoom}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10"
                    aria-label="Previous room"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={goToNextRoom}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10"
                    aria-label="Next room"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Room Info */}
                <div className="p-4 sm:p-6 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {property.rooms[currentRoom].name}
                    </h2>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {currentRoom + 1} of {property.rooms.length}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {property.rooms[currentRoom].description}
                  </p>
                </div>
              </div>

              {/* Room Grid - Mobile Horizontal Scroll, Desktop Grid */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Explore Rooms</h3>
                <div className="hidden md:grid grid-cols-3 gap-4">
                  {property.rooms.map((room, index) => (
                    <button
                      key={index}
                      onClick={() => handleRoomChange(index)}
                      className={`group relative h-24 rounded-lg overflow-hidden transition-all ${
                        currentRoom === index ? "ring-2 ring-primary" : "hover:shadow-md"
                      }`}
                    >
                      <img
                        src={room.image || "/placeholder.svg"}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all ${
                          currentRoom === index ? "bg-black/30" : "bg-black/0 group-hover:bg-black/20"
                        }`}
                      >
                        <span className="text-white font-medium text-xs sm:text-sm text-center px-2">{room.name}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Mobile Room Selector */}
                <div className="md:hidden flex gap-2 overflow-x-auto pb-2">
                  {property.rooms.map((room, index) => (
                    <button
                      key={index}
                      onClick={() => handleRoomChange(index)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                        currentRoom === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {room.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-xl border border-border p-4 sm:p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Property Details</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center sm:items-start">
                    <Bed className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">Bedrooms</span>
                    <span className="text-xl font-bold text-foreground">{property.beds}</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <Bath className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">Bathrooms</span>
                    <span className="text-xl font-bold text-foreground">{property.baths}</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <Square className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">Square Feet</span>
                    <span className="text-xl font-bold text-foreground">{property.sqft.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-lg font-bold text-primary mb-2">🅿️</span>
                    <span className="text-xs text-muted-foreground">Parking</span>
                    <span className="text-xl font-bold text-foreground">{property.parking}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl border border-border p-4 sm:p-6 mt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">About This Property</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{property.description}</p>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Year Built: <span className="font-semibold text-foreground">{property.yearBuilt}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Agent & CTA */}
            <div className="lg:col-span-1 space-y-6">
              {/* Agent Card */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl overflow-hidden text-white">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Listing Agent</h3>
                  <div className="flex gap-4 mb-6">
                    <img
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <p className="font-bold">{property.agent.name}</p>
                      <p className="text-white/80 text-sm">Real Estate Agent</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity text-sm sm:text-base"
                    >
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="break-all">{property.agent.phone}</span>
                    </a>
                    <a
                      href={`mailto:${property.agent.email}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity text-sm sm:text-base break-all"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span>{property.agent.email}</span>
                    </a>
                  </div>

                  <button className="w-full bg-white text-primary px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base">
                    Contact Agent
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base">
                Schedule Tour
              </button>
              <Link
                href="/booking"
                className="block w-full border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium text-center text-sm sm:text-base"
              >
                Book Viewing
              </Link>
              <Link
                href="/contact"
                className="block w-full border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors font-medium text-center text-sm sm:text-base"
              >
                Make Inquiry
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
