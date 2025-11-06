import { Phone, Mail, MessageCircle, Award, Star } from "lucide-react"
import { Property } from "../types/property"

interface AgentCardProps {
  property: Property
}

export function AgentCard({ property }: AgentCardProps) {
  const agentStats = {
    listings: 24,
    experience: "5+ years",
    rating: 4.9,
    responseTime: "< 2 hours"
  }

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-xl overflow-hidden text-white shadow-xl">
      <div className="p-6">
        {/* Agent Header */}
        <div className="text-center mb-6">
          <h3 className="font-bold text-xl mb-2">Listing Agent</h3>
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto"></div>
        </div>

        {/* Agent Profile */}
        <div className="flex gap-4 mb-6">
          <div className="relative">
            <img
              src={property.agent.image || "/placeholder.svg"}
              alt={property.agent.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white">
              <div className="w-3 h-3"></div>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg mb-1">{property.agent.name}</p>
            <p className="text-white/80 text-sm mb-2">Senior Real Estate Agent</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-white/80 ml-1">{agentStats.rating}</span>
            </div>
          </div>
        </div>

        {/* Agent Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-2xl font-bold">{agentStats.listings}</p>
            <p className="text-xs text-white/80">Listings</p>
          </div>
          <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-bold">{agentStats.experience}</p>
            <p className="text-xs text-white/80">Experience</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          <a
            href={`tel:${property.agent.phone}`}
            className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
          >
            <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="flex-1 text-sm font-medium">{property.agent.phone}</span>
          </a>
          <a
            href={`mailto:${property.agent.email}`}
            className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
          >
            <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="flex-1 text-sm font-medium break-all">{property.agent.email}</span>
          </a>
        </div>

        {/* Call to Action */}
        <div className="space-y-3">
          <button className="w-full bg-white text-primary px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm flex items-center justify-center gap-2 shadow-lg">
            <MessageCircle className="w-4 h-4" />
            Contact Agent
          </button>
          <button className="w-full border border-white/30 text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium text-sm">
            View Profile
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20">
          <Award className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-white/80">Verified Professional</span>
        </div>
      </div>
    </div>
  )
}