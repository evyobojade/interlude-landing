const AVIATIONSTACK_KEY = process.env.NEXT_PUBLIC_AVIATIONSTACK_API_KEY

export async function verifyFlight(flightNumber) {
  try {
    const res = await fetch(
      `http://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_KEY}&flight_iata=${flightNumber}&limit=1`
    )
    const data = await res.json()
    if (data.data && data.data.length > 0) {
      const flight = data.data[0]
      return {
        valid: true,
        airline: flight.airline?.name,
        departure: flight.departure?.airport,
        arrival: flight.arrival?.airport,
        status: flight.flight_status,
        departureTime: flight.departure?.scheduled,
        arrivalTime: flight.arrival?.scheduled,
        gate: flight.departure?.gate,
        terminal: flight.departure?.terminal
      }
    }
    return { valid: false }
  } catch (e) {
    return { valid: false }
  }
}

export async function getFlightStatus(flightNumber) {
  try {
    const res = await fetch(
      `http://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_KEY}&flight_iata=${flightNumber}&limit=1`
    )
    const data = await res.json()
    if (data.data && data.data.length > 0) {
      const flight = data.data[0]
      return {
        status: flight.flight_status,
        delayed: flight.departure?.delay > 0,
        delayMinutes: flight.departure?.delay || 0,
        gate: flight.departure?.gate,
        terminal: flight.departure?.terminal,
        estimatedDeparture: flight.departure?.estimated,
        estimatedArrival: flight.arrival?.estimated
      }
    }
    return null
  } catch (e) {
    return null
  }
}

export function getMinConnectionTime(airportCode) {
  const minTimes = {
    'DXB': 90, 'LHR': 75, 'JFK': 90, 'LAX': 60, 'SIN': 60,
    'HND': 70, 'ICN': 60, 'CDG': 75, 'AMS': 50, 'FRA': 45,
    'YYZ': 75, 'YVR': 60, 'LOS': 60, 'ACC': 60, 'NBO': 60,
    'ADD': 60, 'BOM': 75, 'DEL': 75, 'HKG': 60, 'BKK': 60
  }
  return minTimes[airportCode] || 60
}

export function isLayoverSafe(layoverMinutes, airportCode) {
  const minTime = getMinConnectionTime(airportCode)
  const buffer = 30
  return {
    safe: layoverMinutes >= minTime + buffer,
    minimumTime: minTime,
    recommended: minTime + buffer,
    message: layoverMinutes >= minTime + buffer
      ? `Your ${layoverMinutes} min layover is safe at ${airportCode}. Minimum connection time is ${minTime} mins.`
      : `Your ${layoverMinutes} min layover is tight at ${airportCode}. Minimum connection time is ${minTime} mins. We recommend at least ${minTime + buffer} mins.`
  }
}

export async function getFlightByCallsign(flightNumber) {
  try {
    const callsign = flightNumber.replace(/\s/g, '').toUpperCase()
    const username = process.env.NEXT_PUBLIC_OPENSKY_USERNAME
    const password = process.env.NEXT_PUBLIC_OPENSKY_PASSWORD
    const credentials = btoa(username + ':' + password)
    const res = await fetch(
      `https://opensky-network.org/api/flights/aircraft?icao24=${callsign}&begin=${Math.floor(Date.now()/1000) - 7200}&end=${Math.floor(Date.now()/1000)}`,
      { headers: { 'Authorization': 'Basic ' + credentials } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data?.[0] || null
  } catch (e) {
    return null
  }
}

export async function checkGateChange(flightNumber, lastKnownGate) {
  const status = await getFlightStatus(flightNumber)
  if (!status) return null
  if (status.gate && status.gate !== lastKnownGate) {
    return {
      changed: true,
      oldGate: lastKnownGate,
      newGate: status.gate,
      terminal: status.terminal
    }
  }
  return { changed: false }
}
