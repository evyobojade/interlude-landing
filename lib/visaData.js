export const VISA_DATA = {
  'UAE': {
    name: 'United Arab Emirates',
    arrival: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival — instant',
      duration: '30 days',
      payment: 'Free for eligible passports',
      link: 'https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae',
      notes: 'Indian, South African, Kenyan passports get free visa on arrival'
    },
    required: {
      cost: 90,
      currency: 'USD',
      processing: '3-5 business days',
      duration: '30 days',
      payment: 'Credit/debit card online',
      link: 'https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae',
      notes: 'Apply online before travel. Nigerian passport holders must apply in advance.'
    }
  },
  'UK': {
    name: 'United Kingdom',
    arrival: {
      cost: 10,
      currency: 'GBP',
      processing: 'Apply online before travel',
      duration: '2 years multiple entry',
      payment: 'Credit/debit card online',
      link: 'https://www.gov.uk/standard-visitor/apply-standard-visitor-visa',
      notes: 'ETA required for many nationalities from 2024'
    },
    required: {
      cost: 115,
      currency: 'GBP',
      processing: '3 weeks',
      duration: '6 months',
      payment: 'Credit/debit card online',
      link: 'https://www.gov.uk/standard-visitor/apply-standard-visitor-visa',
      notes: 'Apply at least 3 weeks before travel. Biometrics required.'
    }
  },
  'Turkey': {
    name: 'Turkey',
    arrival: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival — instant',
      duration: '30-90 days',
      payment: 'Free or eVisa online',
      link: 'https://www.evisa.gov.tr/en/',
      notes: 'eVisa available online for $51. Easier than on arrival.'
    },
    required: {
      cost: 51,
      currency: 'USD',
      processing: '24 hours online',
      duration: '30 days',
      payment: 'Credit/debit card online',
      link: 'https://www.evisa.gov.tr/en/',
      notes: 'Apply online at evisa.gov.tr — quick and easy'
    }
  },
  'Thailand': {
    name: 'Thailand',
    arrival: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival — 30 mins',
      duration: '30 days',
      payment: 'Free for eligible passports',
      link: 'https://www.thaievisa.go.th/',
      notes: 'Visa exemption for many nationalities. eVisa available.'
    },
    required: {
      cost: 40,
      currency: 'USD',
      processing: '3-5 business days',
      duration: '60 days',
      payment: 'Cash at embassy',
      link: 'https://www.thaievisa.go.th/',
      notes: 'Apply at Thai embassy or online eVisa portal'
    }
  },
  'Kenya': {
    name: 'Kenya',
    arrival: {
      cost: 50,
      currency: 'USD',
      processing: 'Apply online — 3 days',
      duration: '90 days',
      payment: 'Credit/debit card online',
      link: 'https://evisa.immigration.go.ke/',
      notes: 'Kenya now uses eVisa only — apply before travel at evisa.immigration.go.ke'
    },
    required: {
      cost: 50,
      currency: 'USD',
      processing: '3 business days',
      duration: '90 days',
      payment: 'Credit/debit card online',
      link: 'https://evisa.immigration.go.ke/',
      notes: 'Apply at evisa.immigration.go.ke — all nationalities use eVisa'
    }
  },
  'Qatar': {
    name: 'Qatar',
    free: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival — instant',
      duration: '30 days',
      payment: 'Free',
      link: 'https://www.moi.gov.qa/portal/page?_pageid=54,1&_dad=portal&_schema=PORTAL',
      notes: 'Visa free for Nigerian, Ghanaian and many African passports'
    },
    required: {
      cost: 30,
      currency: 'USD',
      processing: '72 hours online',
      duration: '30 days',
      payment: 'Credit/debit card online',
      link: 'https://www.moi.gov.qa/portal/page?_pageid=54,1&_dad=portal&_schema=PORTAL',
      notes: 'Apply online through Qatar MOI portal'
    }
  },
  'Singapore': {
    name: 'Singapore',
    arrival: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival — instant',
      duration: '30 days',
      payment: 'Free',
      link: 'https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa-requirements',
      notes: 'Visa free for Indian, South African passports'
    },
    required: {
      cost: 30,
      currency: 'SGD',
      processing: '3-5 business days',
      duration: '30 days',
      payment: 'Credit/debit card online',
      link: 'https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa-requirements',
      notes: 'Apply through ICA website or Singapore embassy'
    }
  },
  'South Korea': {
    name: 'South Korea',
    arrival: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival — instant',
      duration: '30-90 days',
      payment: 'Free',
      link: 'https://www.visa.go.kr/openPage.do?MENU_ID=10101',
      notes: 'K-ETA required for some nationalities — apply online'
    },
    required: {
      cost: 40,
      currency: 'USD',
      processing: '5-7 business days',
      duration: '90 days',
      payment: 'Cash at embassy',
      link: 'https://www.visa.go.kr/openPage.do?MENU_ID=10101',
      notes: 'Apply at Korean embassy with supporting documents'
    }
  },
  'Japan': {
    name: 'Japan',
    arrival: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival',
      duration: '90 days',
      payment: 'Free',
      link: 'https://www.mofa.go.jp/j_info/visit/visa/index.html',
      notes: 'Visa free for many nationalities'
    },
    required: {
      cost: 30,
      currency: 'USD',
      processing: '5-7 business days',
      duration: '90 days',
      payment: 'Cash at embassy',
      link: 'https://www.mofa.go.jp/j_info/visit/visa/index.html',
      notes: 'Apply at Japanese embassy with supporting documents'
    }
  },
  'France': {
    name: 'France / Schengen',
    required: {
      cost: 80,
      currency: 'EUR',
      processing: '15 days',
      duration: '90 days',
      payment: 'Cash or card at embassy',
      link: 'https://france-visas.gouv.fr/en_US/web/france-visas/',
      notes: 'Schengen visa — covers 26 European countries. Apply 3 months in advance.'
    }
  },
  'Germany': {
    name: 'Germany / Schengen',
    required: {
      cost: 80,
      currency: 'EUR',
      processing: '15 days',
      duration: '90 days',
      payment: 'Cash or card at embassy',
      link: 'https://www.auswaertiges-amt.de/en/visa-service',
      notes: 'Schengen visa — covers 26 European countries. Apply at German embassy.'
    }
  },
  'Netherlands': {
    name: 'Netherlands / Schengen',
    required: {
      cost: 80,
      currency: 'EUR',
      processing: '15 days',
      duration: '90 days',
      payment: 'Cash or card at embassy',
      link: 'https://www.netherlandsworldwide.nl/visa-the-netherlands',
      notes: 'Schengen visa — covers 26 European countries.'
    }
  },
  'USA': {
    name: 'United States',
    arrival: {
      cost: 21,
      currency: 'USD',
      processing: '72 hours online',
      duration: '2 years',
      payment: 'Credit/debit card online',
      link: 'https://esta.cbp.dhs.gov/',
      notes: 'ESTA required for Visa Waiver Program countries — apply at esta.cbp.dhs.gov'
    },
    required: {
      cost: 185,
      currency: 'USD',
      processing: '2-4 weeks + interview',
      duration: '10 years',
      payment: 'Credit/debit card online',
      link: 'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html',
      notes: 'B1/B2 visitor visa. Interview required at US embassy.'
    }
  },
  'Canada': {
    name: 'Canada',
    arrival: {
      cost: 7,
      currency: 'CAD',
      processing: '72 hours online',
      duration: '5 years',
      payment: 'Credit/debit card online',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html',
      notes: 'eTA required for visa-exempt nationals flying to Canada'
    },
    required: {
      cost: 100,
      currency: 'CAD',
      processing: '2-4 weeks',
      duration: '10 years',
      payment: 'Credit/debit card online',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/visitor-visa.html',
      notes: 'Apply online through IRCC portal. Biometrics may be required.'
    }
  },
  'Australia': {
    name: 'Australia',
    arrival: {
      cost: 20,
      currency: 'AUD',
      processing: 'Instant online',
      duration: '1 year',
      payment: 'Credit/debit card online',
      link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601',
      notes: 'ETA available for eligible passports — apply on Australian ETA app'
    },
    required: {
      cost: 145,
      currency: 'AUD',
      processing: '20-25 days',
      duration: '12 months',
      payment: 'Credit/debit card online',
      link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600',
      notes: 'Visitor visa subclass 600. Apply online through ImmiAccount.'
    }
  },
  'Malaysia': {
    name: 'Malaysia',
    arrival: {
      cost: 0,
      currency: 'USD',
      processing: 'On arrival',
      duration: '30 days',
      payment: 'Free',
      link: 'https://www.imi.gov.my/index.php/en/',
      notes: 'eNTRI available for Indian nationals — apply online before travel'
    },
    required: {
      cost: 0,
      currency: 'USD',
      processing: '1-3 days online',
      duration: '30 days',
      payment: 'Free eVisa',
      link: 'https://evisa.imi.gov.my/',
      notes: 'Free eVisa available for many nationalities at evisa.imi.gov.my'
    }
  },
  'South Africa': {
    name: 'South Africa',
    required: {
      cost: 0,
      currency: 'USD',
      processing: '5-10 business days',
      duration: '90 days',
      payment: 'Free — apply at embassy',
      link: 'https://www.dha.gov.za/index.php/immigration-services/apply-for-a-visa',
      notes: 'Apply at South African embassy. No fee but appointment required.'
    }
  },
  'Ghana': {
    name: 'Ghana',
    free: {
      cost: 0,
      processing: 'On arrival',
      duration: '90 days',
      payment: 'Free',
      link: 'https://www.ghana.gov.gh/',
      notes: 'Free for Nigerian, ECOWAS passport holders'
    },
    required: {
      cost: 60,
      currency: 'USD',
      processing: '3-5 business days',
      duration: '60 days',
      payment: 'Cash or card at embassy',
      link: 'https://www.mfa.gov.gh/visa-on-arrival/',
      notes: 'Visa on arrival available at Accra airport for some nationalities'
    }
  },
  'Nigeria': {
    name: 'Nigeria',
    free: {
      cost: 0,
      processing: 'On arrival',
      duration: '90 days',
      payment: 'Free',
      link: 'https://immigration.gov.ng/',
      notes: 'Free for ECOWAS passport holders'
    },
    required: {
      cost: 100,
      currency: 'USD',
      processing: '3-5 business days',
      duration: '30 days',
      payment: 'Online payment',
      link: 'https://portal.immigration.gov.ng/',
      notes: 'Apply online at portal.immigration.gov.ng'
    }
  }
}

export function getVisaInfo(passportCode, countryName, status) {
  const countryData = VISA_DATA[countryName]
  if (!countryData) return null
  return countryData[status] || countryData['required'] || null
}
