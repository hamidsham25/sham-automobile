export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Skeleton */}
        <div className="mb-6">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery Skeleton */}
          <div>
            <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl mb-4 animate-pulse"></div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-6">
            {/* Title */}
            <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4"></div>
            
            {/* Price */}
            <div className="h-10 bg-gray-200 rounded animate-pulse w-1/2"></div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-200 p-3 rounded-lg animate-pulse">
                  <div className="h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>

            {/* Specs Table */}
            <div className="bg-gray-200 rounded-2xl p-4 animate-pulse">
              <div className="space-y-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="flex">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 ml-4"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-12 bg-gray-200 rounded-xl flex-1 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-xl flex-1 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
