'use client'
import { useSyncExternalStore } from 'react'
import { APP_STORE_URL, WEB_APP_URL } from '@/lib/links'

const subscribe = () => () => {}
const browserHref = () => (/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent) ? APP_STORE_URL : WEB_APP_URL)
const serverHref = () => APP_STORE_URL

// One button for every visitor: Apple devices go to the App Store, everyone else (Android,
// Windows, Linux) to the web app until Google Play launches. The server renders the App Store
// link, so the button works before JavaScript loads.
export default function GetAppButton({ className = '' }: { className?: string }) {
  const href = useSyncExternalStore(subscribe, browserHref, serverHref)
  return (
    <a href={href}
      className={`inline-block w-full max-w-sm py-4 rounded-2xl bg-[#c8a96e] text-[#0f0e17] font-medium text-lg text-center hover:opacity-90 transition-opacity ${className}`}>
      Get Interlüde
    </a>
  )
}
