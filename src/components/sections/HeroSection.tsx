'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-prysmn-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-prysmn-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-prysmn-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prysmn-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(176,53,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(176,53,53,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-prysmn-800/40 border border-prysmn-600/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-prysmn-400 animate-pulse" />
            <span className="text-prysmn-300 text-sm font-medium">
              Built for Plumbing Businesses
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Stop Losing{' '}
            <span className="bg-gradient-to-r from-prysmn-400 via-prysmn-300 to-prysmn-400 bg-clip-text text-transparent">
              $700/Week
            </span>{' '}
            to Missed Calls
          </motion.h1>

          {/* Sub-headline — from PDF copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-prysmn-300/80 max-w-2xl mx-auto leading-relaxed"
          >
            The automated text-back system that turns your missed calls into booked jobs
            — in under 15 seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-prysmn-500 to-prysmn-600 hover:from-prysmn-400 hover:to-prysmn-500 text-white text-lg px-8 py-6 shadow-xl shadow-prysmn-600/25 hover:shadow-prysmn-500/40 transition-all"
            >
              <a href="#cta">
                Book Your Free Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-prysmn-600/50 text-prysmn-300 hover:bg-prysmn-800/30 hover:text-white hover:border-prysmn-500/50 text-lg px-8 py-6"
            >
              <a href="#solution">
                See How It Works
              </a>
            </Button>
          </motion.div>

          {/* No-contract trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-sm text-prysmn-400/50"
          >
            No contracts. No setup fees. See results in 48 hours.
          </motion.p>

          {/* Trust bar — from PDF: "Trusted by 47+ Australian Plumbing Businesses" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-prysmn-800/30"
          >
            <p className="text-prysmn-400/40 text-xs uppercase tracking-widest mb-4">
              Trusted by 50+ Plumbing Businesses
            </p>
            <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
              {[
                { value: '15s', label: 'Auto-text speed' },
                { value: '85%', label: 'Response rate' },
                { value: '$14.5k', label: 'Avg. revenue recovered/yr' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-white font-bold text-xl sm:text-2xl">{stat.value}</p>
                  <p className="text-prysmn-400/40 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-prysmn-950 to-transparent" />
    </section>
  )
}
