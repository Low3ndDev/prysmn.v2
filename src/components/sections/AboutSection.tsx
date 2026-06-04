'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Zap, Users } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Setup in Under 48 Hours',
    description:
      "We don't drag things out. Our onboarding is fast and hands-on — we handle the entire setup so you can focus on what you do best: running your plumbing business. Most clients are live within 2 days.",
  },
  {
    icon: Users,
    title: 'Built Exclusively for Plumbers',
    description:
      "This isn't a generic tool repackaged for trades. Every automation, template, and workflow was designed from the ground up for plumbing businesses — from emergency call handling to seasonal follow-ups.",
  },
  {
    icon: Shield,
    title: 'Done-For-You, Not DIY',
    description:
      "You're a plumber, not a tech expert. We build, configure, and manage everything for you. No complicated dashboards to learn, no software to maintain. Just results.",
  },
  {
    icon: CheckCircle2,
    title: 'Proven ROI, Zero Risk',
    description:
      "Our clients typically see a positive return within the first week. If the automations don't pay for themselves, we'll work with you until they do. Your success is our retention strategy.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-prysmn-950 py-20 sm:py-28">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-prysmn-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-prysmn-800/40 border border-prysmn-600/30 text-prysmn-300 text-sm font-medium mb-4">
              Why Prysmn
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              We Don&apos;t Just Sell Software.{' '}
              <span className="bg-gradient-to-r from-prysmn-400 to-prysmn-300 bg-clip-text text-transparent">
                We Deliver Results.
              </span>
            </h2>
            <p className="mt-6 text-prysmn-300/70 text-lg leading-relaxed">
              Most plumbers are great at their craft but terrible at following up with leads.
              That&apos;s not a criticism — it&apos;s reality. When you&apos;re under a sink or on a roof,
              the phone goes unanswered, and that customer calls the next company on the list.
            </p>
            <p className="mt-4 text-prysmn-300/70 text-lg leading-relaxed">
              Prysmn was built to solve that exact problem. We automate the follow-up, capture the
              leads you&apos;re currently losing, and put your business growth on autopilot — so you
              can keep doing the work that pays the bills while we fill the pipeline.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-prysmn-950 bg-gradient-to-br from-prysmn-500 to-prysmn-700 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">
                      {['JM', 'AK', 'RT', 'SL'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Trusted by 50+ Plumbing Businesses</p>
                <p className="text-prysmn-400/60 text-xs">Across 12 states and growing</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Reasons Grid */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 p-5 rounded-xl bg-prysmn-900/40 border border-prysmn-700/20 hover:border-prysmn-600/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-prysmn-600/15 flex items-center justify-center shrink-0 group-hover:bg-prysmn-600/25 transition-colors">
                  <reason.icon className="w-6 h-6 text-prysmn-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{reason.title}</h3>
                  <p className="text-prysmn-300/60 text-sm mt-1 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
