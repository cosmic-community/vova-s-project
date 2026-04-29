import { getCoaches } from '@/lib/cosmic'
import CoachCard from '@/components/CoachCard'

export const metadata = {
  title: 'Coaches | Vova\'s Tennis Academy',
}

export default async function CoachesPage() {
  const coaches = await getCoaches()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Coaches</h1>
        <p className="text-xl text-gray-600">Meet the experts behind your tennis success</p>
      </div>
      {coaches.length === 0 ? (
        <p className="text-center text-gray-600">No coaches available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      )}
    </div>
  )
}