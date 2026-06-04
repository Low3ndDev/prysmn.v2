import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Hero section — uses CSS animations instead of Framer Motion.
 *
 * Why: Framer Motion's `initial={{ opacity: 0 }}` renders opacity:0 in SSR HTML.
 * On slow 3G connections, the hero is completely blank until JS loads and hydrates.
 * CSS animations fire immediately from the stylesheet — no JS required.
 * Same visual effect (staggered fade-in-up), zero blank-page risk.
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen min-h-dvh flex items-center justify-center overflow-hidden bg-prysmn-950"
    >
      {/* Background Effects — Trust Zone (Blue) */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-prysmn-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-prysmn-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prysmn-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-prysmn-800/40 border border-prysmn-600/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-prysmn-orange" />
            <span className="text-prysmn-300 text-sm font-medium">
              Built for Plumbing Businesses
            </span>
          </div>

          {/* Main Headline — $700/Week in Orange/Amber (loss figure, per report heatmap) */}
          <h1
            id="hero-heading"
            className="hero-animate-lg hero-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Stop Losing{' '}
            <span className="bg-gradient-to-r from-prysmn-orange via-prysmn-amber to-prysmn-orange bg-clip-text text-transparent">
              $700/Week
            </span>{' '}
            to Missed Calls
          </h1>

          {/* Sub-headline */}
          <p className="hero-animate-lg hero-delay-2 mt-6 text-lg sm:text-xl text-prysmn-300/80 max-w-2xl mx-auto leading-relaxed">
            The automated text-back system that turns your missed calls into booked jobs
            — in under 15 seconds.
          </p>

          {/* CTA Buttons — Primary CTA = ORANGE (Rule 1) */}
          <div className="hero-animate-lg hero-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-prysmn-orange hover:bg-prysmn-orange-hover text-white text-lg px-8 py-6 shadow-xl shadow-prysmn-orange/25 hover:shadow-prysmn-orange/40 transition-all"
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
          </div>

          {/* No-contract trust line */}
          <p className="hero-animate-fade hero-delay-4 mt-4 text-sm text-prysmn-400/50">
            No contracts. No setup fees. See results in 48 hours.
          </p>

          {/* Founding clients bar — honest scarcity */}
          <div className="hero-animate-fade hero-delay-5 mt-12 pt-8 border-t border-prysmn-800/30">
            <p className="text-prysmn-400/60 text-sm font-medium">
              Currently onboarding founding clients — limited spots available.
            </p>
            <p className="text-prysmn-400/40 text-xs mt-2">
              Built for Australian Plumbing Businesses
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade — smooth transition to white Problem section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-prysmn-snow via-prysmn-950/80 to-transparent" />
    </section>
  )
}
