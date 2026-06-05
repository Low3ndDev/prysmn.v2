'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { businessConfig } from '@/lib/business-config'

export default function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="relative bg-prysmn-950 py-20 sm:py-28 overflow-hidden">
      {/* Top gradient fade — smooth transition from white FAQ section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-prysmn-snow via-prysmn-950/80 to-transparent" />

      {/* Background effects — Trust Zone (Blue) */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-prysmn-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-prysmn-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-prysmn-orange/50 to-transparent" />

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
            {/* Decorative corner accents — Orange for CTA emphasis */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-prysmn-orange/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-prysmn-orange/30 rounded-br-3xl" />

            <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Stop Losing{' '}
              <span className="bg-gradient-to-r from-prysmn-orange via-prysmn-amber to-prysmn-orange bg-clip-text text-transparent">
                ${businessConfig.weeklyLoss}/Week.
              </span>{' '}
              Start Recovering It Today.
            </h2>

            <p className="mt-6 text-prysmn-300/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Book a free 15-minute strategy session. I&apos;ll show you exactly how many calls
              you&apos;re missing and have the text-back system running within {businessConfig.setupTimeframe}.
              No contracts. No risk. Just results.
            </p>

            {/* CTA Button — ORANGE (Rule 1: CTAs = Orange) */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-prysmn-orange hover:bg-prysmn-orange-hover text-white text-lg px-8 py-6 shadow-xl shadow-prysmn-orange/25 hover:shadow-prysmn-orange/40 transition-all"
              >
                <a href={businessConfig.bookingUrl}>
                  Book Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Trust line — Emerald dots for success indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-prysmn-400/50">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-prysmn-emerald" />
                Free 15-minute strategy session
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-prysmn-emerald" />
                No contracts, cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-prysmn-emerald" />
                Running within {businessConfig.setupTimeframe}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
