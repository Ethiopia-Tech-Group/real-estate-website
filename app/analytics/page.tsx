"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { TrendingUp, TrendingDown, Download, BarChart3, LineChartIcon } from "lucide-react"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

interface MetricData {
  name: string
  value: string
  change: number
  trend: "up" | "down"
  icon: any
}

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("30days")
  const [chartType, setChartType] = useState<"line" | "bar" | "pie">("line")

  const metrics: MetricData[] = [
    { name: "Total Views", value: "12,450", change: 18, trend: "up", icon: BarChart3 },
    { name: "Active Listings", value: "42", change: 5, trend: "up", icon: BarChart3 },
    { name: "Leads Generated", value: "328", change: 12, trend: "up", icon: TrendingUp },
    { name: "Avg. Days on Market", value: "28", change: -8, trend: "down", icon: TrendingDown },
  ]

  const viewsData = [
    { month: "Jan", views: 2400, inquiries: 240, bookings: 24 },
    { month: "Feb", views: 1398, inquiries: 221, bookings: 29 },
    { month: "Mar", views: 9800, inquiries: 229, bookings: 200 },
    { month: "Apr", views: 3908, inquiries: 200, bookings: 221 },
    { month: "May", views: 4800, inquiries: 300, bookings: 250 },
    { month: "Jun", views: 3800, inquiries: 278, bookings: 200 },
  ]

  const categoryData = [
    { name: "For Sale", value: 245 },
    { name: "For Rent", value: 180 },
    { name: "Premium", value: 125 },
  ]

  const COLORS = ["#4f46e5", "#0ea5e9", "#f97316"]

  const conversionData = [
    { stage: "Views", count: 12450 },
    { stage: "Leads", count: 328 },
    { stage: "Showings", count: 95 },
    { stage: "Offers", count: 24 },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
                <p className="text-muted-foreground mt-1">Track listings performance and market insights</p>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="7days">Last 7 days</option>
                  <option value="30days">Last 30 days</option>
                  <option value="90days">Last 90 days</option>
                  <option value="year">This year</option>
                </select>
                <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="bg-white rounded-lg border border-border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium mb-1">{metric.name}</p>
                      <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        metric.trend === "up" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                      }`}
                    >
                      {metric.trend === "up" ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <TrendingDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                  <p className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {metric.trend === "up" ? "+" : ""}
                    {metric.change}% vs last period
                  </p>
                </div>
              )
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Line Chart - Views Over Time */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-foreground">Performance Trends</h2>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground">
                    <LineChartIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground">
                    <BarChart3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }} />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={2} name="Views" />
                  <Line type="monotone" dataKey="inquiries" stroke="#0ea5e9" strokeWidth={2} name="Inquiries" />
                  <Line type="monotone" dataKey="bookings" stroke="#f97316" strokeWidth={2} name="Bookings" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart - Listings by Category */}
            <div className="bg-white rounded-lg border border-border p-6">
              <h2 className="text-lg font-bold text-foreground mb-6">Listings by Category</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-white rounded-lg border border-border p-6 mb-12">
            <h2 className="text-lg font-bold text-foreground mb-6">Conversion Funnel</h2>
            <div className="space-y-4">
              {conversionData.map((item, index) => {
                const percentage = (item.count / conversionData[0].count) * 100
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium text-foreground">{item.stage}</p>
                      <p className="text-sm font-bold text-primary">{item.count.toLocaleString()}</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-full flex items-center justify-end pr-2 transition-all"
                        style={{ width: `${percentage}%` }}
                      >
                        {percentage > 15 && (
                          <span className="text-white text-xs font-bold">{percentage.toFixed(0)}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-bold text-foreground">Top Performing Listings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Property</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Views</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Inquiries</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Conversion</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Avg. Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Modern Downtown Loft", views: 2450, inquiries: 142, conversion: "5.8%", time: "12d" },
                    { name: "Luxury Penthouse", views: 1890, inquiries: 156, conversion: "8.3%", time: "8d" },
                    { name: "Victorian Home", views: 1670, inquiries: 89, conversion: "5.3%", time: "18d" },
                    { name: "Marina Apartment", views: 1245, inquiries: 67, conversion: "5.4%", time: "22d" },
                  ].map((property, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">{property.name}</td>
                      <td className="px-6 py-4 text-foreground">{property.views.toLocaleString()}</td>
                      <td className="px-6 py-4 text-foreground">{property.inquiries}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {property.conversion}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground">{property.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
