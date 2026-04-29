import { getLocations } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'

export const metadata = {
  title: 'Locations | Vova\'s Tennis Academy',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Locations</h1>
        <p className="text-xl text-gray-600">Tennis academies across Egypt</p>
      </div>
      {locations.length === 0 ? (
        <p className="text-center text-gray-600">No locations available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      )}
    </div>
  )
}