'use client'

import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import IncludedSection from '@/components/sections/IncludedSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-prysmn-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <IncludedSection />
        <SocialProofSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
