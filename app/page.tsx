import Link from 'next/link'
import { getLocations, getCoaches, getPrograms } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'
import CoachCard from '@/components/CoachCard'
import ProgramCard from '@/components/ProgramCard'

export default async function HomePage() {
  const [locations, coaches, programs] = await Promise.all([
    getLocations(),
    getCoaches(),
    getPrograms(),
  ])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-tennis-700 via-tennis-600 to-tennis-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://imgix.cosmicjs.com/afadc870-43a6-11f1-9f85-e7af420a77a5-autopilot-photo-1622279457486-62dcc4a431d6-1777451861564.jpeg?w=2400&h=1200&fit=crop&auto=format,compress"
            alt="Tennis"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Egypt's Premier Tennis Academy
            </h1>
            <p className="text-xl md:text-2xl text-tennis-50 mb-8">
              World-class coaching, multiple locations, programs for all ages and skill levels
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programs" className="bg-white text-tennis-700 hover:bg-tennis-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                View Programs
              </Link>
              <Link href="/locations" className="bg-tennis-800 hover:bg-tennis-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border border-tennis-500">
                Find a Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-tennis-600 mb-2">{locations.length}</div>
              <div className="text-gray-600 font-medium">Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-tennis-600 mb-2">{coaches.length}</div>
              <div className="text-gray-600 font-medium">Expert Coaches</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-tennis-600 mb-2">{programs.length}</div>
              <div className="text-gray-600 font-medium">Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      {locations.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Locations</h2>
                <p className="text-gray-600 text-lg">Find a tennis academy near you</p>
              </div>
              <Link href="/locations" className="hidden md:inline-flex text-tennis-600 hover:text-tennis-700 font-semibold">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.slice(0, 3).map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programs */}
      {programs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Featured Programs</h2>
                <p className="text-gray-600 text-lg">Choose the perfect program for your goals</p>
              </div>
              <Link href="/programs" className="hidden md:inline-flex text-tennis-600 hover:text-tennis-700 font-semibold">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.slice(0, 3).map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coaches */}
      {coaches.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Meet Our Coaches</h2>
                <p className="text-gray-600 text-lg">Learn from the best in Egypt</p>
              </div>
              <Link href="/coaches" className="hidden md:inline-flex text-tennis-600 hover:text-tennis-700 font-semibold">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coaches.slice(0, 4).map((coach) => (
                <CoachCard key={coach.id} coach={coach} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-tennis-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Tennis Journey?</h2>
          <p className="text-xl text-tennis-100 mb-8">Join Egypt's most trusted tennis academy today</p>
          <Link href="/programs" className="inline-block bg-white text-tennis-700 hover:bg-tennis-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
            Browse Programs
          </Link>
        </div>
      </section>
    </div>
  )
}