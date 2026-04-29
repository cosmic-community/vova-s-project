import { getPrograms } from '@/lib/cosmic'
import ProgramCard from '@/components/ProgramCard'

export const metadata = {
  title: 'Programs | Vova\'s Tennis Academy',
}

export default async function ProgramsPage() {
  const programs = await getPrograms()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h1>
        <p className="text-xl text-gray-600">Tennis training programs for every age and skill level</p>
      </div>
      {programs.length === 0 ? (
        <p className="text-center text-gray-600">No programs available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      )}
    </div>
  )
}