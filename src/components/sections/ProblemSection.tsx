'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { PhoneOff, DollarSign, Users } from 'lucide-react'

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
    return () => cancelAnimationFrame(animationId)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const painStats = [
  {
    icon: PhoneOff,
    value: 62,
    suffix: '%',
    label: 'of missed callers never call back',
    description: 'They just move on to the next plumber on Google.',
    iconColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    gradient: 'from-red-400 to-rose-500',
  },
  {
    icon: DollarSign,
    value: 36400,
    prefix: '$',
    suffix: '',
    label: 'lost to missed calls every year',
    description: "That's $700 a week walking straight to your competition.",
    iconColor: 'text-prysmn-amber',
    bgColor: 'bg-amber-500/10',
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    icon: Users,
    value: 4,
    suffix: '.3',
    label: 'customers lost PER DAY to competitors',
    description: 'Competitors who simply answer the phone get your jobs.',
    iconColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    gradient: 'from-red-400 to-red-500',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" aria-labelledby="problem-heading" className="relative bg-prysmn-900/30 py-20 sm:py-28">
      {/* Subtle top border glow — RED zone (Problem section ONLY, Rule 2) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 id="problem-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Every Missed Call Is a{' '}
            <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
              $320 Job
            </span>{' '}
            Walking Out the Door
          </h2>
          <p className="mt-4 text-prysmn-300/70 text-lg max-w-2xl mx-auto leading-relaxed">
            You&apos;re under a house, up a ladder, or driving between jobs. Your phone rings
            — and by the time you see it, they&apos;ve already called the next plumber on Google.
          </p>
        </motion.div>

        {/* Pain Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-prysmn-950/60 border border-red-500/10 backdrop-blur-sm hover:border-red-500/20 transition-all duration-300 text-center"
            >
              <div className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center mb-5 mx-auto`}>
                <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>
              <div className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-white font-semibold mt-2 text-lg">{stat.label}</p>
              <p className="text-prysmn-300/50 text-sm mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
