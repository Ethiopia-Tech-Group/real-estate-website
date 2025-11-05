"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Save, Bell, Lock, User, HomeIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [saved, setSaved] = useState(false)

  const [settings, setSettings] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@realty.com",
    phone: "+1 (555) 123-4567",
    brokerage: "Premium Realty Partners",
    licenseNumber: "CA-RE-12345",
    bio: "Expert real estate agent with 10+ years of experience",
    language: "English",
    timezone: "PST (UTC-8)",
    notifications: {
      emailNotifications: true,
      smsNotifications: true,
      appointmentReminders: true,
      leadNotifications: true,
      marketingEmails: false,
    },
    privacy: {
      profileVisibility: "Public",
      showPhone: true,
      showEmail: true,
    },
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }
  const router = useRouter()

  return (
    <>
      {/* <AdminSidebar /> */}

      <main className=" bg-background min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-6 cursor-pointer">
          <HomeIcon onClick={() => router.push('/dashboard')} size={28} color="teal" />
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your account preferences and profile</p>
          </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Success Message */}
          {saved && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-900">Settings saved successfully</h3>
                <p className="text-sm text-green-800 mt-1">Your changes have been saved to your account.</p>
              </div>
            </div>
          )}

          {/* Settings Tabs */}
          <div className="space-y-8">
            {/* Profile Settings */}
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Profile Information</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      value={settings.name}
                      onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Brokerage</label>
                    <input
                      type="text"
                      value={settings.brokerage}
                      onChange={(e) => setSettings({ ...settings, brokerage: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">License Number</label>
                  <input
                    type="text"
                    value={settings.licenseNumber}
                    onChange={(e) => setSettings({ ...settings, licenseNumber: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                  <textarea
                    value={settings.bio}
                    onChange={(e) => setSettings({ ...settings, bio: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Language</label>
                    <select
                      value={settings.language}
                      onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>Mandarin</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      <option>PST (UTC-8)</option>
                      <option>MST (UTC-7)</option>
                      <option>CST (UTC-6)</option>
                      <option>EST (UTC-5)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Notifications</h2>
              </div>

              <div className="space-y-4">
                {Object.entries(settings.notifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div>
                      <label className="block font-medium text-foreground text-sm capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <p className="text-xs text-muted-foreground mt-1">
                        {key === "emailNotifications" && "Receive important updates via email"}
                        {key === "smsNotifications" && "Get text message alerts for urgent matters"}
                        {key === "appointmentReminders" && "Reminders before scheduled appointments"}
                        {key === "leadNotifications" && "Alerts for new leads and inquiries"}
                        {key === "marketingEmails" && "Promotional and marketing content"}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, [key]: e.target.checked },
                        })
                      }
                      className="w-5 h-5 rounded border-border cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Privacy & Security</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Profile Visibility</label>
                  <select
                    value={settings.privacy.profileVisibility}
                    onChange={(e) =>
                      setSettings({ ...settings, privacy: { ...settings.privacy, profileVisibility: e.target.value } })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  >
                    <option>Public</option>
                    <option>Private</option>
                    <option>Clients Only</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                    <div>
                      <label className="block font-medium text-foreground text-sm">Show Phone Number</label>
                      <p className="text-xs text-muted-foreground mt-1">Allow clients to see your phone number</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.showPhone}
                      onChange={(e) =>
                        setSettings({ ...settings, privacy: { ...settings.privacy, showPhone: e.target.checked } })
                      }
                      className="w-5 h-5 rounded border-border cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                    <div>
                      <label className="block font-medium text-foreground text-sm">Show Email Address</label>
                      <p className="text-xs text-muted-foreground mt-1">Allow clients to see your email address</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.showEmail}
                      onChange={(e) =>
                        setSettings({ ...settings, privacy: { ...settings.privacy, showEmail: e.target.checked } })
                      }
                      className="w-5 h-5 rounded border-border cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end gap-4">
              <button className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
