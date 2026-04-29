// app/locations/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getLocation } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = await getLocation(slug)

  if (!location) notFound()

  const heroImage = location.metadata?.hero_image
  const name = getMetafieldValue(location.metadata?.name) || location.title
  const city = getMetafieldValue(location.metadata?.city)
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const email = getMetafieldValue(location.metadata?.email)
  const description = getMetafieldValue(location.metadata?.description)
  const courts = location.metadata?.number_of_courts
  const facilities = location.metadata?.facilities
  const hours = getMetafieldValue(location.metadata?.operating_hours)
  const gallery = location.metadata?.gallery

  return (
    <article>
      {heroImage && (
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={`${heroImage.imgix_url}?w=2400&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-tennis-300 font-medium mb-2">📍 {city}</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">{name}</h1>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {description && (
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
              </div>
            )}

            {Array.isArray(facilities) && facilities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {facilities.map((facility, idx) => (
                    <div key={idx} className="bg-tennis-50 text-tennis-700 px-4 py-2 rounded-lg text-sm font-medium">
                      ✓ {facility}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(gallery) && gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((image, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                        alt={`${name} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside>
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Location Info</h2>
              <div className="space-y-4">
                {courts !== undefined && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Courts</div>
                    <div className="font-semibold">{courts} tennis courts</div>
                  </div>
                )}
                {address && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Address</div>
                    <div className="font-semibold">{address}</div>
                  </div>
                )}
                {phone && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <a href={`tel:${phone}`} className="font-semibold text-tennis-600 hover:underline">{phone}</a>
                  </div>
                )}
                {email && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href={`mailto:${email}`} className="font-semibold text-tennis-600 hover:underline break-all">{email}</a>
                  </div>
                )}
                {hours && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Operating Hours</div>
                    <div className="font-semibold whitespace-pre-line">{hours}</div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}