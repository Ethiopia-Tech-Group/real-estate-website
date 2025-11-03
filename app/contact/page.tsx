"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      desc: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@smartrealty.com",
      desc: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "San Francisco, CA",
      desc: "Financial District",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri 9am - 6pm",
      desc: "Sat - Sun 10am - 4pm",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our properties or services? We're here to help. Contact our team today.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-border p-8 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-semibold mb-1">{info.content}</p>
                  <p className="text-muted-foreground text-sm">{info.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      Email
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
                  <div>
                    <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject...</option>
                    <option value="inquiry">Property Inquiry</option>
                    <option value="booking">Schedule Tour</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-secondary/20 text-secondary-foreground px-4 py-3 rounded-lg text-center font-medium">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl overflow-hidden text-white p-8">
              <h2 className="text-3xl font-bold mb-8">Why Contact Us?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Expert Guidance</h3>
                  <p className="text-white/80">
                    Our experienced agents provide personalized advice tailored to your specific real estate needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Fast Response</h3>
                  <p className="text-white/80">
                    We prioritize your inquiries and typically respond within 24 hours during business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Local Expertise</h3>
                  <p className="text-white/80">
                    With deep knowledge of the San Francisco market, we help you make informed decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Dedicated Support</h3>
                  <p className="text-white/80">
                    From initial inquiry to closing, we're here to support you every step of the way.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  For urgent matters, please call us directly at <span className="font-bold">+1 (555) 123-4567</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
