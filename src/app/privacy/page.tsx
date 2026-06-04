import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { businessConfig } from '@/lib/business-config'

export const metadata: Metadata = {
  title: 'Privacy Policy — Prysmn',
  description: 'Prysmn Privacy Policy — how we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-prysmn-snow">
        {/* Page Banner */}
        <section className="bg-prysmn-950 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-prysmn-300/70 text-sm">
              Last updated: June 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white border border-prysmn-200 shadow-sm p-8 sm:p-12 space-y-10 text-prysmn-charcoal leading-relaxed">

              {/* Who we are */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  Who We Are
                </h2>
                <p>
                  Prysmn is a digital automation service built for Australian plumbing businesses.
                  We are operated by John Betes (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
                </p>
              </div>

              {/* What information we collect */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  What Information We Collect
                </h2>
                <p>
                  When you submit a form or book a call on this website, we collect your name,
                  email address, and phone number. We only collect what you provide voluntarily.
                </p>
              </div>

              {/* How we use your information */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use your information solely to contact you about Prysmn services. We do not
                  sell, rent, or share your information with third parties for marketing purposes.
                </p>
              </div>

              {/* Third-party tools */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  Third-Party Tools
                </h2>
                <p>
                  We use third-party software to manage bookings and communications. These tools
                  may store your data on secure servers. We only use providers with appropriate
                  data protection standards.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  Cookies
                </h2>
                <p>
                  This website may use basic cookies for functionality and analytics. No personally
                  identifiable information is stored in cookies.
                </p>
              </div>

              {/* Data retention */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  Data Retention
                </h2>
                <p>
                  We retain your information for as long as necessary to provide our services or as
                  required by law. You may request deletion of your data at any time.
                </p>
              </div>

              {/* Your rights */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  Your Rights
                </h2>
                <p>
                  You have the right to access, correct, or request deletion of any personal
                  information we hold about you. To do so, contact us at{' '}
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="text-prysmn-600 hover:text-prysmn-500 underline underline-offset-2 transition-colors"
                  >
                    {businessConfig.email}
                  </a>.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  Contact
                </h2>
                <p>
                  For any privacy-related questions:{' '}
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="text-prysmn-600 hover:text-prysmn-500 underline underline-offset-2 transition-colors"
                  >
                    {businessConfig.email}
                  </a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
