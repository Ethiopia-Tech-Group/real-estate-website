import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-foreground">S</span>
              </div>
              <span className="font-bold text-lg">Smart Realty Ethiopia</span>
            </div>
            <p className="text-background/80">
              Your modern real estate assistant for buying, selling, or renting properties across Ethiopia.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-background transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-bold">Resources</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/faq" className="hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-background transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+251 91 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@smartrealty.et</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bole, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-background/80 text-sm">
            <p>&copy; 2025 Smart Realty Ethiopia. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-background transition-colors">
                Telegram
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
