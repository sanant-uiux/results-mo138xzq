import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 \u2014 Page Not Found | Xtec Global'
  }, [])

  return (
    <section className="flex min-h-screen items-center justify-center bg-white pt-20">
      <div className="mx-auto max-w-xl px-6 py-28 text-center lg:px-8">
        <FadeIn>
          <p className="font-[family-name:var(--font-heading)] text-8xl font-bold text-stone-200">404</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-900">Page Not Found</h1>
          <p className="mt-4 text-lg text-stone-500">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-[var(--color-accent)]">
              <Home size={16} /> Back to Home
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
              <ArrowLeft size={16} /> Contact Support
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
