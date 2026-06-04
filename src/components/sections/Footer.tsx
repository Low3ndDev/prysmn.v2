'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Missed Call Text-Back', href: '#services' },
    { label: 'Google Review Automation', href: '#services' },
    { label: 'CRM Pipeline', href: '#services' },
    { label: 'Online Booking Calendar', href: '#services' },
  ],
  company: [
    { label: 'The Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Proof', href: '#proof' },
    { label: 'FAQ', href: '#faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-prysmn-950 border-t border-prysmn-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-prysmn-600 to-prysmn-900 flex items-center justify-center shadow-lg shadow-prysmn-600/20">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Prysmn</span>
            </a>
            <p className="text-prysmn-400/50 text-sm leading-relaxed max-w-xs">
              The Plumber&apos;s Lifeline Package — automated lead capture and follow-up built exclusively for plumbing businesses.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a href="mailto:hello@prysmn.com" className="text-prysmn-400/50 hover:text-prysmn-400 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+1234567890" className="text-prysmn-400/50 hover:text-prysmn-400 transition-colors" aria-label="Phone">
                <Phone className="w-5 h-5" />
              </a>
              <span className="text-prysmn-400/50 flex items-center gap-1.5">
                <MapPin className="w-5 h-5" />
                <span className="text-xs">United States</span>
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-prysmn-400/50 hover:text-prysmn-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-prysmn-400/50 hover:text-prysmn-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get Started</h3>
            <p className="text-prysmn-400/50 text-sm mb-4">
              Stop losing leads today. Book a free 15-minute call.
            </p>
            {/* CTA Button — ORANGE (Rule 1: CTAs = Orange) */}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-prysmn-orange hover:bg-prysmn-orange-hover text-white text-sm font-medium transition-all shadow-lg shadow-prysmn-orange/20"
            >
              <Phone className="w-4 h-4" />
              Book a Call
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-prysmn-800/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-prysmn-400/40 text-xs">
            &copy; {new Date().getFullYear()} Prysmn. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-prysmn-400/40 hover:text-prysmn-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="text-prysmn-400/40 hover:text-prysmn-400 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
