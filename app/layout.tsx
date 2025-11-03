import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Realty Assistant - Find Your Dream Property",
  description:
    "Modern real estate platform for agents and clients. Discover properties, schedule tours, and connect with agents.",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`font-sans antialiased bg-gray-950 text-gray-100`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
