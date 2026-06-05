import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { businessConfig } from '@/lib/business-config'

export const metadata: Metadata = {
  title: 'Terms of Service — Prysmn',
  description: 'Prysmn Terms of Service — the terms governing your use of Prysmn services.',
}

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-prysmn-snow">
        {/* Page Banner */}
        <section className="bg-prysmn-950 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Terms of Service
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

              {/* 1. Overview */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  1. Overview
                </h2>
                <p>
                  These Terms govern your use of Prysmn&rsquo;s services. By booking a call or
                  engaging our services, you agree to these Terms. Prysmn is operated by {businessConfig.founderName}.
                </p>
              </div>

              {/* 2. Services */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  2. Services
                </h2>
                <p>
                  Prysmn provides missed call text-back automation, CRM pipeline setup, Google
                  review automation, and online booking systems — built specifically for Australian
                  plumbing businesses. The exact scope of services is confirmed in writing prior to
                  setup.
                </p>
              </div>

              {/* 3. Pricing and Billing */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  3. Pricing and Billing
                </h2>
                <p>
                  Services start at AUD $497/month. Upgrade packages are available and will be
                  proposed separately after the initial service period. Pricing for any upgrade is
                  confirmed in writing before changes take effect. Payment is due at the start of
                  each billing period. Pricing is locked in for founding clients at the rate agreed
                  at signup.
                </p>
              </div>

              {/* 4. Setup and Delivery */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  4. Setup and Delivery
                </h2>
                <p>
                  We commit to completing initial setup within 48 hours of receiving all required
                  information from the client. If setup is not completed within 48 hours through
                  fault of Prysmn, the client will not be charged for that period.
                </p>
              </div>

              {/* 5. No Lock-In Contracts */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  5. No Lock-In Contracts
                </h2>
                <p>
                  There are no fixed-term contracts. You may cancel at any time by notifying us in
                  writing. Cancellations take effect at the end of the current billing period. No
                  partial refunds are issued for unused time within a billing period.
                </p>
              </div>

              {/* 6. Client Responsibilities */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  6. Client Responsibilities
                </h2>
                <p>
                  Clients are responsible for providing accurate business information required for
                  setup, maintaining access to phone numbers and accounts connected to the service,
                  and notifying us promptly of any changes that affect the service.
                </p>
              </div>

              {/* 7. Intellectual Property */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  7. Intellectual Property
                </h2>
                <p>
                  All systems, workflows, and automations built by Prysmn remain the intellectual
                  property of Prysmn. Clients are granted a non-exclusive licence to use these
                  systems while their subscription is active.
                </p>
              </div>

              {/* 8. Limitation of Liability */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  8. Limitation of Liability
                </h2>
                <p>
                  Prysmn is not liable for indirect, incidental, or consequential damages arising
                  from use of our services. Our total liability in any circumstance is limited to
                  the amount paid in the most recent billing period.
                </p>
              </div>

              {/* 9. Changes to These Terms */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  9. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms at any time. Clients will be notified of material
                  changes by email with 14 days&rsquo; notice.
                </p>
              </div>

              {/* 10. Governing Law */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  10. Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of Western Australia, Australia. Any disputes
                  will be resolved under Australian jurisdiction.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-prysmn-charcoal mb-4">
                  Contact
                </h2>
                <p>
                  For any questions about these Terms:{' '}
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
