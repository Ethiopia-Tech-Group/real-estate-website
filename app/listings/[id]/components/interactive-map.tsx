import { useState } from "react"
import { MapPin, School, Utensils, ShoppingCart, Car, TreePine } from "lucide-react"
import { Property } from "../types/property"

interface InteractiveMapProps {
  property: Property
}

interface NearbyPlace {
  id: number
  name: string
  type: 'school' | 'restaurant' | 'shopping' | 'park' | 'transit'
  distance: string
  rating?: number
}

export function InteractiveMap({ property }: InteractiveMapProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  // Mock data for nearby amenities
  const nearbyPlaces: NearbyPlace[] = [
    { id: 1, name: "International Community School", type: "school", distance: "0.8 km", rating: 4.5 },
    { id: 2, name: "Bole Elementary School", type: "school", distance: "1.2 km", rating: 4.2 },
    { id: 3, name: "Kaldi's Coffee", type: "restaurant", distance: "0.3 km", rating: 4.7 },
    { id: 4, name: "Yod Abyssinia", type: "restaurant", distance: "0.9 km", rating: 4.8 },
    { id: 5, name: "Bole Millennium Mall", type: "shopping", distance: "0.5 km", rating: 4.4 },
    { id: 6, name: "Getu Commercial Center", type: "shopping", distance: "0.7 km", rating: 4.1 },
    { id: 7, name: "Bole Park", type: "park", distance: "1.1 km" },
    { id: 8, name: "Bole Bus Station", type: "transit", distance: "0.4 km" },
  ]

  const categories = [
    { id: 'all', label: 'All', icon: MapPin, count: nearbyPlaces.length },
    { id: 'school', label: 'Schools', icon: School, count: nearbyPlaces.filter(p => p.type === 'school').length },
    { id: 'restaurant', label: 'Dining', icon: Utensils, count: nearbyPlaces.filter(p => p.type === 'restaurant').length },
    { id: 'shopping', label: 'Shopping', icon: ShoppingCart, count: nearbyPlaces.filter(p => p.type === 'shopping').length },
    { id: 'park', label: 'Parks', icon: TreePine, count: nearbyPlaces.filter(p => p.type === 'park').length },
    { id: 'transit', label: 'Transit', icon: Car, count: nearbyPlaces.filter(p => p.type === 'transit').length },
  ]

  const filteredPlaces = selectedCategory === 'all' 
    ? nearbyPlaces 
    : nearbyPlaces.filter(place => place.type === selectedCategory)

  const getIcon = (type: string) => {
    const icons = {
      school: School,
      restaurant: Utensils,
      shopping: ShoppingCart,
      park: TreePine,
      transit: Car
    }
    const IconComponent = icons[type as keyof typeof icons] || MapPin
    return <IconComponent className="w-4 h-4" />
  }

  const getColor = (type: string) => {
    const colors = {
      school: "text-blue-600 bg-blue-50",
      restaurant: "text-red-600 bg-red-50",
      shopping: "text-purple-600 bg-purple-50",
      park: "text-green-600 bg-green-50",
      transit: "text-orange-600 bg-orange-50"
    }
    return colors[type as keyof typeof colors] || "text-gray-600 bg-gray-50"
  }

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Location & Nearby Amenities</h3>
        <span className="text-sm text-muted-foreground">Walk Score: 85</span>
      </div>

      {/* Interactive Map Container */}
      <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-64 mb-6 overflow-hidden border border-border">
        {/* Mock Map with Points */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
            <p className="text-sm">Interactive Map View</p>
            <p className="text-xs">Showing nearby amenities around {property.location}</p>
          </div>
        </div>

        {/* Map Points */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-64 h-64">
            {/* Property Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Nearby Amenity Markers */}
            {nearbyPlaces.slice(0, 6).map((place, index) => {
              const angle = (index * 60) * (Math.PI / 180)
              const radius = 80
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              
              return (
                <div
                  key={place.id}
                  className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-md flex items-center justify-center ${getColor(place.type)}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {getIcon(place.type)}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.label}
              <span className="text-xs opacity-80">({category.count})</span>
            </button>
          )
        })}
      </div>

      {/* Nearby Places List */}
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground mb-3">Nearby Places</h4>
        {filteredPlaces.map((place) => (
          <div key={place.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${getColor(place.type)}`}>
                {getIcon(place.type)}
              </div>
              <div>
                <p className="font-medium text-foreground">{place.name}</p>
                <p className="text-sm text-muted-foreground">{place.distance} away</p>
              </div>
            </div>
            {place.rating && (
              <div className="flex items-center gap-1 text-sm">
                <span className="text-amber-600">{place.rating}</span>
                <span className="text-muted-foreground">★</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Transportation Info */}
      {/* <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h5 className="font-semibold text-blue-900 mb-2">Transportation</h5>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-blue-800">Bole Airport: <span className="font-medium">15 min</span></p>
            <p className="text-blue-800">City Center: <span className="font-medium">20 min</span></p>
          </div>
          <div>
            <p className="text-blue-800">Bus Stop: <span className="font-medium">0.4 km</span></p>
            <p className="text-blue-800">Taxi Stand: <span className="font-medium">0.2 km</span></p>
          </div>
        </div>
      </div> */}
    </div>
  )
}