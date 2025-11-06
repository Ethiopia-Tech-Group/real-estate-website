import { MapPin, Heart, Share2 } from "lucide-react"
import { Property } from "../types/property"

interface PropertyHeaderProps {
  property: Property
  isSaved: boolean
  onSaveToggle: () => void
}

export function PropertyHeader({ property, isSaved, onSaveToggle }: PropertyHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{property.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{property.location}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onSaveToggle}
            className="p-3 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <Heart className={`w-5 h-5 ${isSaved ? "fill-accent text-accent" : "text-muted-foreground"}`} />
          </button>
          <button className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">
            <Share2 className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-primary">
        ${(property.price / 1000000).toFixed(2)}M
      </div>
    </div>
  )
}