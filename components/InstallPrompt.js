'use client'
import { useState, useEffect } from 'react'

export default function InstallPrompt() {
  const [show, setShow] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [device, setDevice] = useState('other')

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true
    if (isStandalone) return

    const dismissCount = parseInt(localStorage.getItem('interlude_install_dismissed_count') || '0')
    if (dismissCount >= 3) return

    const ua = window.navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) setDevice('ios')
    else if (/android/.test(ua)) setDevice('android')
    else setDevice('desktop')

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    })

    setTimeout(() => setShow(true), 2000)
    // Auto hide after 10 seconds
    setTimeout(() => setShow(false), 12000)
  }, [])

  const install = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const result = await deferredPrompt.userChoice
      if (result.outcome === 'accepted') {
        setShow(false)
        localStorage.setItem('interlude_install_dismissed_count', '3')
      }
    }
  }

  const dismiss = () => {
    const count = parseInt(localStorage.getItem('interlude_install_dismissed_count') || '0')
    localStorage.setItem('interlude_install_dismissed_count', String(count + 1))
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 md:left-auto md:right-6 md:w-80">
      <div className="bg-[#1a1927] border border-[rgba(200,169,110,0.25)] rounded-2xl p-5 shadow-2xl">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c8a96e] flex items-center justify-center text-[#0f0e17] font-bold text-sm">i</div>
            <div>
              <p className="text-[#f5efe3] text-sm font-medium">Add to home screen</p>
              <p className="text-[rgba(245,239,227,0.4)] text-xs">Install Interlüde as an app</p>
            </div>
          </div>
          <button onClick={dismiss} className="text-[rgba(245,239,227,0.3)] text-lg hover:text-[#f5efe3] transition-colors leading-none">×</button>
        </div>

        {device === 'ios' ? (
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-[rgba(200,169,110,0.06)] rounded-xl p-3">
              <span className="text-lg">⬆️</span>
              <p className="text-[rgba(245,239,227,0.7)] text-xs">Tap <span className="text-[#c8a96e] font-medium">Share</span> at the bottom of Safari</p>
            </div>
            <div className="flex items-center gap-3 bg-[rgba(200,169,110,0.06)] rounded-xl p-3">
              <span className="text-lg">➕</span>
              <p className="text-[rgba(245,239,227,0.7)] text-xs">Tap <span className="text-[#c8a96e] font-medium">Add to Home Screen</span></p>
            </div>
          </div>
        ) : deferredPrompt ? (
          <button onClick={install} className="w-full py-3 rounded-xl bg-[#c8a96e] text-[#0f0e17] text-sm font-medium hover:opacity-90 transition-opacity">
            Install now →
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-[rgba(200,169,110,0.06)] rounded-xl p-3">
              <span className="text-lg">⋮</span>
              <p className="text-[rgba(245,239,227,0.7)] text-xs">Tap the <span className="text-[#c8a96e] font-medium">browser menu</span></p>
            </div>
            <div className="flex items-center gap-3 bg-[rgba(200,169,110,0.06)] rounded-xl p-3">
              <span className="text-lg">➕</span>
              <p className="text-[rgba(245,239,227,0.7)] text-xs">Tap <span className="text-[#c8a96e] font-medium">Add to Home Screen</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}