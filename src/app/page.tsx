'use client'

import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-prysmn-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
