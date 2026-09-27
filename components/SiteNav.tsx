'use client'
import { useEffect, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GetAppButton from '@/components/GetAppButton'

// Top navigation: wordmark on the left, a pill of links in the centre, Get Interlüde on the right.
// Below md the pill does not fit, so it becomes a menu button with a slide-down panel.
// Section links always point at the home page ("/#pricing"), so they work from /about too.
const LINKS = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#keepsakes', label: 'Keepsakes' },
  { href: '/about', label: 'About' },
]

// The bar is transparent over the hero and gains a fill once the hero has scrolled under it.
// Pages without a hero (marked data-nav-hero) get the fill as soon as they scroll at all.
const NAV_HEIGHT = 72
const subscribeScroll = (onChange: () => void) => {
  window.addEventListener('scroll', onChange, { passive: true })
  window.addEventListener('resize', onChange)
  return () => {
    window.removeEventListener('scroll', onChange)
    window.removeEventListener('resize', onChange)
  }
}
const pastHero = () => {
  const hero = document.querySelector('[data-nav-hero]')
  return hero ? hero.getBoundingClientRect().bottom <= NAV_HEIGHT : window.scrollY > 20
}
const atTop = () => false

export default function SiteNav() {
  const pathname = usePathname()
  const scrolled = useSyncExternalStore(subscribeScroll, pastHero, atTop)
  const [menuOpen, setMenuOpen] = useState(false)

  // Escape closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const filled = scrolled || menuOpen

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${filled ? 'bg-[rgba(12,11,20,0.85)] backdrop-blur-md border-[rgba(200,169,110,0.1)]' : 'border-transparent'}`}>
      <nav aria-label="Main" className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link href="/" onClick={close} className="justify-self-start text-2xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>interlüde</Link>

        {/* Desktop: the pill */}
        <ul className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[rgba(245,239,227,0.9)] shadow-[0_2px_16px_rgba(0,0,0,0.25)]">
          {LINKS.map(link => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}
                className="block px-4 py-2 rounded-full text-sm text-[#0f0e17] hover:bg-[#c8a96e] focus-visible:bg-[#c8a96e] transition-colors aria-[current=page]:bg-[rgba(200,169,110,0.35)] whitespace-nowrap">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block justify-self-end"><GetAppButton size="sm" /></div>

        {/* Mobile: menu button */}
        <button type="button" onClick={() => setMenuOpen(open => !open)}
          aria-expanded={menuOpen} aria-controls="site-menu"
          className="md:hidden justify-self-end flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(245,239,227,0.9)] text-[#0f0e17] text-sm">
          <span aria-hidden="true" className="relative w-4 h-3">
            <span className={`absolute left-0 w-4 h-0.5 bg-current transition-transform ${menuOpen ? 'top-[5px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[5px] w-4 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 w-4 h-0.5 bg-current transition-transform ${menuOpen ? 'top-[5px] -rotate-45' : 'top-[10px]'}`} />
          </span>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile: slide-down panel */}
      <div id="site-menu" hidden={!menuOpen} className="md:hidden border-t border-[rgba(200,169,110,0.1)] max-h-[calc(100dvh-72px)] overflow-y-auto">
        <ul className="px-4 sm:px-6 py-4 flex flex-col">
          {LINKS.map(link => (
            <li key={link.href}>
              <Link href={link.href} onClick={close} aria-current={pathname === link.href ? 'page' : undefined}
                className="block py-4 text-xl text-[#f5efe3] hover:text-[#c8a96e] border-b border-[rgba(245,239,227,0.06)] aria-[current=page]:text-[#c8a96e]"
                style={{fontFamily:'var(--font-playfair)'}}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 sm:px-6 pb-6 flex justify-center" onClick={close}><GetAppButton /></div>
      </div>
    </header>
  )
}
