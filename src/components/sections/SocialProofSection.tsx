'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, Clock, Users, PhoneOff } from 'lucide-react'

const industryStats = [
  {
    icon: PhoneOff,
    value: '62%',
    label: 'of missed callers never call back',
    source: 'Forbes',
    color: 'from-red-500 to-rose-600',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
  },
  {
    icon: TrendingUp,
    value: '93%',
    label: 'of texts are read within 3 minutes',
    source: 'SMS Comparison',
    color: 'from-prysmn-600 to-prysmn-500',
    iconColor: 'text-prysmn-600',
    iconBg: 'bg-prysmn-600/10',
  },
  {
    icon: Clock,
    value: '15s',
    label: 'auto-text response time — vs 4+ min voicemail',
    source: null,
    color: 'from-prysmn-emerald to-emerald-600',
    iconColor: 'text-prysmn-emerald',
    iconBg: 'bg-prysmn-emerald/10',
  },
  {
    icon: Users,
    value: '85%',
    label: 'of consumers prefer texting over calling',
    source: 'Zipwhip',
    color: 'from-prysmn-amber to-amber-500',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
  },
]

export default function SocialProofSection() {
  return (
    <section id="proof" aria-labelledby="proof-heading" className="relative bg-prysmn-cream py-20 sm:py-28">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-600 text-sm font-medium mb-4">
            The Industry
          </span>
          <h2 id="proof-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-prysmn-charcoal tracking-tight">
            The Data Behind{' '}
            <span className="bg-gradient-to-r from-prysmn-600 to-prysmn-500 bg-clip-text text-transparent">
              Missed Call Recovery
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            These aren&apos;t guesses — they&apos;re industry research. The opportunity cost of
            ignoring missed calls is staggering.
          </p>
        </motion.div>

        {/* Industry Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white border border-amber-100 shadow-sm text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center mb-4 mx-auto`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <p className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className="text-prysmn-charcoal font-medium text-sm mt-2">{stat.label}</p>
              {stat.source && (
                <p className="text-gray-400 text-xs mt-1">Source: {stat.source}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Founding client CTA — honest scarcity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-amber-200 shadow-sm max-w-lg">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-prysmn-emerald" />
              <span className="text-prysmn-charcoal font-semibold text-sm">Founding Client Program</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We&apos;re currently onboarding our first group of Australian plumbing businesses.
              Founding clients get priority setup, direct access to me, and locked-in pricing.
            </p>
            <p className="text-prysmn-orange font-semibold text-sm">
              Limited spots remaining.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
