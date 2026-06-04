'use client'

import { motion } from 'framer-motion'
import { PhoneIncoming, MessageSquare, PhoneCall } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: PhoneIncoming,
    title: 'A customer calls',
    description:
      "You're on a job and can't answer. The phone rings out — but instead of losing the lead, the system takes over.",
    color: 'text-prysmn-600',
    bgColor: 'bg-prysmn-600/10',
    borderColor: 'border-prysmn-300/60 hover:border-prysmn-400',
  },
  {
    step: 2,
    icon: MessageSquare,
    title: 'Auto-text within 15 seconds',
    description:
      'They instantly get: "Hi, this is [Your Business]. Sorry we missed your call! Do you need a plumber? Reply YES and we\'ll call you right back."',
    color: 'text-prysmn-500',
    bgColor: 'bg-prysmn-500/10',
    borderColor: 'border-prysmn-300/60 hover:border-prysmn-400',
  },
  {
    step: 3,
    icon: PhoneCall,
    title: 'They reply. Job booked.',
    description:
      "They reply YES. You call back between jobs. The job is booked. That's a customer you would have lost — now it's revenue in your pocket.",
    color: 'text-prysmn-emerald',
    bgColor: 'bg-prysmn-emerald/10',
    borderColor: 'border-emerald-200 hover:border-emerald-300',
  },
]

export default function SolutionSection() {
  return (
    <section id="solution" aria-labelledby="solution-heading" className="relative bg-prysmn-ice py-20 sm:py-28">
      {/* Top border glow — Trust Zone (Blue) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-prysmn-600/30 to-transparent" />

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
            The Solution
          </span>
          <h2 id="solution-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-prysmn-charcoal tracking-tight">
            Missed Call Text-Back:{' '}
            <span className="bg-gradient-to-r from-prysmn-600 to-prysmn-500 bg-clip-text text-transparent">
              Never Lose a Lead Again
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className={`flex gap-5 p-6 sm:p-8 rounded-2xl bg-white border ${step.borderColor} shadow-sm hover:shadow-md transition-all duration-300`}>
                {/* Step number + icon */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <div className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <span className="text-xs font-bold text-prysmn-400 uppercase tracking-wider">
                    Step {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-prysmn-charcoal font-bold text-xl sm:text-2xl">{step.title}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-6 bg-gradient-to-b from-prysmn-300/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom reassurance line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            No apps to install. No new phone number. No extra staff. It works with your
            existing business number and runs 24/7 on autopilot.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
