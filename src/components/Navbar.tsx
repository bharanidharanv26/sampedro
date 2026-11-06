import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Brand"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8"
      >
        <Link
          to="/"
          aria-label="Sam — home"
          className="font-display text-xl tracking-[0.22em] text-ivory transition-colors hover:text-champagne-soft"
        >
          SAM<span className="text-champagne">.</span>
        </Link>
      </nav>
    </header>
  )
}
