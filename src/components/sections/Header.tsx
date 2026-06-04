'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Included', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const tickingRef = useRef(false)

  // Throttled scroll handler using rAF
  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileOpen])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMobileOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('header')) {
        setIsMobileOpen(false)
      }
    }
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
    }, 0)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

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
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-prysmn-orange focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" aria-label="Prysmn — Home">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-prysmn-600 to-prysmn-900 flex items-center justify-center shadow-lg shadow-prysmn-600/30 group-hover:shadow-prysmn-500/50 transition-shadow">
              <span className="text-white font-bold text-lg sm:text-xl">P</span>
            </div>
            <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">
              Prysmn
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-prysmn-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA — ORANGE (Rule 1: CTAs = Orange) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-prysmn-orange hover:bg-prysmn-orange-hover text-white shadow-lg shadow-prysmn-orange/25 hover:shadow-prysmn-orange/40 transition-all"
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
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-prysmn-950/98 backdrop-blur-lg border-t border-prysmn-800/50"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="block px-4 py-3 text-prysmn-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                {/* Mobile CTA — ORANGE */}
                <Button
                  asChild
                  className="w-full bg-prysmn-orange hover:bg-prysmn-orange-hover text-white"
                >
                  <a href="#cta" onClick={closeMobile}>
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
