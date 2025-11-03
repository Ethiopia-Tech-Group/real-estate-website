import { Skeleton } from "@/components/ui/skeleton"

export default function AgentsLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Skeleton className="h-10 w-48 mb-2" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>

      {/* Agents Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-border overflow-hidden">
              <Skeleton className="w-full h-56" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="flex-1 h-10" />
                  <Skeleton className="flex-1 h-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
