"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { Search, MapPin, Bed, Bath, Square, Heart } from "lucide-react"

const allListings = [
  {
    id: 1,
    title: "Modern Bole Loft",
    price: 1250000,
    location: "Bole, Addis Ababa",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "/hero9.jpg",
    category: "For Sale",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Kazanchis Penthouse",
    price: 3500000,
    location: "Kazanchis, Addis Ababa",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "/hero8.jpg",
    category: "For Sale",
    featured: true,
  },
  {
    id: 3,
    title: "Charming Piassa Villa",
    price: 2100000,
    location: "Piassa, Addis Ababa",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "/hero5.jpg",
    category: "For Sale",
    featured: true,
  },
  {
    id: 4,
    title: "Spacious CMC Apartment",
    price: 8500000,
    location: "CMC, Addis Ababa",
    beds: 2,
    baths: 2,
    sqft: 1150,
    image: "/hero4.jpg",
    category: "For Sale",
    featured: false,
  },
  {
    id: 5,
    title: "Trendy Sarbet Studio",
    price: 4500000,
    location: "Sarbet, Addis Ababa",
    beds: 1,
    baths: 1,
    sqft: 680,
    image: "/hero10.jpg",
    category: "For Sale",
    featured: false,
  },
  {
    id: 6,
    title: "Cozy Gerji Apartment",
    price: 35000,
    location: "Gerji, Addis Ababa",
    beds: 1,
    baths: 1,
    sqft: 750,
    image: "/hero2.jpg",
    category: "For Rent",
    featured: false,
  },
  {
    id: 7,
    title: "Premium Old Airport Loft",
    price: 5500000,
    location: "Old Airport, Addis Ababa",
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: "/hero7.jpg",
    category: "Premium",
    featured: true,
  },
  {
    id: 8,
    title: "Lake View Villa",
    price: 4200000,
    location: "Bishoftu (Debre Zeyit)",
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: "/hero6.jpg",
    category: "For Sale",
    featured: false,
  },
];


export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 6000000])
  const [bedroomFilter, setBedroomFilter] = useState("All")

  const filteredListings = allListings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || listing.category === selectedCategory
    const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1]
    const matchesBeds = bedroomFilter === "All" || listing.beds === Number.parseInt(bedroomFilter)

    return matchesSearch && matchesCategory && matchesPrice && matchesBeds
  })

  const categories = ["All", "For Sale", "For Rent", "Premium"]

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Find Your Perfect Property</h1>
            <p className="text-lg text-muted-foreground">
              Browse our extensive collection of listings in San Francisco
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-border p-6 sticky top-24 space-y-6">
                <div>
                  <h3 className="font-bold text-foreground mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search listings..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === cat
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4">Bedrooms</h3>
                  <div className="space-y-2">
                    {["All", "1", "2", "3", "4+"].map((beds) => (
                      <button
                        key={beds}
                        onClick={() => setBedroomFilter(beds)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          bedroomFilter === beds
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {beds} {beds !== "All" ? "Bed" : ""}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="6000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{(priceRange[0] / 1000000).toFixed(1)}M ETB</span>
                      <span>{(priceRange[1] / 1000000).toFixed(1)}M ETB</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors font-medium">
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredListings.length} of {allListings.length} properties
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by</span>
                  <select className="px-2 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredListings.map((listing) => (
                  <Link
                    key={listing.id}
                    href={`/listings/${listing.id}`}
                    className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                      <img
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                          {listing.category}
                        </span>
                      </div>
                      <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-muted transition-colors">
                        <Heart className="w-4 h-4 text-accent" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-foreground mb-2 text-base sm:text-lg group-hover:text-primary transition-colors">
                        {listing.title}
                      </h3>
                      <p className="text-secondary-foreground text-xs sm:text-sm mb-4 flex items-center gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{listing.location}</span>
                      </p>

                      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-4 pb-4 border-b border-border gap-2">
                        <span className="flex items-center gap-1 flex-shrink-0">
                          <Bed className="w-4 h-4" />
                          {listing.beds}
                        </span>
                        <span className="flex items-center gap-1 flex-shrink-0">
                          <Bath className="w-4 h-4" />
                          {listing.baths}
                        </span>
                        <span className="flex items-center gap-1 truncate">
                          <Square className="w-4 h-4 flex-shrink-0" />
                          {listing.sqft.toLocaleString()} sqft
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg sm:text-2xl font-bold text-primary">
                          {listing.category === "For Rent"
                            ? `${listing.price.toLocaleString()}ETB /mo`
                            : `${(listing.price / 1000000).toFixed(1)}M ETB`}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredListings.length === 0 && (
                <div className="bg-white rounded-lg border border-border p-12 text-center">
                  <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
