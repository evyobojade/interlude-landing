'use client'
import { useState, useEffect } from 'react'
import { getLanguages, detectLanguage, saveLanguage } from '@/lib/i18n'

export default function LanguageSelector({ onLanguageChange, compact = false }) {
  const [current, setCurrent] = useState('en')
  const [open, setOpen] = useState(false)
  const languages = getLanguages()

  useEffect(() => {
    const detected = detectLanguage()
    setCurrent(detected)
  }, [])

  const selectLanguage = (code) => {
    setCurrent(code)
    saveLanguage(code)
    setOpen(false)
    if (onLanguageChange) onLanguageChange(code)
  }

  const currentLang = languages.find(l => l.code === current) || languages[0]

  if (compact) {
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-[rgba(255,255,255,0.1)] border border-[rgba(200,169,110,0.2)] text-[#f5efe3] px-3 py-2 rounded-xl text-sm">
          <span>{currentLang.flag}</span>
          <span>{currentLang.code.toUpperCase()}</span>
          <span className="text-xs opacity-50">▼</span>
        </button>
        {open && (
          <div className="absolute right-0 top-full mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 w-48">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`w-full px-4 py-3 flex items-center gap-3 text-sm hover:bg-gray-50 transition-colors ${current === lang.code ? 'bg-[#f5efe3] text-[#8b6b3a]' : 'text-gray-700'}`}>
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {current === lang.code && <span className="ml-auto text-[#c8a96e]">✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs uppercase tracking-widest text-[rgba(245,239,227,0.4)] mb-2">
        Select your language
      </p>
      <div className="grid grid-cols-2 gap-2">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => selectLanguage(lang.code)}
            className={`px-4 py-3 rounded-xl text-sm flex items-center gap-2 border transition-all ${
              current === lang.code
                ? 'bg-[#c8a96e] border-[#c8a96e] text-[#0f0e17] font-medium'
                : 'bg-[rgba(245,239,227,0.06)] border-[rgba(200,169,110,0.2)] text-[rgba(245,239,227,0.7)]'
            }`}>
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
