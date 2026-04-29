// app/coaches/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCoach, getMetafieldValue } from '@/lib/cosmic'

export default async function CoachDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const coach = await getCoach(slug)

  if (!coach) notFound()

  const photo = coach.metadata?.photo
  const name = getMetafieldValue(coach.metadata?.full_name) || coach.title
  const title = getMetafieldValue(coach.metadata?.title)
  const bio = getMetafieldValue(coach.metadata?.bio)
  const experience = coach.metadata?.years_of_experience
  const specialties = coach.metadata?.specialties
  const certifications = getMetafieldValue(coach.metadata?.certifications)
  const location = coach.metadata?.location
  const languages = coach.metadata?.languages

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          {photo && (
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 sticky top-24">
              <img
                src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{name}</h1>
          {title && <p className="text-xl text-tennis-600 font-semibold mb-6">{title}</p>}

          <div className="flex flex-wrap gap-3 mb-8">
            {experience !== undefined && (
              <div className="bg-tennis-50 text-tennis-700 px-4 py-2 rounded-full font-medium">
                {experience} years experience
              </div>
            )}
            {location && (
              <Link href={`/locations/${location.slug}`} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100">
                📍 {location.title}
              </Link>
            )}
          </div>

          {bio && (
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900">About</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{bio}</p>
            </div>
          )}

          {Array.isArray(specialties) && specialties.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {specialties.map((spec, idx) => (
                  <span key={idx} className="bg-tennis-100 text-tennis-700 px-4 py-2 rounded-lg font-medium">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(languages) && languages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Languages</h2>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {certifications && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
              <p className="text-gray-700 whitespace-pre-line">{certifications}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}