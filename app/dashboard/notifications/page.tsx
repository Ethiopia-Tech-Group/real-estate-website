"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Trash2, CheckCircle, Clock, AlertCircle, Home, Users, HomeIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface Notification {
  id: number
  type: "appointment" | "lead" | "message" | "listing" | "payment"
  title: string
  message: string
  timestamp: string
  read: boolean
  icon: any
  color: string
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "appointment",
      title: "Appointment Confirmed",
      message: "John Smith confirmed the tour of Modern Downtown Loft on Jan 15 at 10:00 AM",
      timestamp: "2 hours ago",
      read: false,
      icon: CheckCircle,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 2,
      type: "lead",
      title: "New Lead",
      message: "Emily Rodriguez is interested in Luxury Bay View Penthouse",
      timestamp: "4 hours ago",
      read: false,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 3,
      type: "listing",
      title: "Property Listed",
      message: "Your listing 'Modern Downtown Loft' has been published and is live",
      timestamp: "1 day ago",
      read: true,
      icon: Home,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      type: "message",
      title: "New Message",
      message: "Sarah Williams sent you a message about the Charming Victorian Home",
      timestamp: "2 days ago",
      read: true,
      icon: AlertCircle,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 5,
      type: "appointment",
      title: "Appointment Reminder",
      message: "Reminder: Michael Chen's tour is today at 3:00 PM",
      timestamp: "3 days ago",
      read: true,
      icon: Clock,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 6,
      type: "lead",
      title: "Hot Lead Alert",
      message: "David Thompson marked as hot lead - high conversion potential",
      timestamp: "1 week ago",
      read: true,
      icon: Users,
      color: "bg-red-100 text-red-600",
    },
  ])

  const [filter, setFilter] = useState<"all" | "unread">("all")

  const filteredNotifications = filter === "unread" ? notifications.filter((n) => !n.read) : notifications

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const unreadCount = notifications.filter((n) => !n.read).length
  const router = useRouter()

  return (
    <>
      {/* <AdminSidebar /> */}

      <main className=" bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-6 cursor-pointer">
              <HomeIcon onClick={() => router.push('/dashboard')} size={28} color="teal" />
              <div>

              <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
              <p className="text-muted-foreground mt-1 text-sm">
                {unreadCount > 0
                  ? `${unreadCount} unread notification${unreadCount !== 1 ? "s" : ""}`
                  : "All caught up!"}
              </p>
              </div>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm whitespace-nowrap"
              >
                Mark All as Read
              </button>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          {/* Filter Tabs */}
          <div className="flex gap-4 mb-6 border-b border-border">
            <button
              onClick={() => setFilter("all")}
              className={`pb-4 font-medium transition-colors ${
                filter === "all"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Notifications
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`pb-4 font-medium transition-colors relative ${
                filter === "unread"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Unread
              {unreadCount > 0 && <span className="absolute top-0 -right-3 w-2 h-2 bg-accent rounded-full" />}
            </button>
          </div>

          {/* Notifications List */}
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-foreground mb-2">No notifications</h3>
              <p className="text-muted-foreground">You're all caught up! Check back later.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredNotifications.map((notification) => {
                const Icon = notification.icon
                return (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-all ${
                      notification.read
                        ? "bg-white border-border hover:border-primary/30"
                        : "bg-primary/5 border-primary/20 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${notification.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className={`font-bold ${notification.read ? "text-foreground" : "text-foreground"}`}>
                            {notification.title}
                          </h3>
                          {!notification.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex-shrink-0 flex items-center gap-2 ml-2">
                        {!notification.read && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground"
                            title="Mark as read"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(notification.id)}
                          className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-destructive"
                          title="Delete notification"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
