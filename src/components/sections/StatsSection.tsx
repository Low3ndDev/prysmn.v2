'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import { DollarSign, PhoneOff, Star, Users } from 'lucide-react'

function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return
    let startTime: number | null = null
    let animationId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }
    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: DollarSign,
    value: 700,
    prefix: '$',
    suffix: '+',
    label: 'Saved Per Week',
    description: 'Average revenue recovered by capturing missed leads',
    gradient: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: PhoneOff,
    value: 62,
    prefix: '',
    suffix: '%',
    label: 'Of Calls Go Unanswered',
    description: 'Plumbers miss over half their calls while on the job',
    gradient: 'from-red-400 to-rose-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: Star,
    value: 5,
    prefix: '',
    suffix: 'x',
    label: 'More Google Reviews',
    description: 'Automated review requests generate 5x more feedback',
    gradient: 'from-amber-400 to-yellow-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Users,
    value: 97,
    prefix: '',
    suffix: '%',
    label: 'Client Retention',
    description: 'Stay top of mind with automated follow-ups and reminders',
    gradient: 'from-prysmn-400 to-prysmn-500',
    bgColor: 'bg-prysmn-500/10',
    borderColor: 'border-prysmn-500/20',
    iconColor: 'text-prysmn-400',
  },
]

export default function StatsSection() {
  return (
    <section id="stats" aria-labelledby="stats-heading" className="relative bg-prysmn-950 py-20 sm:py-28">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-prysmn-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-prysmn-800/40 border border-prysmn-600/30 text-prysmn-300 text-sm font-medium mb-4">
            The Numbers Don&apos;t Lie
          </span>
          <h2 id="stats-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Your Business Is{' '}
            <span className="bg-gradient-to-r from-prysmn-400 to-prysmn-300 bg-clip-text text-transparent">
              Bleeding Revenue
            </span>
          </h2>
          <p className="mt-4 text-prysmn-300/70 text-lg max-w-2xl mx-auto">
            Plumbing businesses lose thousands every month from missed opportunities.
            Here&apos;s what the data reveals.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group p-6 rounded-2xl bg-prysmn-900/50 border ${stat.borderColor} backdrop-blur-sm hover:bg-prysmn-900/70 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-white font-semibold mt-2 text-lg">{stat.label}</p>
              <p className="text-prysmn-300/60 text-sm mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
