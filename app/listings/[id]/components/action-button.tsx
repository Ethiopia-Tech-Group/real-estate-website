import Link from "next/link"
import { Calendar, MessageCircle, FileText, Download } from "lucide-react"
import { Property } from "../types/property"

interface PropertyDetailsProps {
  property: Property
}

export function ActionButtons({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-4">
      {/* Primary Actions */}
      <div className="space-y-3">
        <Link
          href="/booking"
          className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-base shadow-lg hover:shadow-xl"
        >
          <Calendar className="w-5 h-5" />
          Schedule Tour
        </Link>
        
        <button className="flex items-center justify-center gap-3 w-full border border-primary text-primary px-6 py-4 rounded-lg hover:bg-primary/5 transition-colors font-medium text-base">
          <MessageCircle className="w-5 h-5" />
          Virtual Tour
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="bg-muted/50 rounded-lg p-4 space-y-3">
        <h4 className="font-semibold text-foreground text-sm mb-2">Additional Resources</h4>
        
        <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-white transition-colors group">
          <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <div>
            <p className="font-medium text-foreground text-sm">Property Brochure</p>
            <p className="text-xs text-muted-foreground">Detailed PDF document</p>
          </div>
        </button>

        <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-white transition-colors group">
          <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <div>
            <p className="font-medium text-foreground text-sm">Floor Plans</p>
            <p className="text-xs text-muted-foreground">Download layouts</p>
          </div>
        </button>

        <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-white transition-colors group">
          <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <div>
            <p className="font-medium text-foreground text-sm">Financing Options</p>
            <p className="text-xs text-muted-foreground">Mortgage calculator</p>
          </div>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h4 className="font-semibold text-blue-900 text-sm mb-3">Property Activity</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-blue-800">Views today:</span>
            <span className="font-semibold text-blue-900">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-800">Total saves:</span>
            <span className="font-semibold text-blue-900">156</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-800">Days on market:</span>
            <span className="font-semibold text-blue-900">12</span>
          </div>
        </div>
      </div>
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