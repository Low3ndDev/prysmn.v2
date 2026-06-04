'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Results', href: '#stats' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#cta' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-prysmn-950/95 backdrop-blur-md shadow-lg shadow-prysmn-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-prysmn-400 to-prysmn-600 flex items-center justify-center shadow-lg shadow-prysmn-600/30 group-hover:shadow-prysmn-500/50 transition-shadow">
              <span className="text-white font-bold text-lg sm:text-xl">P</span>
            </div>
            <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">
              Prysmn
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-prysmn-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-gradient-to-r from-prysmn-500 to-prysmn-600 hover:from-prysmn-400 hover:to-prysmn-500 text-white shadow-lg shadow-prysmn-600/25 hover:shadow-prysmn-500/40 transition-all"
            >
              <a href="#cta">
                <Phone className="w-4 h-4 mr-2" />
                Book a Call
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-prysmn-950/98 backdrop-blur-lg border-t border-prysmn-800/50"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-prysmn-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-prysmn-500 to-prysmn-600 hover:from-prysmn-400 hover:to-prysmn-500 text-white"
                >
                  <a href="#cta" onClick={() => setIsMobileOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Call
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
