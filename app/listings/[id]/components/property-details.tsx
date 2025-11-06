import { Bed, Bath, Square, Car, Calendar, Building } from "lucide-react"
import { Property } from "../types/property"

interface PropertyDetailsProps {
  property: Property
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const features = [
    "Smart Home Technology",
    "Floor-to-Ceiling Windows",
    "Balcony Access",
    "Ensuite Bathroom",
    "Walk-in Closet",
    "Air Conditioning",
    "High-Speed Internet",
    "Security System"
  ]

  return (
    <div className="space-y-6">
      {/* Key Features */}
      <div className="bg-white rounded-xl border border-border p-6">
        <h3 className="text-xl font-bold text-foreground mb-6">Property Features</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-3">
              <Bed className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground mb-1">Bedrooms</span>
            <span className="text-xl font-bold text-foreground">{property.beds}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-3">
              <Bath className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground mb-1">Bathrooms</span>
            <span className="text-xl font-bold text-foreground">{property.baths}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-3">
              <Square className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground mb-1">Square Feet</span>
            <span className="text-xl font-bold text-foreground">{property.sqft.toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-3">
              <Car className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground mb-1">Parking</span>
            <span className="text-xl font-bold text-foreground">{property.parking}</span>
          </div>
        </div>
      </div>

      {/* Description & Details */}
      <div className="bg-white rounded-xl border border-border p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">About This Property</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed text-base">
          {property.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Year Built</p>
              <p className="font-semibold text-foreground">{property.yearBuilt}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Building className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Property Type</p>
              <p className="font-semibold text-foreground">{property.category}</p>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Included Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 py-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property History & Insights */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h4 className="font-bold text-blue-900 mb-3">Property Insights</h4>
        <div className="space-y-3 text-sm text-blue-800">
          <div className="flex justify-between items-center">
            <span>Price per sqft:</span>
            <span className="font-semibold">${(property.price / property.sqft).toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Market Status:</span>
            <span className="font-semibold text-green-600">Active</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Last Updated:</span>
            <span className="font-semibold">2 days ago</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Property ID:</span>
            <span className="font-semibold">SR-{property.id.toString().padStart(4, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}