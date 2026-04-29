import Link from 'next/link'
import { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function LocationCard({ location }: { location: Location }) {
  const heroImage = location.metadata?.hero_image
  const name = getMetafieldValue(location.metadata?.name) || location.title
  const city = getMetafieldValue(location.metadata?.city)
  const courts = location.metadata?.number_of_courts

  return (
    <Link href={`/locations/${location.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        {heroImage && (
          <div className="aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              src={`${heroImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 text-tennis-600 text-sm font-medium mb-2">
            📍 {city}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-tennis-600 transition-colors mb-2">
            {name}
          </h3>
          {courts && (
            <p className="text-gray-600 text-sm">{courts} Tennis Courts</p>
          )}
        </div>
      </div>
    </Link>
  )
}