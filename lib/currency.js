// Currency data for Interlüde
export const COUNTRY_CURRENCIES = {
  'Nigeria': { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  'Ghana': { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi' },
  'Kenya': { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  'South Africa': { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  'Ethiopia': { code: 'ETB', symbol: 'Br', name: 'Ethiopian Birr' },
  'Tanzania': { code: 'TZS', symbol: 'TSh', name: 'Tanzanian Shilling' },
  'Uganda': { code: 'UGX', symbol: 'USh', name: 'Ugandan Shilling' },
  'Cameroon': { code: 'XAF', symbol: 'FCFA', name: 'Central African Franc' },
  'Senegal': { code: 'XOF', symbol: 'CFA', name: 'West African Franc' },
  'Egypt': { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound' },
  'Morocco': { code: 'MAD', symbol: 'MAD', name: 'Moroccan Dirham' },
  'India': { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  'Philippines': { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  'Bangladesh': { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
  'Pakistan': { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee' },
  'Sri Lanka': { code: 'LKR', symbol: 'Rs', name: 'Sri Lankan Rupee' },
  'Vietnam': { code: 'VND', symbol: '₫', name: 'Vietnamese Dong' },
  'Indonesia': { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
  'Malaysia': { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  'Thailand': { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  'China': { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  'Japan': { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  'South Korea': { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
  'UAE': { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
  'Saudi Arabia': { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal' },
  'Qatar': { code: 'QAR', symbol: 'QR', name: 'Qatari Riyal' },
  'Kuwait': { code: 'KWD', symbol: 'KD', name: 'Kuwaiti Dinar' },
  'Turkey': { code: 'TRY', symbol: '₺', name: 'Turkish Lira' },
  'Brazil': { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  'Mexico': { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
  'Colombia': { code: 'COP', symbol: '$', name: 'Colombian Peso' },
  'Canada': { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  'USA': { code: 'USD', symbol: '$', name: 'US Dollar' },
  'UK': { code: 'GBP', symbol: '£', name: 'British Pound' },
  'France': { code: 'EUR', symbol: '€', name: 'Euro' },
  'Germany': { code: 'EUR', symbol: '€', name: 'Euro' },
  'Netherlands': { code: 'EUR', symbol: '€', name: 'Euro' },
  'Spain': { code: 'EUR', symbol: '€', name: 'Euro' },
  'Italy': { code: 'EUR', symbol: '€', name: 'Euro' },
  'Portugal': { code: 'EUR', symbol: '€', name: 'Euro' },
  'Singapore': { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  'Australia': { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  'New Zealand': { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
  'Jamaica': { code: 'JMD', symbol: 'J$', name: 'Jamaican Dollar' },
  'Trinidad': { code: 'TTD', symbol: 'TT$', name: 'Trinidad Dollar' },
}

export const AIRPORT_CURRENCIES = {
  'LHR': { code: 'GBP', symbol: '£', name: 'British Pound', cards: ['Visa', 'Mastercard', 'Amex', 'Contactless'] },
  'DXB': { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', cards: ['Visa', 'Mastercard', 'Amex', 'Apple Pay'] },
  'CDG': { code: 'EUR', symbol: '€', name: 'Euro', cards: ['Visa', 'Mastercard', 'Amex', 'Contactless'] },
  'FRA': { code: 'EUR', symbol: '€', name: 'Euro', cards: ['Visa', 'Mastercard', 'Amex', 'Contactless'] },
  'AMS': { code: 'EUR', symbol: '€', name: 'Euro', cards: ['Visa', 'Mastercard', 'iDEAL', 'Contactless'] },
  'SIN': { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', cards: ['Visa', 'Mastercard', 'Amex', 'NETS'] },
  'JFK': { code: 'USD', symbol: '$', name: 'US Dollar', cards: ['Visa', 'Mastercard', 'Amex', 'Apple Pay'] },
  'LAX': { code: 'USD', symbol: '$', name: 'US Dollar', cards: ['Visa', 'Mastercard', 'Amex', 'Apple Pay'] },
  'YYZ': { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', cards: ['Visa', 'Mastercard', 'Amex', 'Interac'] },
  'YVR': { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', cards: ['Visa', 'Mastercard', 'Amex', 'Interac'] },
  'SYD': { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', cards: ['Visa', 'Mastercard', 'Amex', 'EFTPOS'] },
  'DOH': { code: 'QAR', symbol: 'QR', name: 'Qatari Riyal', cards: ['Visa', 'Mastercard', 'Amex'] },
  'IST': { code: 'TRY', symbol: '₺', name: 'Turkish Lira', cards: ['Visa', 'Mastercard', 'Troy'] },
  'NRT': { code: 'JPY', symbol: '¥', name: 'Japanese Yen', cards: ['Visa', 'Mastercard', 'JCB', 'Suica'] },
  'HKG': { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', cards: ['Visa', 'Mastercard', 'Octopus'] },
  'ICN': { code: 'KRW', symbol: '₩', name: 'South Korean Won', cards: ['Visa', 'Mastercard', 'T-Money'] },
  'BOM': { code: 'INR', symbol: '₹', name: 'Indian Rupee', cards: ['Visa', 'Mastercard', 'RuPay', 'UPI'] },
  'DEL': { code: 'INR', symbol: '₹', name: 'Indian Rupee', cards: ['Visa', 'Mastercard', 'RuPay', 'UPI'] },
  'GRU': { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', cards: ['Visa', 'Mastercard', 'Elo'] },
  'LOS': { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', cards: ['Visa', 'Mastercard', 'Verve'] },
  'ACC': { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi', cards: ['Visa', 'Mastercard'] },
  'NBO': { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling', cards: ['Visa', 'Mastercard', 'M-Pesa'] },
}

export const FINTECH_PARTNERS = [
  {
    name: 'Misan by Bambo',
    description: 'Nigerian fintech with virtual cards for international travel. Spend globally at real rates with no hidden charges.',
    url: 'https://bambo.io',
    emoji: '🇳🇬'
  },
  {
    name: 'Wise',
    description: 'Multi-currency account. Hold, send and spend in 40+ currencies at the real exchange rate.',
    url: 'https://wise.com',
    emoji: '💙'
  },
  {
    name: 'Revolut',
    description: 'Spend abroad with no hidden fees. Exchange at the real rate and get instant notifications.',
    url: 'https://revolut.com',
    emoji: '🖤'
  },
  {
    name: 'Chipper Cash',
    description: 'Send money across Africa instantly. Perfect for African diaspora travelers.',
    url: 'https://chippercash.com',
    emoji: '🌍'
  },
]

export const getCurrencyForAirport = (airportCode) => {
  return AIRPORT_CURRENCIES[airportCode] || { code: 'USD', symbol: '$', name: 'US Dollar', cards: ['Visa', 'Mastercard'] }
}

export const getCurrencyForCountry = (country) => {
  return COUNTRY_CURRENCIES[country] || { code: 'USD', symbol: '$', name: 'US Dollar' }
}