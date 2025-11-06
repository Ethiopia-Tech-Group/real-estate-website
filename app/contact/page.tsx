"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, User, MessageCircle, Building, Star, CheckCircle, Award } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyInterest: ""
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", propertyInterest: "" })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+251 93 894 5555",
      desc: "Available 24/7",
      action: "tel:+251938945555",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "yahya@etg.et",
      desc: "We reply within 2 hours",
      action: "mailto:yahya@etg.et",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      content: "Refenti Bole, Addis Ababa",
      desc: "Refenti Building",
      action: "https://maps.google.com",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 8:30AM - 5:30PM",
      desc: "Sat: 9:00AM - 2:00PM",
      action: "",
      gradient: "from-purple-500 to-pink-500"
    },
  ]

  const teamStats = [
    { number: "50+", label: "Properties Sold" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ]

  const properties = [
    "Modern Bole Loft",
    "Luxury Kazanchis Penthouse", 
    "Classic Piassa Villa",
    "Spacious CMC Apartment",
    "Not Sure Yet"
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6">Let's Start Your Real Estate Journey</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Ready to find your dream property? Our expert team is here to guide you every step of the way with personalized service and local market expertise.
              </p>
              {/* <div className="flex flex-wrap justify-center gap-4">
                {teamStats.map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
          {/* Enhanced Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const isLink = info.action && !info.action.includes("Hours")
              
              const content = (
                <div className={`bg-gradient-to-br ${info.gradient} text-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="font-semibold text-lg mb-1">{info.content}</p>
                  <p className="text-white/80 text-sm">{info.desc}</p>
                </div>
              )

              return isLink ? (
                <a key={index} href={info.action} className="block h-full">
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              )
            })}
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-gray-700 font-medium">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-gray-700 font-medium">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+251 91 234 5678"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-700 font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-gray-700 font-medium">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject...</option>
                        <option value="inquiry">Property Inquiry</option>
                        <option value="booking">Schedule Tour</option>
                        <option value="valuation">Property Valuation</option>
                        <option value="general">General Question</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="propertyInterest" className="block text-gray-700 font-medium">
                        Property Interest
                      </label>
                      <select
                        id="propertyInterest"
                        name="propertyInterest"
                        value={formData.propertyInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a property...</option>
                        {properties.map((property, index) => (
                          <option key={index} value={property}>{property}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your real estate needs, preferred locations, budget, and any specific requirements..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-green-800 font-medium">Thank you for your message!</p>
                      <p className="text-green-600 text-sm">We'll get back to you within 2 hours.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Enhanced Info Section */}
            <div className="space-y-6">
              {/* Why Choose Us Card */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl text-white p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Why Choose Us?
                </h2>
                <div className="space-y-4">
                  {[
                    "15+ Years Local Market Expertise",
                    "Personalized Property Matching",
                    "Transparent Pricing & Process",
                    "End-to-End Support",
                    "Multilingual Team Available",
                    "After-Sales Service"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <div>
                      <p className="font-semibold">Rated 4.9/5</p>
                      <p className="text-white/80 text-sm">by 200+ clients</p>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/listings"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Building className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                    <span className="text-gray-700 group-hover:text-primary">Browse Properties</span>
                  </a>
                  <a
                    href="/booking"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Clock className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                    <span className="text-gray-700 group-hover:text-primary">Schedule Tour</span>
                  </a>
                  <a
                    href="tel:+251938945555"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                  >
                    <Phone className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
                    <span className="text-gray-700 group-hover:text-green-600">Call Now</span>
                  </a>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-bold text-blue-900 mb-1">Fast Response Guarantee</h4>
                  <p className="text-blue-700 text-sm">
                    We respond to all inquiries within 2 hours during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                {/* Mock Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    
                    <p className="font-semibold">Refenti Bole, Addis Ababa</p>
                    <p className="text-sm">Refenti Building</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Address:</strong> Refenti Bole, Addis Ababa</p>
                  <p><strong>Landmark:</strong>Refenti Building</p>
                  <p><strong>Parking:</strong> Available on premises</p>
                  <p><strong>Accessibility:</strong> Wheelchair accessible</p>
                </div>
                <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Get Directions
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