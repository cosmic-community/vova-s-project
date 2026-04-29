import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎾</span>
            <span className="font-bold text-xl text-tennis-700">Vova's Tennis Academy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-tennis-600 font-medium transition-colors">Home</Link>
            <Link href="/locations" className="text-gray-700 hover:text-tennis-600 font-medium transition-colors">Locations</Link>
            <Link href="/coaches" className="text-gray-700 hover:text-tennis-600 font-medium transition-colors">Coaches</Link>
            <Link href="/programs" className="text-gray-700 hover:text-tennis-600 font-medium transition-colors">Programs</Link>
          </nav>
          <Link href="/programs" className="hidden md:inline-flex bg-tennis-600 hover:bg-tennis-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  )
}