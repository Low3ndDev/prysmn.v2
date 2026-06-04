'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "I was losing at least 5 calls a day while on job sites. Within the first week of Missed Call Text-Back, I booked 8 extra jobs just from people who would have gone elsewhere. That's over $2,500 in a single week from something that runs on autopilot.",
    name: 'Mike T.',
    role: 'Plumber, Sydney NSW',
    initials: 'MT',
  },
  {
    quote:
      "The review automation alone got me from 3.9 to 4.6 stars in two months. I'm now the top-rated plumber in my area on Google, and the calls just keep coming.",
    name: 'Dave R.',
    role: 'Plumber, Brisbane QLD',
    initials: 'DR',
  },
]

const industryStats = [
  { value: '85%', label: 'of missed callers respond to the auto-text' },
  { value: '72%', label: 'of text-back conversations convert to booked jobs' },
  { value: '$14,560', label: 'average revenue recovery per year' },
  { value: '+0.7', label: 'stars improvement within 60 days' },
]

export default function SocialProofSection() {
  return (
    <section id="proof" aria-labelledby="proof-heading" className="relative bg-prysmn-950 py-20 sm:py-28">
      {/* Top border glow */}
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
            Social Proof
          </span>
          <h2 id="proof-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-prysmn-400 to-prysmn-300 bg-clip-text text-transparent">
              Real Plumbers
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-prysmn-900/40 border border-prysmn-700/20 backdrop-blur-sm"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-prysmn-600/30 mb-4" />

              <blockquote className="text-prysmn-200/90 leading-relaxed text-base sm:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-prysmn-500 to-prysmn-700 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-prysmn-400/50 text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Star rating */}
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Average Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-white font-semibold text-lg mb-8">Industry Average Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-prysmn-900/30 border border-prysmn-700/15"
              >
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-prysmn-400 to-prysmn-300 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-prysmn-300/50 text-xs sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
