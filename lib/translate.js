import { supabase } from '@/lib/supabase'

const SUPPORTED_LANGS = ['fr','es','pt','de','ar','hi','ko','ja','zh','tr','sw','yo','ig','tw']

export async function getTranslatedAirport(airportCode, lang) {
  if (lang === 'en') return null
  if (!SUPPORTED_LANGS.includes(lang)) return null

  try {
    const { data: airport } = await supabase
      .from('airports')
      .select('translations')
      .eq('code', airportCode)
      .single()

    if (airport?.translations?.[lang]) {
      console.log('Serving cached translation for', airportCode, lang)
      return airport.translations[lang]
    }

    const { data: fullAirport } = await supabase
      .from('airports')
      .select('history, fun_facts, recent_additions, outings, airside_options, unique_experiences, top_restaurants, top_shops')
      .eq('code', airportCode)
      .single()

    if (!fullAirport) return null

    console.log('Generating new translation for', airportCode, lang)
    const translation = await translateAirportContent(fullAirport, lang)
    console.log('Translation result:', translation)

    if (translation) {
      const existing = airport?.translations || {}
      await supabase
        .from('airports')
        .update({ translations: { ...existing, [lang]: translation } })
        .eq('code', airportCode)
    }

    return translation
  } catch (err) {
    console.error('Translation error:', err)
    return null
  }
}

async function translateAirportContent(airport, lang) {
  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lang,
        content: {
          history: airport.history,
          fun_facts: airport.fun_facts,
          recent_additions: airport.recent_additions,
          outings: airport.outings?.map(o => ({
            name: o.name,
            description: o.description,
            duration: o.duration,
            travel_time: o.travel_time,
            emoji: o.emoji,
            visa_needed: o.visa_needed
          })),
          airside_options: airport.airside_options?.map(a => ({
            name: a.name,
            description: a.description,
            duration: a.duration,
            emoji: a.emoji
          })),
          unique_experiences: airport.unique_experiences?.map(u => ({
            name: u.name,
            description: u.description,
            location: u.location,
            free: u.free,
            emoji: u.emoji
          })),
          top_restaurants: airport.top_restaurants?.map(r => ({
            name: r.name,
            type: r.type,
            must_try: r.must_try,
            location: r.location,
            price: r.price
          })),
          top_shops: airport.top_shops?.map(s => ({
            name: s.name,
            type: s.type,
            known_for: s.known_for,
            location: s.location
          }))
        }
      })
    })
    const data = await response.json()
    return data.translation
  } catch (err) {
    console.error('Claude translation error:', err)
    return null
  }
}
