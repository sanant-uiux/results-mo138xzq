import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Dribbble, Youtube, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Web & SaaS Development', to: '/services' },
    { label: 'Mobile App Development', to: '/services' },
    { label: 'AI & Machine Learning', to: '/services' },
    { label: 'UI/UX Design', to: '/services' },
    { label: 'Cloud & DevOps', to: '/services' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'FAQs', to: '/faqs' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    { label: 'Case Studies', to: '/services' },
    { label: 'Engineering Blog', to: '/blog' },
    { label: 'Service Guide', to: '/services' },
    { label: 'Privacy Policy', to: '/faqs' },
    { label: 'Terms of Service', to: '/faqs' },
  ],
}

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Dribbble, label: 'Dribbble', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-stone-900">
              Xtec<span className="text-[var(--color-accent)]">.</span>Global
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-500">
              Engineering digital products that drive revenue. We partner with startups and enterprises to design, build, and scale high-performance software.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@xtecglobal.com" className="flex items-center gap-2 text-sm text-stone-500 hover:text-[var(--color-accent)]">
                <Mail size={16} /> hello@xtecglobal.com
              </a>
              <a href="tel:+14158902740" className="flex items-center gap-2 text-sm text-stone-500 hover:text-[var(--color-accent)]">
                <Phone size={16} /> +1 (415) 890-2740
              </a>
              <p className="flex items-center gap-2 text-sm text-stone-500">
                <MapPin size={16} /> San Francisco &middot; London &middot; Melbourne
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">{title}</h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-stone-500 transition-colors hover:text-[var(--color-accent)]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-stone-400">&copy; {new Date().getFullYear()} Xtec Global. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="rounded-full p-2 text-stone-400 transition-colors hover:bg-stone-200 hover:text-[var(--color-accent)]"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
