"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Users,
  Home,
  Calendar,
  Clock,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  BookOpen,
  X,
  Save,
  Bell,
  Settings,
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

interface Property {
  id: number
  title: string
  price: string
  status: "Listed" | "Pending" | "Sold"
  views: number
  leads: number
  location?: string
  beds?: number
  baths?: number
}

interface ListingForm {
  title: string
  price: string
  location: string
  beds: number
  baths: number
  status: "Listed" | "Pending" | "Sold"
}


interface Appointment {
  id: number
  clientName: string
  property: string
  date: string
  time: string
  status: "confirmed" | "pending" | "completed"
  notes: string
}

interface Client {
  id: number
  name: string
  email: string
  phone: string
  interestLevel: "Hot" | "Warm" | "Cold"
  lastContact: string
  interestedProperty: string
  nextFollowUp: string
}

interface PropertyWithAmenities {
  id: number
  title: string
  price: string
  image: string
  nearbySchools: string[]
  restaurants: string[]
  shopping: string[]
  otherAmenities: string[]
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showListingModal, setShowListingModal] = useState(false)
  const [showLeadModal, setShowLeadModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const [listingForm, setListingForm] = useState<ListingForm>({
    title: "",
    price: "",
    location: "",
    beds: 0,
    baths: 0,
    status: "Listed" as const,
  })

  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    interestLevel: "Warm" as const,
    interestedProperty: "",
  })

  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "Br 1,250,000",
      status: "Listed",
      views: 342,
      leads: 12,
      location: "Downtown SF",
      beds: 2,
      baths: 2,
    },
    {
      id: 2,
      title: "Luxury Bay View Penthouse",
      price: "Br 3,500,000",
      status: "Pending",
      views: 891,
      leads: 28,
      location: "Financial District",
      beds: 3,
      baths: 3,
    },
    {
      id: 3,
      title: "Charming Victorian Home",
      price: "Br 2,100,000",
      status: "Listed",
      views: 567,
      leads: 18,
      location: "Pacific Heights",
      beds: 4,
      baths: 3,
    },
  ])

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      clientName: "John Smith",
      property: "Modern Downtown Loft",
      date: "2025-01-15",
      time: "10:00 AM",
      status: "confirmed",
      notes: "Interested in renovated kitchens",
    },
    {
      id: 2,
      clientName: "Sarah Williams",
      property: "Luxury Bay View Penthouse",
      date: "2025-01-16",
      time: "2:30 PM",
      status: "pending",
      notes: "First time buyer, needs financing info",
    },
  ])

  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      interestLevel: "Hot",
      lastContact: "2 days ago",
      interestedProperty: "Modern Downtown Loft",
      nextFollowUp: "2025-01-20",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.w@email.com",
      phone: "+1 (555) 234-5678",
      interestLevel: "Warm",
      lastContact: "1 week ago",
      interestedProperty: "Luxury Bay View Penthouse",
      nextFollowUp: "2025-01-22",
    },
  ])

  const [propertiesWithAmenities] = useState<PropertyWithAmenities[]>([
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "Br 1,250,000",
      image: "/modern-living-room-with-floor-to-ceiling-windows.jpg",
      nearbySchools: ["Lincoln Elementary School", "Central High School", "Tech Academy"],
      restaurants: ["The Urban Kitchen", "Artisan Coffee Co", "Italian Bistro", "Sushi Place"],
      shopping: ["Downtown Shopping Center", "Fashion District Mall", "Local Markets"],
      otherAmenities: ["Gym & Fitness Center", "Public Library", "Parks & Recreation", "Public Transit Hub"],
    },
  ])

  const handleAddListing = () => {
    if (editingId) {
      setProperties(properties.map((p) => (p.id === editingId ? { ...p, ...listingForm } : p)))
      setEditingId(null)
    } else {
      const newListing = {
        id: Math.max(...properties.map((p) => p.id), 0) + 1,
        ...listingForm,
        views: 0,
        leads: 0,
      }
      setProperties([...properties, newListing])
    }
    setListingForm({ title: "", price: "", location: "", beds: 0, baths: 0, status: "Listed" })
    setShowListingModal(false)
  }

  const handleEditListing = (property: Property) => {
    setListingForm({
      title: property.title,
      price: property.price,
      location: property.location || "",
      beds: property.beds || 0,
      baths: property.baths || 0,
      status: property.status,
    })
    setEditingId(property.id)
    setShowListingModal(true)
  }

  const handleDeleteListing = (id: number) => {
    setProperties(properties.filter((p) => p.id !== id))
  }

  const handleAddLead = () => {
    if (!leadForm.name || !leadForm.email) return
    const newLead = {
      id: Math.max(...clients.map((c) => c.id), 0) + 1,
      ...leadForm,
      lastContact: "Today",
      nextFollowUp: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    }
    setClients([...clients, newLead])
    setLeadForm({ name: "", email: "", phone: "", interestLevel: "Warm", interestedProperty: "" })
    setShowLeadModal(false)
  }

  const handleDeleteLead = (id: number) => {
    setClients(clients.filter((c) => c.id !== id))
  }

  const stats = [
    { label: "Active Listings", value: properties.length.toString(), icon: Home, color: "text-primary" },
    {
      label: "Total Views",
      value: properties.reduce((acc, p) => acc + p.views, 0).toString(),
      icon: Eye,
      color: "text-secondary",
    },
    { label: "Leads", value: clients.length.toString(), icon: Users, color: "text-accent" },
    { label: "Appointments", value: appointments.length.toString(), icon: Calendar, color: "text-primary" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
      case "Hot":
        return "bg-primary/20 text-primary"
      case "pending":
      case "Warm":
        return "bg-accent/20 text-accent-foreground"
      case "completed":
      case "Cold":
        return "bg-secondary/20 text-secondary-foreground"
      default:
        return "bg-muted/20 text-muted-foreground"
    }
  }
const router = useRouter()
const pathname = usePathname()
const hideNavbar = pathname.startsWith('/dashboard')
  
  return (
    <>

      {/* <AdminSidebar /> */}

      <main className="  bg-background min-h-screen">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-border">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-12 py-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Agent Dashboard</h1>
                <p className="text-muted-foreground mt-1 text-sm sm:text-base">Welcome back, Sarah Johnson</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <button onClick={()=> router.push('/dashboard/notifications')} className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-foreground" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Settings onClick={()=> router.push('/dashboard/settings')} className="w-5 h-5 text-foreground" />
                </button>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SJ
                </div>
              </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Tab Navigation */}
          <div className="flex gap-4 sm:gap-8 border-b border-border mb-6 sm:mb-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "appointments", label: "Appointments" },
              { id: "clients", label: "Clients & Leads" },
              { id: "amenities", label: "Properties & Amenities" },
              { id: "listings", label: "My Listings" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6 sm:space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="bg-white rounded-lg border border-border p-4 sm:p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-muted-foreground text-xs sm:text-sm font-medium mb-2">{stat.label}</p>
                          <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                        </div>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Quick Actions - Now Functional */}
                <div className="bg-white rounded-lg border border-border p-4 sm:p-6 lg:h-fit lg:col-span-1 lg:row-start-1">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Quick Actions</h2>
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={() => {
                        setEditingId(null)
                        setListingForm({ title: "", price: "", location: "", beds: 0, baths: 0, status: "Listed" })
                        setShowListingModal(true)
                      }}
                      className="w-full bg-primary text-primary-foreground px-4 py-2 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Plus className="w-4 h-4" />
                      Add Property
                    </button>
                    <button
                      onClick={() => setShowLeadModal(true)}
                      className="w-full border border-primary text-primary px-4 py-2 sm:py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium text-sm sm:text-base"
                    >
                      Add Lead
                    </button>
                    <button
                      onClick={() => setActiveTab("appointments")}
                      className="w-full border border-border text-foreground px-4 py-2 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base"
                    >
                      Schedule Meeting
                    </button>
                    <button
                      onClick={() => setActiveTab("listings")}
                      className="w-full border border-border text-foreground px-4 py-2 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base"
                    >
                      View Documents
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-lg border border-border p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Recent Stats</h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center p-3 border-b border-border">
                      <span className="text-foreground font-medium">Total Properties Listed</span>
                      <span className="text-2xl font-bold text-primary">{properties.length}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-b border-border">
                      <span className="text-foreground font-medium">Active Clients</span>
                      <span className="text-2xl font-bold text-accent">{clients.length}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-b border-border">
                      <span className="text-foreground font-medium">Scheduled Appointments</span>
                      <span className="text-2xl font-bold text-secondary">{appointments.length}</span>
                    </div>
                    <div className="flex justify-between items-center p-3">
                      <span className="text-foreground font-medium">Total Views</span>
                      <span className="text-2xl font-bold text-primary">
                        {properties.reduce((acc, p) => acc + p.views, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === "appointments" && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Appointment Schedule</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="lg:col-span-2 bg-white rounded-lg border border-border p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Upcoming Appointments</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {appointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground text-sm sm:text-base">{apt.clientName}</h4>
                            <p className="text-muted-foreground text-xs sm:text-sm">{apt.property}</p>
                          </div>
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(apt.status)}`}
                          >
                            {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {apt.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {apt.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-border p-4 sm:p-6 lg:h-fit">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Stats</h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Confirmed</span>
                      <span className="text-2xl font-bold text-primary">
                        {appointments.filter((a) => a.status === "confirmed").length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Pending</span>
                      <span className="text-2xl font-bold text-accent">
                        {appointments.filter((a) => a.status === "pending").length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Clients & Leads Tab */}
          {activeTab === "clients" && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Client Interaction & Lead Management</h2>
                <button
                  onClick={() => setShowLeadModal(true)}
                  className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4" />
                  Add Lead
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg border border-border p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm font-medium mb-2">Hot Leads</p>
                      <p className="text-2xl sm:text-3xl font-bold text-primary">
                        {clients.filter((c) => c.interestLevel === "Hot").length}
                      </p>
                    </div>
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-border p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm font-medium mb-2">Warm Leads</p>
                      <p className="text-2xl sm:text-3xl font-bold text-accent">
                        {clients.filter((c) => c.interestLevel === "Warm").length}
                      </p>
                    </div>
                    <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-border p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm font-medium mb-2">Cold Leads</p>
                      <p className="text-2xl sm:text-3xl font-bold text-secondary">
                        {clients.filter((c) => c.interestLevel === "Cold").length}
                      </p>
                    </div>
                    <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-border overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground">
                        Name
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground hidden sm:table-cell">
                        Interest
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground hidden md:table-cell">
                        Email
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground hidden lg:table-cell">
                        Phone
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr
                        key={client.id}
                        className="border-b border-border hover:bg-muted/30 transition-colors text-xs sm:text-sm"
                      >
                        <td className="px-3 sm:px-6 py-4 text-foreground font-medium">{client.name}</td>
                        <td className="px-3 sm:px-6 py-4 hidden sm:table-cell">
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(client.interestLevel)}`}
                          >
                            {client.interestLevel}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-4 hidden md:table-cell text-muted-foreground">{client.email}</td>
                        <td className="px-3 sm:px-6 py-4 hidden lg:table-cell text-muted-foreground">{client.phone}</td>
                        <td className="px-3 sm:px-6 py-4">
                          <button
                            onClick={() => handleDeleteLead(client.id)}
                            className="text-destructive hover:text-destructive/80 font-medium text-xs sm:text-sm"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Listings Tab */}
          {activeTab === "listings" && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">My Listings</h2>
                <button
                  onClick={() => {
                    setEditingId(null)
                    setListingForm({ title: "", price: "", location: "", beds: 0, baths: 0, status: "Listed" })
                    setShowListingModal(true)
                  }}
                  className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4" />
                  New Listing
                </button>
              </div>

              <div className="bg-white rounded-lg border border-border overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground">
                        Property
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground hidden sm:table-cell">
                        Price
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground">
                        Status
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground hidden md:table-cell">
                        Views
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property) => (
                      <tr
                        key={property.id}
                        className="border-b border-border hover:bg-muted/30 transition-colors text-xs sm:text-sm"
                      >
                        <td className="px-3 sm:px-6 py-4 text-foreground font-medium">{property.title}</td>
                        <td className="px-3 sm:px-6 py-4 text-foreground font-bold text-primary hidden sm:table-cell">
                          {property.price}
                        </td>
                        <td className="px-3 sm:px-6 py-4">
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                              property.status === "Listed"
                                ? "bg-secondary/20 text-secondary-foreground"
                                : property.status === "Pending"
                                  ? "bg-accent/20 text-accent-foreground"
                                  : "bg-primary/20 text-primary"
                            }`}
                          >
                            {property.status}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-4 text-muted-foreground hidden md:table-cell">
                          {property.views}
                        </td>
                        <td className="px-3 sm:px-6 py-4">
                          <div className="flex gap-1 sm:gap-2">
                            <button
                              onClick={() => handleEditListing(property)}
                              className="p-1 hover:bg-muted rounded transition-colors text-foreground"
                            >
                              <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteListing(property.id)}
                              className="p-1 hover:bg-muted rounded transition-colors text-destructive"
                            >
                              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Amenities Tab */}
          {activeTab === "amenities" && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Properties & Nearby Amenities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {propertiesWithAmenities.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 sm:h-64 bg-muted overflow-hidden">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{property.title}</h3>
                      <p className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">{property.price}</p>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="font-bold text-foreground text-sm sm:text-base flex items-center gap-2 mb-2 sm:mb-3">
                            <BookOpen className="w-4 h-4" />
                            Nearby Schools
                          </h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {property.nearbySchools.map((school, idx) => (
                              <li key={idx} className="text-muted-foreground text-xs sm:text-sm">
                                • {school}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Listing Modal */}
        {showListingModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-foreground">{editingId ? "Edit" : "Add"} Listing</h3>
                <button
                  onClick={() => setShowListingModal(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Property Title"
                  value={listingForm.title}
                  onChange={(e) => setListingForm({ ...listingForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <input
                  type="text"
                  placeholder="Price (e.g., Br 1,250,000)"
                  value={listingForm.price}
                  onChange={(e) => setListingForm({ ...listingForm, price: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={listingForm.location}
                  onChange={(e) => setListingForm({ ...listingForm, location: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Bedrooms"
                    value={listingForm.beds}
                    onChange={(e) => setListingForm({ ...listingForm, beds: Number.parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Bathrooms"
                    value={listingForm.baths}
                    onChange={(e) => setListingForm({ ...listingForm, baths: Number.parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  />
                </div>
                <select
                  value={listingForm.status}
                  onChange={(e) => setListingForm({ ...listingForm, status: e.target.value as any })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                >
                  <option value="Listed">Listed</option>
                  <option value="Pending">Pending</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowListingModal(false)}
                  className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddListing}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lead Modal */}
        {showLeadModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-foreground">Add New Lead</h3>
                <button onClick={() => setShowLeadModal(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Client Name"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <select
                  value={leadForm.interestLevel}
                  onChange={(e) => setLeadForm({ ...leadForm, interestLevel: e.target.value as any })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                >
                  <option value="Hot">Hot</option>
                  <option value="Warm">Warm</option>
                  <option value="Cold">Cold</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLeadModal(false)}
                  className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddLead}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Add Lead
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
