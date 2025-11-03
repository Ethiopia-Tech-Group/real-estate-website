"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-foreground hidden sm:inline">Smart Realty</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/listings" className="text-foreground hover:text-primary transition-colors">
              Properties
            </Link>
            <Link href="/tour" className="text-foreground hover:text-primary transition-colors">
              3D Tours
            </Link>
            <Link href="/agents" className="text-foreground hover:text-primary transition-colors">
              Agents
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Dashboard
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/listings" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Properties
            </Link>
            <Link href="/tour" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              3D Tours
            </Link>
            <Link href="/agents" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Agents
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Contact
            </Link>
            <Link href="/dashboard" className="block px-4 py-2 text-primary font-medium hover:bg-muted rounded-lg">
              Dashboard
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 bg-primary text-primary-foreground text-center rounded-lg hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
