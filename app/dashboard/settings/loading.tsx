export default function Loading() {
  return (
    <div className="lg:ml-64 pt-16 bg-background min-h-screen">
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="h-8 bg-muted rounded w-48 mb-2 animate-pulse" />
          <div className="h-4 bg-muted rounded w-64 animate-pulse" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg border border-border p-6">
            <div className="h-6 bg-muted rounded w-32 mb-6 animate-pulse" />
            <div className="space-y-4">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-10 bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
