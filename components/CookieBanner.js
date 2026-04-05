'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('interlude_cookies_accepted')
    const dismissCount = parseInt(localStorage.getItem('interlude_install_dismissed_count') || '0')
    if (!accepted && dismissCount >= 1) setShow(true)
    else if (!accepted) setTimeout(() => setShow(true), 5000)
  }, [])

  const accept = () => {
    localStorage.setItem('interlude_cookies_accepted', 'true')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem('interlude_cookies_accepted', 'false')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-[#1a1927] border border-[rgba(200,169,110,0.2)] rounded-2xl p-5 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <p className="text-[#f5efe3] text-sm font-medium mb-1">We use cookies 🍪</p>
          <p className="text-[rgba(245,239,227,0.45)] text-xs leading-relaxed">We use essential cookies for authentication and session management only. No tracking or advertising cookies. <a href="/privacy" className="text-[#c8a96e] hover:opacity-80">Privacy Policy</a></p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={decline} className="px-4 py-2 rounded-xl border border-[rgba(200,169,110,0.2)] text-[rgba(245,239,227,0.5)] text-xs hover:opacity-80 transition-opacity">Decline</button>
          <button onClick={accept} className="px-4 py-2 rounded-xl bg-[#c8a96e] text-[#0f0e17] text-xs font-medium hover:opacity-90 transition-opacity">Accept</button>
        </div>
      </div>
    </div>
  )
}