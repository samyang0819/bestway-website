'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Users, Clock, TrendingUp } from 'lucide-react'

interface ScarcityNotification {
  id: string
  type: 'approval' | 'booking' | 'application'
  message: string
  name: string
  timeAgo: string
}

const mockNotifications: ScarcityNotification[] = [
  { id: '1', type: 'approval', message: 'Sarah K. from Canada just got approved! 🎉', name: 'Sarah K.', timeAgo: '5 min ago' },
  { id: '2', type: 'booking', message: 'Michael R. just booked a consultation 📅', name: 'Michael R.', timeAgo: '12 min ago' },
  { id: '3', type: 'application', message: 'Jennifer T. submitted her application ✅', name: 'Jennifer T.', timeAgo: '23 min ago' },
  { id: '4', type: 'approval', message: 'Rahul P. received his visa approval! 🎊', name: 'Rahul P.', timeAgo: '31 min ago' },
  { id: '5', type: 'booking', message: 'Aisha M. booked an expert consultation 💼', name: 'Aisha M.', timeAgo: '45 min ago' },
]

interface ConsultationSlot {
  day: string
  slots: number
  available: number
  percentage: number
}

export function ScarcityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/50 hover:border-red-400/70 transition-all"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-2 h-2 rounded-full bg-red-500"
      />
      <span className="text-xs font-bold text-red-300 uppercase tracking-wide">Limited Slots Available</span>
    </motion.div>
  )
}

export function SlotsAvailableCard() {
  const slots: ConsultationSlot[] = [
    { day: 'Today', slots: 3, available: 1, percentage: 33 },
    { day: 'Tomorrow', slots: 5, available: 2, percentage: 40 },
    { day: 'Thursday', slots: 4, available: 0, percentage: 0 },
    { day: 'Friday', slots: 6, available: 3, percentage: 50 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-amber-400" />
        <h3 className="font-bold text-white">Expert Consultation Availability</h3>
      </div>

      {slots.map((slot, i) => (
        <motion.div
          key={slot.day}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between text-sm">
            <span className="text-slate-300 font-medium">{slot.day}</span>
            <span className={`font-bold ${slot.available === 0 ? 'text-red-400' : 'text-amber-400'}`}>
              {slot.available} of {slot.slots} available
            </span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${slot.percentage}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`h-full rounded-full ${
                slot.available === 0
                  ? 'bg-gradient-to-r from-red-600 to-red-500'
                  : 'bg-gradient-to-r from-amber-500 to-amber-400'
              }`}
            />
          </div>
        </motion.div>
      ))}

      <div className="pt-2 text-xs text-slate-400 italic">
        ℹ️ Slots fill up quickly. Book your free consultation today!
      </div>
    </div>
  )
}

export function RecentActivityFeed() {
  const [notifications, setNotifications] = useState<ScarcityNotification[]>(mockNotifications.slice(0, 3))
  const [displayIndex, setDisplayIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      setDisplayIndex((prev) => (prev + 1) % mockNotifications.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isMounted])

  useEffect(() => {
    setNotifications((prev) => [
      mockNotifications[(displayIndex + prev.length - 1) % mockNotifications.length],
      ...prev.slice(0, -1),
    ])
  }, [displayIndex])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-cyan-400" />
        <h3 className="font-bold text-white">Recent Activity</h3>
      </div>

      <AnimatePresence mode="wait">
        {notifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:border-cyan-500/50 transition-all"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6 }}
              className={`text-xl flex-shrink-0 ${
                notif.type === 'approval'
                  ? '🎉'
                  : notif.type === 'booking'
                    ? '📅'
                    : '✅'
              }`}
            />
            <div className="min-w-0">
              <p className="text-sm text-slate-300 line-clamp-2">{notif.message}</p>
              <p className="text-xs text-slate-500 mt-1">{notif.timeAgo}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export function UrgencyCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 2,
    minutes: 34,
    seconds: 12,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--

        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      key={`${label}-${value}`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      className="text-center"
    >
      <div className="text-2xl font-bold text-amber-400">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-slate-400 uppercase tracking-wide">{label}</div>
    </motion.div>
  )

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-orange-400 animate-pulse" />
        <h3 className="font-bold text-white">Limited Offer</h3>
      </div>

      <div className="p-4 rounded-lg bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/50">
        <p className="text-sm text-orange-300 font-semibold mb-4">50% off first consultation - Offer expires in:</p>

        <div className="flex justify-around gap-2 mb-4">
          <AnimatePresence mode="wait">
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="text-amber-400 font-bold text-xl">:</div>
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <div className="text-amber-400 font-bold text-xl">:</div>
            <TimeUnit value={timeLeft.seconds} label="Sec" />
          </AnimatePresence>
        </div>

        <button 
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-sm hover:from-orange-500 hover:to-red-500 transition-all hover:shadow-lg hover:shadow-orange-500/50">
          Claim Discount Now
        </button>
      </div>
    </div>
  )
}

export function SocialProofBadges() {
  const badges = [
    { icon: Users, label: '500+ Clients Helped', value: '500+', color: 'from-blue-600 to-cyan-600' },
    { icon: TrendingUp, label: '95% Approval Rate', value: '95%', color: 'from-green-600 to-emerald-600' },
    { icon: Clock, label: 'Avg 6 Month Processing', value: '6m', color: 'from-purple-600 to-pink-600' },
    { icon: Users, label: '20+ Countries Served', value: '20+', color: 'from-amber-600 to-orange-600' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, i) => {
        const Icon = badge.icon
        return (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-4 rounded-lg bg-gradient-to-br ${badge.color} bg-opacity-10 border border-opacity-50 text-center hover:shadow-lg transition-all`}
            whileHover={{ y: -4 }}
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Icon className="w-6 h-6 mx-auto mb-2 text-white" />
            </motion.div>
            <div className="font-bold text-white text-lg">{badge.value}</div>
            <div className="text-xs text-slate-300">{badge.label}</div>
          </motion.div>
        )
      })}
    </div>
  )
}
