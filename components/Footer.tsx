import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎾</span>
              <span className="font-bold text-xl">Vova's Tennis Academy</span>
            </div>
            <p className="text-gray-400">Premier tennis training across Egypt</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/locations" className="hover:text-tennis-400">Locations</Link></li>
              <li><Link href="/coaches" className="hover:text-tennis-400">Coaches</Link></li>
              <li><Link href="/programs" className="hover:text-tennis-400">Programs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Egypt's Premier Tennis Academy</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vova's Tennis Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}