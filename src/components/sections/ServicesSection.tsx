'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Star, Kanban, CalendarCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: PhoneCall,
    title: 'Missed Call Text Back',
    description:
      "When you can't answer, we instantly text the caller back — so they know you received their message and will follow up. No more lost leads disappearing to the next plumber on Google.",
    features: [
      'Instant auto-reply within seconds',
      'Customizable message templates',
      'Lead captured even while on a job',
      'Never lose a customer to voicemail again',
    ],
    gradient: 'from-prysmn-500 to-prysmn-700',
    iconBg: 'bg-prysmn-600/20',
    iconColor: 'text-prysmn-400',
  },
  {
    icon: Star,
    title: 'Google Review Automation',
    description:
      'Automatically request reviews from happy customers after every completed job. More 5-star reviews means higher rankings, more trust, and more inbound calls — on complete autopilot.',
    features: [
      'Automated review request via text',
      'Direct link to your Google profile',
      'Filter unhappy customers before they review',
      'Reputation dashboard & alerts',
    ],
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-600/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Kanban,
    title: 'Basic CRM Pipeline',
    description:
      'Stop losing track of leads in your phone contacts. Our simple pipeline tracks every prospect from first call to closed job — so you always know who to follow up with and what stage they are in.',
    features: [
      'Visual deal pipeline board',
      'Automated follow-up reminders',
      'Lead source tracking',
      'One-click text & email from the CRM',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-600/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: CalendarCheck,
    title: 'Online Booking Calendar',
    description:
      "Let customers book jobs directly into your calendar — no phone tag, no double-booking. Your schedule stays full and organized, and you look like the professional operation you are.",
    features: [
      'Self-service booking page',
      'Automated confirmations & reminders',
      'Syncs with your personal calendar',
      'Reduces no-shows by 40%',
    ],
    gradient: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-600/20',
    iconColor: 'text-sky-400',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-prysmn-900/30 py-20 sm:py-28">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199,125,255,0.5) 1px, transparent 0)`,
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
            What We Do
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-prysmn-400 to-prysmn-300 bg-clip-text text-transparent">
              Stop Losing Leads
            </span>
          </h2>
          <p className="mt-4 text-prysmn-300/70 text-lg max-w-2xl mx-auto">
            Four powerful automations designed specifically for plumbing businesses.
            Set it up once, and it works for you 24/7.
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
              <p className="text-prysmn-300/70 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-prysmn-300/60">
                    <ArrowRight className={`w-4 h-4 ${service.iconColor} mt-0.5 shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
