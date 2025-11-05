export default function Loading() {
  return (
    <div className="lg:ml-64 pt-16 bg-background min-h-screen">
      <div className="bg-white border-b border-border sticky top-16 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="h-8 bg-muted rounded w-48 mb-2 animate-pulse" />
          <div className="h-4 bg-muted rounded w-64 animate-pulse" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="p-4 rounded-lg border border-border bg-white animate-pulse">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-muted rounded w-32" />
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
