import Link from 'next/link'
import { Coach } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CoachCard({ coach }: { coach: Coach }) {
  const photo = coach.metadata?.photo
  const name = getMetafieldValue(coach.metadata?.full_name) || coach.title
  const title = getMetafieldValue(coach.metadata?.title)
  const experience = coach.metadata?.years_of_experience

  return (
    <Link href={`/coaches/${coach.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        {photo && (
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-tennis-600 transition-colors mb-1">
            {name}
          </h3>
          {title && <p className="text-tennis-600 font-medium text-sm mb-2">{title}</p>}
          {experience && (
            <p className="text-gray-600 text-sm">{experience} years experience</p>
          )}
        </div>
      </div>
    </Link>
  )
}