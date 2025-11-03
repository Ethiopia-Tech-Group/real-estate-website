"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Bell, Settings, Plus, Edit2, Trash2, Eye, Users, DollarSign, Home } from "lucide-react"

interface Property {
  id: number
  title: string
  price: string
  status: "Listed" | "Pending" | "Sold"
  views: number
  leads: number
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "$1,250,000",
      status: "Listed",
      views: 342,
      leads: 12,
    },
    {
      id: 2,
      title: "Luxury Bay View Penthouse",
      price: "$3,500,000",
      status: "Pending",
      views: 891,
      leads: 28,
    },
    {
      id: 3,
      title: "Charming Victorian Home",
      price: "$2,100,000",
      status: "Listed",
      views: 567,
      leads: 18,
    },
  ])

  const stats = [
    { label: "Active Listings", value: "12", icon: Home, color: "text-primary" },
    { label: "Total Views", value: "1,800+", icon: Eye, color: "text-secondary" },
    { label: "Leads", value: "58", icon: Users, color: "text-accent" },
    { label: "Sales (30 days)", value: "$8.2M", icon: DollarSign, color: "text-primary" },
  ]

  const recentActivities = [
    { id: 1, type: "view", property: "Modern Downtown Loft", time: "2 hours ago" },
    { id: 2, type: "lead", property: "Luxury Penthouse", time: "4 hours ago" },
    { id: 3, type: "message", client: "John Smith", time: "6 hours ago" },
    { id: 4, type: "view", property: "Victorian Home", time: "1 day ago" },
    { id: 5, type: "offer", property: "Modern Downtown Loft", time: "1 day ago" },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Agent Dashboard</h1>
                <p className="text-muted-foreground mt-1 text-sm sm:text-base">Welcome back, Sarah Johnson</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-foreground" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-foreground" />
                </button>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SJ
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Tab Navigation */}
          <div className="flex gap-4 sm:gap-8 border-b border-border mb-6 sm:mb-8 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            {[
              { id: "overview", label: "Overview" },
              { id: "listings", label: "My Listings" },
              { id: "leads", label: "Leads" },
              { id: "documents", label: "Documents" },
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
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-lg border border-border p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Recent Activity</h2>
                  <div className="space-y-3 sm:space-y-4">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start sm:items-center justify-between py-3 border-b border-border last:border-0 gap-2"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-foreground font-medium text-sm sm:text-base break-words">
                            {activity.type === "view" && `Property viewed: ${activity.property}`}
                            {activity.type === "lead" && `New lead: ${activity.property}`}
                            {activity.type === "message" && `Message from ${activity.client}`}
                            {activity.type === "offer" && `New offer: ${activity.property}`}
                          </p>
                          <p className="text-muted-foreground text-xs sm:text-sm">{activity.time}</p>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${activity.type === "lead" ? "bg-accent" : "bg-primary"}`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg border border-border p-4 sm:p-6 lg:h-fit">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Quick Actions</h2>
                  <div className="space-y-2 sm:space-y-3">
                    <button className="w-full bg-primary text-primary-foreground px-4 py-2 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                      <Plus className="w-4 h-4" />
                      Add Property
                    </button>
                    <button className="w-full border border-primary text-primary px-4 py-2 sm:py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium text-sm sm:text-base">
                      Generate Marketing
                    </button>
                    <button className="w-full border border-border text-foreground px-4 py-2 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base">
                      Schedule Meeting
                    </button>
                    <button className="w-full border border-border text-foreground px-4 py-2 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base">
                      View Documents
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Listings Tab */}
          {activeTab === "listings" && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">My Listings</h2>
                <button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
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
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-foreground hidden md:table-cell">
                        Leads
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
                        <td className="px-3 sm:px-6 py-4 flex items-center gap-1 text-muted-foreground hidden md:table-cell">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          {property.views}
                        </td>
                        <td className="px-3 sm:px-6 py-4 flex items-center gap-1 text-muted-foreground hidden md:table-cell">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          {property.leads}
                        </td>
                        <td className="px-3 sm:px-6 py-4">
                          <div className="flex gap-1 sm:gap-2">
                            <button className="p-1 hover:bg-muted rounded transition-colors text-foreground">
                              <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button className="p-1 hover:bg-muted rounded transition-colors text-destructive">
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

          {/* Leads Tab */}
          {activeTab === "leads" && (
            <div className="bg-white rounded-lg border border-border p-6 sm:p-8 text-center">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Manage Your Leads</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Track and manage all your client inquiries and follow-ups.
              </p>
              <button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base">
                View All Leads
              </button>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: "Contract Template", desc: "Standard real estate contract" },
                  { title: "Disclosure Form", desc: "Property disclosure document" },
                  { title: "Offer Letter", desc: "Purchase offer template" },
                  { title: "Inspection Report", desc: "Property inspection form" },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-border p-4 sm:p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{doc.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4">{doc.desc}</p>
                    <button className="text-primary hover:text-primary/80 font-medium text-xs sm:text-sm">
                      Download & Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
