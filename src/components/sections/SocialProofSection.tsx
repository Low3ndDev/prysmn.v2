'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

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
  { value: '85%', label: 'of missed callers respond to the auto-text', color: 'from-prysmn-600 to-prysmn-500' },
  { value: '72%', label: 'of text-back conversations convert to booked jobs', color: 'from-prysmn-600 to-prysmn-500' },
  { value: '$14,560', label: 'average revenue recovery per year', color: 'from-prysmn-emerald to-emerald-600' },
  { value: '+0.7', label: 'stars improvement within 60 days', color: 'from-prysmn-amber to-amber-500' },
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
            Social Proof
          </span>
          <h2 id="proof-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-prysmn-charcoal tracking-tight">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-prysmn-600 to-prysmn-500 bg-clip-text text-transparent">
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
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-amber-100 shadow-sm"
            >
              {/* Star rating — at top for immediate credibility signal */}
              <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-prysmn-amber text-prysmn-amber" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-prysmn-charcoal leading-relaxed text-base sm:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-prysmn-600 to-prysmn-800 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <cite className="not-italic text-prysmn-charcoal font-semibold text-sm">{testimonial.name}</cite>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
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
          <h3 className="text-center text-prysmn-charcoal font-semibold text-lg mb-8">Industry Average Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/70 border border-amber-100"
              >
                <p className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
