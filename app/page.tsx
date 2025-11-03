import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Search, MapPin, Users, BarChart3, FileText, ArrowRight } from "lucide-react"
import { HeroParallaxDemo } from "@/components/Hero"

export default function Home() {
  const features = [
    {
      icon: Search,
      title: "Smart Property Search",
      description: "Advanced filtering and AI-powered recommendations to find your perfect property.",
    },
    {
      icon: MapPin,
      title: "Interactive Maps",
      description: "Explore neighborhoods with our interactive map showing amenities and schools.",
    },
    {
      icon: ArrowRight,
      title: "3D Property Tours",
      description: "Virtual walkthroughs of properties in immersive 3D environments.",
    },
    {
      icon: Users,
      title: "Agent Connection",
      description: "Connect directly with qualified real estate agents in your area.",
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Data-driven insights about property values and market trends.",
    },
    {
      icon: FileText,
      title: "Document Automation",
      description: "Automatically generate contracts and marketing materials.",
    },
  ]

  const listings = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "$1,250,000",
      location: "Downtown San Francisco",
      beds: 2,
      baths: 2,
      sqft: "1,400",
      image: "/modern-downtown-loft.png",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Bay View Penthouse",
      price: "$3,500,000",
      location: "Financial District",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      image: "/luxury-penthouse-with-bay-view.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Charming Victorian Home",
      price: "$2,100,000",
      location: "Pacific Heights",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      image: "/charming-victorian-home.jpg",
      featured: true,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <HeroParallaxDemo />
        {/* Featured Listings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Featured Properties</h2>
              <p className="text-lg text-muted-foreground">Explore our hand-picked selection of premium listings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="group rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{listing.title}</h3>
                    <p className="text-secondary-foreground text-sm mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {listing.location}
                    </p>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                      <span className="text-2xl font-bold text-primary">{listing.price}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-6">
                      <span>{listing.beds} Beds</span>
                      <span>{listing.baths} Baths</span>
                      <span>{listing.sqft} sqft</span>
                    </div>
                    <Link
                      href={`/listings/${listing.id}`}
                      className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                View All Listings
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Smart Realty?</h2>
              <p className="text-lg text-muted-foreground">Everything you need to buy, sell, or rent a property</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their dream homes with Smart Realty Assistant.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-white transition-colors font-medium"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
