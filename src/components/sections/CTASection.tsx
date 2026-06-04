'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="relative bg-prysmn-950 py-20 sm:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-prysmn-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-prysmn-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-prysmn-500/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Main Card */}
          <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-prysmn-800/40 via-prysmn-900/50 to-prysmn-800/40 border border-prysmn-600/30 backdrop-blur-sm">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-prysmn-500/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-prysmn-500/30 rounded-br-3xl" />

            <span className="inline-block px-3 py-1 rounded-full bg-prysmn-500/20 border border-prysmn-500/30 text-prysmn-300 text-sm font-medium mb-6">
              Limited Availability
            </span>

            <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Stop Losing{' '}
              <span className="bg-gradient-to-r from-prysmn-400 via-prysmn-300 to-prysmn-400 bg-clip-text text-transparent">
                $700/Week?
              </span>
            </h2>

            <p className="mt-6 text-prysmn-300/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Book a free 15-minute strategy call. We&apos;ll show you exactly how much
              revenue you&apos;re losing from missed calls — and how to get it back.
              No pressure, no commitment.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-prysmn-500 to-prysmn-600 hover:from-prysmn-400 hover:to-prysmn-500 text-white text-lg px-8 py-6 shadow-xl shadow-prysmn-600/25 hover:shadow-prysmn-500/40 transition-all"
              >
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Free Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-prysmn-400/50">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Free strategy session
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Setup in 48 hours
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
