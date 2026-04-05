'use client'
import { useState, useEffect } from 'react'
import { getCurrencyForAirport, FINTECH_PARTNERS } from '@/lib/currency'

const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  { code: 'ETB', symbol: 'Br', name: 'Ethiopian Birr' },
  { code: 'UGX', symbol: 'USh', name: 'Ugandan Shilling' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
  { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal' },
  { code: 'QAR', symbol: 'QR', name: 'Qatari Riyal' },
  { code: 'KWD', symbol: 'KD', name: 'Kuwaiti Dinar' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
  { code: 'COP', symbol: '$', name: 'Colombian Peso' },
  { code: 'TRY', symbol: '₺', name: 'Turkish Lira' },
  { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound' },
  { code: 'MAD', symbol: 'MAD', name: 'Moroccan Dirham' },
  { code: 'XOF', symbol: 'CFA', name: 'West African Franc' },
  { code: 'XAF', symbol: 'FCFA', name: 'Central African Franc' },
  { code: 'JMD', symbol: 'J$', name: 'Jamaican Dollar' },
  { code: 'TTD', symbol: 'TT$', name: 'Trinidad Dollar' },
]

export default function CurrencyCard({ airportCode, userCurrencyCode }) {
  const [rate, setRate] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showFintech, setShowFintech] = useState(false)
  const [amount, setAmount] = useState('')
  const [converted, setConverted] = useState(null)
  const [selectedCurrency, setSelectedCurrency] = useState(userCurrencyCode || 'USD')

  const airportCurrency = getCurrencyForAirport(airportCode)
  const userCurrency = CURRENCIES.find(c => c.code === selectedCurrency) || CURRENCIES[0]
  const sameCountry = airportCurrency.code === selectedCurrency

  useEffect(() => {
    if (userCurrencyCode) setSelectedCurrency(userCurrencyCode)
  }, [userCurrencyCode])

  useEffect(() => {
    fetchRate()
  }, [selectedCurrency, airportCode])

  useEffect(() => {
    if (rate && amount) {
      setConverted((parseFloat(amount) * rate).toFixed(2))
    } else {
      setConverted(null)
    }
  }, [amount, rate])

  const fetchRate = async () => {
    if (airportCurrency.code === selectedCurrency) { setRate(1); return }
    setLoading(true)
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/' + selectedCurrency)
      const data = await res.json()
      if (data.rates && data.rates[airportCurrency.code]) {
        setRate(data.rates[airportCurrency.code])
      }
    } catch (err) { console.error(err) }
    setLoading(false)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">💱</span>
        <p className="font-medium text-gray-800 text-sm">Currency at this airport</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-2">Your currency</p>
          <select
            value={selectedCurrency}
            onChange={e => { setSelectedCurrency(e.target.value); setAmount('') }}
            className="w-full text-sm font-medium text-gray-800 bg-transparent outline-none cursor-pointer">
            {CURRENCIES.map(c => (
              <option key={c.code} value={c.code}>{c.symbol} {c.code} — {c.name}</option>
            ))}
          </select>
        </div>
        <div className="bg-[#f5efe3] rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-1">Local currency</p>
          <p className="font-medium text-gray-800">{airportCurrency.symbol} {airportCurrency.code}</p>
          <p className="text-xs text-gray-500">{airportCurrency.name}</p>
        </div>
      </div>

      {!sameCountry && (
        <>
          {loading ? (
            <div className="bg-[rgba(200,169,110,0.08)] rounded-xl p-3 mb-3 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#c8a96e] border-t-transparent animate-spin" />
              <p className="text-xs text-gray-400">Fetching live rate...</p>
            </div>
          ) : rate && (
            <div className="bg-[rgba(200,169,110,0.08)] rounded-xl p-3 mb-3">
              <p className="text-xs text-gray-500 mb-1">Live exchange rate</p>
              <p className="font-medium text-gray-800 text-sm">
                1 {userCurrency.symbol} = {airportCurrency.symbol} {rate.toFixed(4)}
              </p>
              <p className="text-xs text-gray-400 mt-1">Rate updates daily</p>
            </div>
          )}

          {rate && (
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-2">💰 Quick converter</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">{userCurrency.symbol}</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full border border-gray-200 rounded-xl pl-8 pr-3 py-3 text-sm outline-none focus:border-[#c8a96e] transition-colors"
                  />
                </div>
                <span className="text-gray-400 text-sm">→</span>
                <div className="flex-1 bg-[#f5efe3] rounded-xl px-3 py-3">
                  <p className="text-sm font-medium text-gray-800">
                    {converted ? airportCurrency.symbol + ' ' + converted : airportCurrency.symbol + ' 0.00'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {sameCountry && (
        <div className="bg-[#e1f5ee] rounded-xl p-3 mb-3">
          <p className="text-xs text-[#0f6e56] font-medium">✅ Same currency — no conversion needed!</p>
          <p className="text-xs text-gray-500 mt-1">You are already using {airportCurrency.name} at this airport.</p>
        </div>
      )}

      <div className="mb-3">
        <p className="text-xs text-gray-500 mb-2">Cards accepted here</p>
        <div className="flex flex-wrap gap-2">
          {airportCurrency.cards?.map(card => (
            <span key={card} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{card}</span>
          ))}
        </div>
      </div>

      <button onClick={() => setShowFintech(!showFintech)}
        className="w-full py-2.5 rounded-xl border border-[rgba(200,169,110,0.3)] text-[#8b6b3a] text-xs font-medium">
        💡 Avoid international fees — see our partners
      </button>

      {showFintech && (
        <div className="mt-3 space-y-2">
          {FINTECH_PARTNERS.map(partner => (
            <a key={partner.name} href={partner.url} target="_blank"
              className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 hover:bg-[#f5efe3] transition-colors">
              <span className="text-xl">{partner.emoji}</span>
              <div>
                <p className="font-medium text-gray-800 text-xs">{partner.name}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{partner.description}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}