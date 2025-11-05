"use client"

import { useState } from "react"
import { Menu, X, Home, FileText, Users, Settings, Bell, LogOut, Zap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", id: "dashboard" },
    { icon: FileText, label: "Listings", href: "/dashboard?tab=listings", id: "listings" },
    { icon: Users, label: "Clients & Leads", href: "/dashboard?tab=clients", id: "clients" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications", id: "notifications" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", id: "settings" },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard" && !href.includes("?")
    return pathname === href || pathname.startsWith(href.split("?")[0])
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-40 p-2 lg:hidden hover:bg-muted rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay (Mobile) */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-border z-30 transition-transform duration-300 lg:translate-x-0 pt-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="px-6 py-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Realty Hub</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active ? "bg-primary text-primary-foreground font-medium" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Bottom Section */}
          <div className="px-3 py-4 border-t border-border space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Padding */}
      <div className="hidden lg:block w-64" />
    </>
  )
}
