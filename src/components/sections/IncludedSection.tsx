'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Star, Kanban, CalendarCheck, CheckCircle2 } from 'lucide-react'
import { businessConfig } from '@/lib/business-config'

const services = [
  {
    icon: PhoneCall,
    title: 'Missed Call Text-Back',
    description:
      `Auto-text within 15 seconds of any missed call. Leads who receive a text are 4x more likely to convert than those sent to voicemail. Recovers an average of $${businessConfig.textBackAnnualRecovery.toLocaleString()} per year in previously lost revenue.`,
    gradient: 'from-prysmn-600 to-prysmn-800',
    iconBg: 'bg-prysmn-600/10',
    iconColor: 'text-prysmn-600',
    borderColor: 'border-prysmn-300/60 hover:border-prysmn-400',
  },
  {
    icon: Star,
    title: 'Google Review Automation',
    description:
      'Automatically requests a Google review after every completed job. Builds your online reputation on autopilot. Businesses with 4.5+ stars get 35% more clicks from Google searches.',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-200 hover:border-amber-300',
  },
  {
    icon: Kanban,
    title: 'Basic CRM Pipeline',
    description:
      'Track every lead, quote, and job in one simple dashboard. Never lose track of a pending quote again. Automatic follow-up reminders ensure no opportunity falls through the cracks.',
    gradient: 'from-prysmn-emerald to-teal-600',
    iconBg: 'bg-prysmn-emerald/10',
    iconColor: 'text-prysmn-emerald',
    borderColor: 'border-emerald-200 hover:border-emerald-300',
  },
  {
    icon: CalendarCheck,
    title: 'Online Booking Calendar',
    description:
      "Let customers book appointments 24/7 from your website or Google profile. Captures after-hours leads that would otherwise go to voicemail. Syncs with your phone calendar automatically.",
    gradient: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-200 hover:border-sky-300',
  },
]

const trustPoints = [
  'No contracts',
  'Cancel anytime',
  'Setup within ' + businessConfig.setupTimeframe,
]

export default function IncludedSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-prysmn-snow py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-prysmn-200 text-prysmn-600 text-sm font-medium mb-4">
            What&apos;s Included
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-prysmn-charcoal tracking-tight">
            The Plumber&apos;s Lifeline Package
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to stop losing jobs — for just{' '}
            <span className="text-prysmn-orange font-semibold">${businessConfig.priceFormatted}</span>
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
              className={`group relative p-6 sm:p-8 rounded-2xl bg-white border ${service.borderColor} shadow-sm hover:shadow-md transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Pricing summary — Orange price, Emerald revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div>
              <p className="text-gray-500 text-sm">Your investment</p>
              <p className="text-prysmn-orange font-bold text-2xl">${businessConfig.priceMonthly}<span className="text-gray-400 text-base font-normal">/mo</span></p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <p className="text-gray-500 text-sm">Your return</p>
              <p className="text-prysmn-emerald font-bold text-2xl">${businessConfig.annualLoss.toLocaleString()}<span className="text-gray-400 text-base font-normal">/yr in recovered revenue</span></p>
            </div>
          </div>
          <ul className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500 list-none p-0 m-0">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-prysmn-emerald" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
