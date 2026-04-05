const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'zh', name: '中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪', dir: 'ltr' },
  { code: 'yo', name: 'Yorùbá', flag: '🇳🇬', dir: 'ltr' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬', dir: 'ltr' },
  { code: 'tw', name: 'Twi', flag: '🇬🇭', dir: 'ltr' },
]

export function detectLanguage() {
  // Check saved preference first
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('interlude_language')
    if (saved && SUPPORTED_LANGUAGES.find(l => l.code === saved)) {
      return saved
    }
    // Auto detect from browser
    const browserLang = navigator.language?.split('-')[0]
    if (browserLang && SUPPORTED_LANGUAGES.find(l => l.code === browserLang)) {
      return browserLang
    }
  }
  return 'en'
}

export function saveLanguage(code) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('interlude_language', code)
  }
}

export function getLanguages() {
  return SUPPORTED_LANGUAGES
}

export async function loadMessages(lang) {
  try {
    const messages = await import(`@/i18n/messages/${lang}.json`)
    return messages.default
  } catch {
    const messages = await import('@/i18n/messages/en.json')
    return messages.default
  }
}

export function t(messages, key) {
  if (!messages) return key
  const keys = key.split('.')
  let value = messages
  for (const k of keys) {
    value = value?.[k]
    if (!value) return key
  }
  return value || key
}

export { SUPPORTED_LANGUAGES }
