import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/memories', label: 'Memories' },
  { to: '/connections', label: 'Connections' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 sm:px-8 md:flex-row md:justify-between">
        <Link
          to="/"
          className="font-display text-xl tracking-[0.22em] text-ivory transition-colors hover:text-champagne-soft"
          aria-label="Sam — home"
        >
          SAM<span className="text-champagne">.</span>
        </Link>

        <p className="text-center font-display text-lg italic text-mist">
          {profile.concept}
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="label-caps text-mist-dim transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/[0.04] py-6 pb-28">
        <p className="mx-auto max-w-6xl px-6 text-center text-xs tracking-wide text-mist-dim sm:px-8">
          © {new Date().getFullYear()} Sam · Lab Technologist & Singer
        </p>
      </div>
    </footer>
  )
}
