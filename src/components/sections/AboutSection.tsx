'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { businessConfig } from '@/lib/business-config'

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-prysmn-snow py-20 sm:py-28">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-prysmn-600/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-prysmn-200 text-prysmn-600 text-sm font-medium mb-4">
            About
          </span>
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-prysmn-charcoal tracking-tight">
            The Person Behind{' '}
            <span className="bg-gradient-to-r from-prysmn-600 to-prysmn-500 bg-clip-text text-transparent">
              Prysmn
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl bg-white border border-prysmn-200 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Photo panel — fills left side on desktop */}
              <div className="relative w-full lg:w-2/5 shrink-0">
                <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[320px] lg:min-h-[520px]">
                  <Image
                    src="/john-avatar.jpg"
                    alt="John — Founder of Prysmn"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  {/* Bottom gradient for name overlay on mobile */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-prysmn-950/80 to-transparent lg:hidden" />
                  {/* Name overlay on mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                    <h3 className="text-2xl font-bold text-white">John</h3>
                    <p className="text-prysmn-300 font-medium text-sm">Founder, Prysmn</p>
                  </div>
                </div>
              </div>

              {/* Content panel */}
              <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                {/* Name — desktop only, mobile shows it overlaid on photo */}
                <div className="hidden lg:block mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-prysmn-charcoal">
                    John
                  </h3>
                  <p className="text-prysmn-600 font-medium text-sm mt-1">
                    Founder, Prysmn
                  </p>
                </div>

                {/* Body copy */}
                <div className="space-y-5 text-prysmn-charcoal leading-relaxed">
                  <p>
                    I build automation systems specifically for Australian plumbing businesses — not agencies,
                    not retail, not &ldquo;all trades.&rdquo; Just plumbers.
                  </p>
                  <p>
                    I noticed something: most plumbers are incredible at their trade and terrible at
                    never missing a lead — not because they don&apos;t care, but because they&apos;re
                    under a house when the phone rings. The big marketing agencies charge $5,000+ to
                    sort it out, take three months to deliver, and hand you a generic website that
                    doesn&apos;t actually fix the problem.
                  </p>
                  <p className="text-lg font-medium text-prysmn-charcoal">
                    So I built Prysmn to do one thing well: make sure every missed call turns into a
                    booked job — automatically, in 15 seconds, without you touching a thing.
                  </p>
                  <p>
                    I&apos;m currently taking on my first clients. If you want to be one of them,
                    you&apos;ll get my full attention and a system that&apos;s set up in 48 hours.
                  </p>

                  {/* Trust bullets */}
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-prysmn-emerald/10 flex items-center justify-center">
                        <span className="text-prysmn-emerald text-xs font-bold">&#10003;</span>
                      </span>
                      <span>One point of contact — me, directly. No account managers, no ticket systems.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-prysmn-emerald/10 flex items-center justify-center">
                        <span className="text-prysmn-emerald text-xs font-bold">&#10003;</span>
                      </span>
                      <span>Set up in 48 hours or you don&apos;t pay.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-prysmn-emerald/10 flex items-center justify-center">
                        <span className="text-prysmn-emerald text-xs font-bold">&#10003;</span>
                      </span>
                      <span>No lock-in contracts. If it doesn&apos;t work, cancel anytime.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button
                    asChild
                    size="lg"
                    className="bg-prysmn-orange hover:bg-prysmn-orange-hover text-white shadow-lg shadow-prysmn-orange/25 hover:shadow-prysmn-orange/40 transition-all"
                  >
                    <a href={businessConfig.bookingUrl}>
                      Book Your Free Strategy Session
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
