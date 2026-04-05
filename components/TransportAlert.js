'use client'
import { getTransportAlert, getUberLink, getBoltLink } from '@/lib/transport'

export default function TransportAlert({ departureTime, airportCode, travelTimeMinutes = 30 }) {
  if (!departureTime) return null

  const alert = getTransportAlert(departureTime, travelTimeMinutes)
  if (!alert) return null

  const bgColor = alert.urgency === 'high' ? 'bg-[#faeeda] border-[#f5a623]' :
                  alert.urgency === 'medium' ? 'bg-[#e6f1fb] border-[#378add]' :
                  'bg-[#e1f5ee] border-[#5dcaa5]'

  const textColor = alert.urgency === 'high' ? 'text-[#854f0b]' :
                    alert.urgency === 'medium' ? 'text-[#185fa5]' :
                    'text-[#0f6e56]'

  return (
    <div className={'rounded-2xl border p-4 mb-4 ' + bgColor}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{alert.emoji}</span>
        <div className="flex-1">
          <p className={'font-medium text-sm mb-1 ' + textColor}>{alert.title}</p>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">{alert.message}</p>
          <div className="flex gap-2">
            <a href={getUberLink(airportCode)} target="_blank"
              className="flex-1 py-2.5 rounded-xl bg-[#0f0e17] text-[#f5efe3] text-xs font-medium text-center">
              🚙 Uber
            </a>
            <a href={getBoltLink()} target="_blank"
              className="flex-1 py-2.5 rounded-xl bg-[#34d186] text-white text-xs font-medium text-center">
              ⚡ Bolt
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}