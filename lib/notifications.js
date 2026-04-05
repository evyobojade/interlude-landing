// Push notification utilities for Interlüde

export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) return false
  if (Notification.permission === 'granted') return true
  if (Notification.permission === 'denied') return false
  const permission = await Notification.requestPermission()
  return permission === 'granted'
}

export const sendLocalNotification = (title, body, icon = '/icon-192.png') => {
  if (!('Notification' in window)) return
  if (Notification.permission !== 'granted') return
  new Notification(title, { body, icon })
}

export const scheduleReturnReminder = (departureTime, airportName) => {
  const departure = new Date(departureTime)
  const now = new Date()
  const reminderTime = new Date(departure.getTime() - 45 * 60 * 1000) // 45 mins before
  const msUntilReminder = reminderTime.getTime() - now.getTime()

  if (msUntilReminder <= 0) return

  setTimeout(() => {
    sendLocalNotification(
      'Time to head back! ✈️',
      'Your flight from ' + airportName + ' departs in 45 minutes. Start making your way to the gate.',
    )
  }, msUntilReminder)

  return msUntilReminder
}

export const sendGateChangeAlert = (flightNumber, oldGate, newGate) => {
  sendLocalNotification(
    'Gate change alert! 🔔',
    'Flight ' + flightNumber + ' has moved from gate ' + oldGate + ' to gate ' + newGate + '. Please proceed to the new gate.',
  )
}

export const sendMatchNotification = (travelerName, airport) => {
  sendLocalNotification(
    'New match at ' + airport + '! 👋',
    travelerName + ' is also at your airport and wants to connect.',
  )
}