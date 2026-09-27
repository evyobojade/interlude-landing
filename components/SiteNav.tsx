'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SIGN_IN_URL } from '@/lib/links'

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(15,14,23,0.95)] backdrop-blur-md border-b border-[rgba(200,169,110,0.1)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>interlüde</Link>
        <a href={SIGN_IN_URL} className="text-[rgba(245,239,227,0.6)] text-sm px-3 py-2 rounded-xl hover:text-[#f5efe3] transition-colors">Sign in</a>
      </div>
    </nav>
  )
}
