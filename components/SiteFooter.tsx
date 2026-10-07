import Link from 'next/link'
import { CONTACT_EMAIL, PRESS_KIT_URL, SIGN_IN_URL } from '@/lib/links'
import type { Copy } from '@/lib/copy'

// Instagram and TikTok are names, so they are not in the copy file
const links = (copy: Copy['footer']) => [
  { href: '/about', label: copy.about },
  { href: SIGN_IN_URL, label: copy.signIn },
  { href: PRESS_KIT_URL, label: copy.press },
  { href: `mailto:${CONTACT_EMAIL}`, label: copy.contact },
  { href: 'https://app.getinterlude.app/privacy', label: copy.privacy },
  { href: 'https://app.getinterlude.app/terms', label: copy.terms },
  { href: 'https://instagram.com/interludetravels', label: 'Instagram' },
  { href: 'https://tiktok.com/@interludetravels', label: 'TikTok' },
  { href: 'https://app.getinterlude.app/security', label: copy.security },
  { href: 'https://app.getinterlude.app/data-request', label: copy.dataRequest },
]

export default function SiteFooter({ copy }: { copy: Copy['footer'] }) {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-[rgba(200,169,110,0.1)] relative">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-xl text-[#f5efe3] mb-1" style={{fontFamily:'var(--font-playfair)'}}>interlüde</p>
          <p className="text-[rgba(245,239,227,0.3)] text-xs">{copy.tagline}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[rgba(245,239,227,0.4)] text-xs">
          {links(copy).map(link => link.href.startsWith('/')
            ? <Link key={link.label} href={link.href} className="hover:text-[#c8a96e] transition-colors">{link.label}</Link>
            : <a key={link.label} href={link.href} className="hover:text-[#c8a96e] transition-colors">{link.label}</a>
          )}
        </div>
        <div className="text-center md:text-right">
          <p className="text-[rgba(245,239,227,0.25)] text-xs">© {new Date().getFullYear()} Interlude Travels Inc.</p>
          <p className="text-[rgba(245,239,227,0.2)] text-xs">{copy.location}</p>
        </div>
      </div>
    </footer>
  )
}
