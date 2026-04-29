import Link from 'next/link'
import { Program } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProgramCard({ program }: { program: Program }) {
  const image = program.metadata?.featured_image
  const name = getMetafieldValue(program.metadata?.program_name) || program.title
  const skillLevel = getMetafieldValue(program.metadata?.skill_level)
  const ageGroup = getMetafieldValue(program.metadata?.age_group)
  const price = program.metadata?.price_egp
  const duration = program.metadata?.duration_weeks

  return (
    <Link href={`/programs/${program.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {image && (
          <div className="aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {skillLevel && (
              <span className="bg-tennis-100 text-tennis-700 text-xs font-semibold px-3 py-1 rounded-full">
                {skillLevel}
              </span>
            )}
            {ageGroup && (
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                {ageGroup}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-tennis-600 transition-colors mb-2">
            {name}
          </h3>
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
            {price && (
              <span className="text-2xl font-bold text-tennis-700">
                {price} EGP
              </span>
            )}
            {duration && (
              <span className="text-sm text-gray-600">{duration} weeks</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}