"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Star, Award, Phone, Mail } from "lucide-react"

interface Agent {
  id: number
  name: string
  specialization: string
  bio: string
  image: string
  phone: string
  email: string
  location: string
  rating: number
  reviews: number
  propertiesSold: number
  totalSales: string
  yearsExperience: number
  languages: string[]
  certifications: string[]
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialization: "Luxury Residential",
    bio: "With over 12 years of experience in luxury real estate, Sarah specializes in high-end residential properties across San Francisco's most exclusive neighborhoods.",
    image: "/professional-headshot.png",
    phone: "+1 (555) 123-4567",
    email: "sarah@smartrealty.com",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 247,
    propertiesSold: 156,
    totalSales: "Br 487M",
    yearsExperience: 12,
    languages: ["English", "Mandarin", "Spanish"],
    certifications: ["GRI", "SRES", "CNE"],
  },
  {
    id: 2,
    name: "Michael Chen",
    specialization: "Commercial & Investment",
    bio: "Michael is a seasoned commercial real estate specialist with expertise in investment properties and commercial development opportunities.",
    image: "/placeholder.svg?key=agent-2&height=150&width=150",
    phone: "+1 (555) 234-5678",
    email: "michael@smartrealty.com",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 189,
    propertiesSold: 128,
    totalSales: "Br 567M",
    yearsExperience: 15,
    languages: ["English", "Mandarin"],
    certifications: ["CCIM", "CRE"],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    specialization: "First-Time Buyers",
    bio: "Emma's passion is helping first-time homebuyers navigate the real estate market and find their perfect home within budget.",
    image: "/placeholder.svg?key=agent-3&height=150&width=150",
    phone: "+1 (555) 345-6789",
    email: "emma@smartrealty.com",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 312,
    propertiesSold: 203,
    totalSales: "Br 289M",
    yearsExperience: 9,
    languages: ["English", "Spanish", "Portuguese"],
    certifications: ["ABR", "MRP"],
  },
  {
    id: 4,
    name: "David Park",
    specialization: "Luxury Estates",
    bio: "David specializes in ultra-luxury properties and estates, offering a white-glove service to high-net-worth clients.",
    image: "/placeholder.svg?key=agent-4&height=150&width=150",
    phone: "+1 (555) 456-7890",
    email: "david@smartrealty.com",
    location: "San Francisco, CA",
    rating: 5.0,
    reviews: 156,
    propertiesSold: 89,
    totalSales: "Br 842M",
    yearsExperience: 18,
    languages: ["English", "Korean", "Mandarin"],
    certifications: ["GRI", "SRES", "CRE"],
  },
  {
    id: 5,
    name: "Jessica Williams",
    specialization: "Residential Development",
    bio: "Jessica has extensive experience with residential development projects and new construction sales.",
    image: "/placeholder.svg?key=agent-5&height=150&width=150",
    phone: "+1 (555) 567-8901",
    email: "jessica@smartrealty.com",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 198,
    propertiesSold: 142,
    totalSales: "Br 412M",
    yearsExperience: 11,
    languages: ["English", "French", "German"],
    certifications: ["CNHS", "MRP"],
  },
  {
    id: 6,
    name: "Robert Martinez",
    specialization: "Investment Properties",
    bio: "Robert helps investors build portfolios with strategic property acquisitions and market analysis expertise.",
    image: "/placeholder.svg?key=agent-6&height=150&width=150",
    phone: "+1 (555) 678-9012",
    email: "robert@smartrealty.com",
    location: "San Francisco, CA",
    rating: 4.7,
    reviews: 172,
    propertiesSold: 134,
    totalSales: "Br 523M",
    yearsExperience: 13,
    languages: ["English", "Spanish"],
    certifications: ["CCIM"],
  },
]

export default function AgentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Meet Our Agents</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Experienced professionals dedicated to finding you the perfect property
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Agent Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Agent Info */}
                <div className="p-4 sm:p-6">
                  {/* Name and Specialization */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{agent.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3 sm:mb-4">{agent.specialization}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(agent.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground font-medium">{agent.rating}</span>
                    <span className="text-xs text-muted-foreground">({agent.reviews} reviews)</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">{agent.bio}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Properties</p>
                      <p className="text-sm sm:text-base font-bold text-primary">{agent.propertiesSold}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Total Sales</p>
                      <p className="text-sm sm:text-base font-bold text-primary">{agent.totalSales}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                      <p className="text-sm sm:text-base font-bold text-primary">{agent.yearsExperience}y</p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Languages</p>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.languages.map((lang) => (
                        <span key={lang} className="bg-muted text-foreground text-xs px-2.5 py-1 rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4 sm:mb-6">
                    <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm font-medium"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Call</span>
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex-1 border border-primary text-primary px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm font-medium"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden">
            <div className="px-4 sm:px-8 py-8 sm:py-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Looking for a Dedicated Agent?</h2>
              <p className="text-sm sm:text-base opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Our team of expert agents is ready to help you find your dream property or sell your home for the best
                price.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-white/10 transition-colors font-medium text-sm sm:text-base">
                  View More Agents
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
