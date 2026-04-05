// Smart transport intelligence for Interlüde

export const RUSH_HOURS = {
  morning: { start: 7, end: 9 },
  evening: { start: 16, end: 19 }
}

export const isRushHour = (time) => {
  const hour = new Date(time).getHours()
  return (hour >= RUSH_HOURS.morning.start && hour <= RUSH_HOURS.morning.end) ||
         (hour >= RUSH_HOURS.evening.start && hour <= RUSH_HOURS.evening.end)
}

export const getTransportAlert = (departureTime, travelTimeMinutes = 30) => {
  if (!departureTime) return null

  const departure = new Date(departureTime)
  const returnTime = new Date(departure.getTime() - (travelTimeMinutes + 120) * 60 * 1000)
  const returnHour = returnTime.getHours()

  const isRush = isRushHour(returnTime)
  const isLateNight = returnHour >= 23 || returnHour < 5
  const isSurge = isRush

  if (isLateNight) {
    return {
      type: 'info',
      emoji: '🌙',
      title: 'Late night travel',
      message: 'Public transport may be limited at this time. We recommend booking an Uber or Bolt in advance.',
      action: 'Book Uber early',
      urgency: 'medium'
    }
  }

  if (isSurge) {
    return {
      type: 'warning',
      emoji: '⚠️',
      title: 'Rush hour alert',
      message: 'Your return journey falls during rush hour. Uber and Bolt prices may surge. Book early or consider local transport.',
      action: 'Book Uber now',
      urgency: 'high'
    }
  }

  return {
    type: 'good',
    emoji: '✅',
    title: 'Good time to travel',
    message: 'No rush hour expected for your return journey. Prices should be normal.',
    action: null,
    urgency: 'low'
  }
}

export const getUberLink = (airportCode) => {
  return 'https://m.uber.com/looking?pickup=my_location'
}

export const getBoltLink = () => {
  return 'https://bolt.eu'
}