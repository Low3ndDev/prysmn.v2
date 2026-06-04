'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Star, Kanban, CalendarCheck, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: PhoneCall,
    title: 'Missed Call Text-Back',
    description:
      'Auto-text within 15 seconds of any missed call. Converts 85% of missed callers into conversations. Recovers an average of $14,560 per year in previously lost revenue.',
    gradient: 'from-prysmn-600 to-prysmn-800',
    iconBg: 'bg-prysmn-600/20',
    iconColor: 'text-prysmn-600',
  },
  {
    icon: Star,
    title: 'Google Review Automation',
    description:
      'Automatically requests a Google review after every completed job. Builds your online reputation on autopilot. Businesses with 4.5+ stars get 35% more clicks from Google searches.',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-600/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Kanban,
    title: 'Basic CRM Pipeline',
    description:
      'Track every lead, quote, and job in one simple dashboard. Never lose track of a pending quote again. Automatic follow-up reminders ensure no opportunity falls through the cracks.',
    gradient: 'from-prysmn-emerald to-teal-600',
    iconBg: 'bg-prysmn-emerald/20',
    iconColor: 'text-prysmn-emerald',
  },
  {
    icon: CalendarCheck,
    title: 'Online Booking Calendar',
    description:
      "Let customers book appointments 24/7 from your website or Google profile. Captures after-hours leads that would otherwise go to voicemail. Syncs with your phone calendar automatically.",
    gradient: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-600/20',
    iconColor: 'text-sky-400',
  },
]

const trustPoints = [
  'No contracts',
  'Cancel anytime',
  'Setup in 30 minutes',
]

export default function IncludedSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-prysmn-900/30 py-20 sm:py-28">
      {/* Background texture — Blue grid */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37,99,235,0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-prysmn-800/40 border border-prysmn-600/30 text-prysmn-300 text-sm font-medium mb-4">
            What&apos;s Included
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Plumber&apos;s Lifeline Package
          </h2>
          <p className="mt-4 text-prysmn-300/70 text-lg max-w-2xl mx-auto">
            Everything you need to stop losing jobs — for just{' '}
            <span className="text-white font-semibold">$497/month</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-prysmn-950/60 border border-prysmn-700/30 backdrop-blur-sm hover:border-prysmn-600/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-prysmn-300/70 leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Pricing summary — Revenue in EMERALD (Rule: Emerald = money recovered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-prysmn-800/20 border border-prysmn-700/20">
            <div>
              <p className="text-prysmn-400/50 text-sm">Your investment</p>
              <p className="text-white font-bold text-2xl">$497<span className="text-prysmn-400/60 text-base font-normal">/mo</span></p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-prysmn-700/30" />
            <div>
              <p className="text-prysmn-400/50 text-sm">Your return</p>
              <p className="text-prysmn-emerald font-bold text-2xl">$58,240<span className="text-prysmn-400/60 text-base font-normal">/yr in recovered revenue</span></p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-prysmn-400/50">
            {trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-prysmn-emerald/60" />
                {point}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
