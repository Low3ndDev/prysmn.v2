'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How fast can this be set up?',
    answer:
      "30 minutes. I configure everything on your existing business phone number. No new hardware, no apps to install, no IT knowledge required. You literally don't have to do anything — I handle the entire setup while you're working. Most plumbers see their first auto-text go out within an hour of signing up.",
  },
  {
    question: 'Do I need a new phone number?',
    answer:
      "No. Missed Call Text-Back works with your existing business number. Your customers see the same number they've always called. The text comes from your business name, so it looks completely natural and professional.",
  },
  {
    question: 'What if I\'m already using voicemail?',
    answer:
      "Voicemail is the problem, not the solution. Only 38% of people leave a voicemail when they don't get an answer. The other 62% just call the next plumber on Google. MCTB catches that 62% by texting them before they even think about calling someone else.",
  },
  {
    question: 'Can I see the messages and control what\'s sent?',
    answer:
      "Absolutely. Every auto-text is fully customisable. You approve the message template during setup, and you can change it anytime. You also see every conversation in your dashboard — who texted, what they said, and whether a job was booked. Full transparency, zero surprises.",
  },
  {
    question: 'What\'s the catch with $497/month?',
    answer:
      "No catch. No hidden fees, no contracts, no lock-in period. The reason it's $497 and not $1,500 is that the technology runs on automation — it costs very little to deliver, and I pass those savings on to you. Cancel anytime if you're not seeing results.",
  },
  {
    question: 'How is this different from just hiring a receptionist?',
    answer:
      "A receptionist costs $45,000–$55,000/year and can only answer one call at a time during business hours. MCTB works 24/7, handles unlimited simultaneous calls, and never takes a sick day. It also costs less than 1/7th of a part-time receptionist's salary.",
  },
]

function FAQItem({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  const panelId = `faq-panel-${index}`
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <h3 id={`faq-heading-${index}`} className="text-prysmn-charcoal font-semibold text-base sm:text-lg">{faq.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-prysmn-amber shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={`faq-heading-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative bg-prysmn-snow py-20 sm:py-28">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-prysmn-amber/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-600 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-prysmn-charcoal tracking-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            Straight answers to the questions plumbers ask most.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
