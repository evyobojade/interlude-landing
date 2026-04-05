'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { detectLanguage, loadMessages, saveLanguage } from '@/lib/i18n'

const LanguageContext = createContext({})

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const [messages, setMessages] = useState(null)

  useEffect(() => {
    const detected = detectLanguage()
    setLang(detected)
    loadMessages(detected).then(setMessages)
  }, [])

  const changeLanguage = async (code) => {
    setLang(code)
    saveLanguage(code)
    const msgs = await loadMessages(code)
    setMessages(msgs)
  }

  return (
    <LanguageContext.Provider value={{ lang, messages, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}