// app/programs/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProgram, getMetafieldValue } from '@/lib/cosmic'

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = await getProgram(slug)

  if (!program) notFound()

  const image = program.metadata?.featured_image
  const name = getMetafieldValue(program.metadata?.program_name) || program.title
  const description = getMetafieldValue(program.metadata?.description)
  const skillLevel = getMetafieldValue(program.metadata?.skill_level)
  const ageGroup = getMetafieldValue(program.metadata?.age_group)
  const schedule = getMetafieldValue(program.metadata?.schedule)
  const duration = program.metadata?.duration_weeks
  const price = program.metadata?.price_egp
  const locations = program.metadata?.available_locations
  const coach = program.metadata?.lead_coach
  const included = getMetafieldValue(program.metadata?.whats_included)

  return (
    <article>
      {image && (
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2400&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {skillLevel && (
                  <span className="bg-white/90 text-tennis-700 text-sm font-semibold px-4 py-1 rounded-full">
                    {skillLevel}
                  </span>
                )}
                {ageGroup && (
                  <span className="bg-white/90 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                    {ageGroup}
                  </span>
                )}
              </div>
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
                <h2 className="text-2xl font-bold text-gray-900">About this Program</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
              </div>
            )}

            {included && (
              <div className="bg-tennis-50 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                <p className="text-gray-700 whitespace-pre-line">{included}</p>
              </div>
            )}

            {schedule && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule</h2>
                <p className="text-gray-700 whitespace-pre-line">{schedule}</p>
              </div>
            )}

            {coach && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Lead Coach</h2>
                <Link href={`/coaches/${coach.slug}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  {coach.metadata?.photo && (
                    <img
                      src={`${coach.metadata.photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                      alt={coach.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-bold text-gray-900">{coach.title}</div>
                    {coach.metadata?.title && (
                      <div className="text-sm text-tennis-600">{getMetafieldValue(coach.metadata.title)}</div>
                    )}
                  </div>
                </Link>
              </div>
            )}

            {Array.isArray(locations) && locations.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Available at</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {locations.map((loc) => (
                    <Link key={loc.id} href={`/locations/${loc.slug}`} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      📍 <span className="font-medium">{loc.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-md">
              {price !== undefined && (
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Price</div>
                  <div className="text-4xl font-bold text-tennis-700">{price} <span className="text-lg text-gray-600">EGP</span></div>
                </div>
              )}
              {duration !== undefined && (
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="text-xl font-bold text-gray-900">{duration} weeks</div>
                </div>
              )}
              <button className="w-full bg-tennis-600 hover:bg-tennis-700 text-white font-bold py-4 rounded-xl transition-colors">
                Enroll Now
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">Contact us to register for this program</p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}