"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Calendar, Clock, Users, Home } from "lucide-react"

interface TimeSlot {
  time: string
  available: boolean
}

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedProperty, setSelectedProperty] = useState("1")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
  })

  const properties = [
    { id: "1", name: "Modern Downtown Loft", location: "Downtown SF" },
    { id: "2", name: "Luxury Bay View Penthouse", location: "Financial District" },
    { id: "3", name: "Charming Victorian Home", location: "Pacific Heights" },
  ]

  const timeSlots: TimeSlot[] = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: false },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Tour scheduled! You will receive a confirmation email shortly.")
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Schedule Your Tour</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a private or group tour of any of our featured properties with one of our expert agents.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="property" className="block text-foreground font-bold mb-3">
                    <Home className="w-5 h-5 inline mr-2 text-primary" />
                    Select Property
                  </label>
                  <select
                    id="property"
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {properties.map((prop) => (
                      <option key={prop.id} value={prop.id}>
                        {prop.name} - {prop.location}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-foreground font-bold mb-3">
                    <Calendar className="w-5 h-5 inline mr-2 text-primary" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getMinDate()}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-foreground font-bold mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-bold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-bold mb-3">
                    <Clock className="w-5 h-5 inline mr-2 text-primary" />
                    Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                          selectedTime === slot.time
                            ? "bg-primary text-primary-foreground"
                            : slot.available
                              ? "bg-muted text-foreground hover:bg-muted/80"
                              : "bg-muted text-muted-foreground opacity-50 cursor-not-allowed"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground font-bold mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-foreground font-bold mb-3">
                    <Users className="w-5 h-5 inline mr-2 text-primary" />
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="border-t border-border p-8 flex gap-4">
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone}
                className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Confirm Booking
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex-1 border border-border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors font-bold"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Flexible Scheduling",
                desc: "Book tours at your convenience. Slots available throughout the week.",
              },
              {
                icon: Users,
                title: "Group Tours",
                desc: "Bring family and friends. Perfect for team viewings.",
              },
              {
                icon: Home,
                title: "Expert Guidance",
                desc: "Our agents provide detailed property information and answer all questions.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
