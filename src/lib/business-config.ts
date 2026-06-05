/**
 * Prysmn Business Configuration
 *
 * Single source of truth for all business-critical values.
 * All components reference these — change once, updates everywhere.
 */

export const businessConfig = {
  /** Booking page URL (GoHighLevel widget) */
  bookingUrl: 'https://api.leadconnectorhq.com/widget/bookings/prysmn_free_audit',

  email: 'john@prysmn.com',

  businessName: 'Prysmn',

  /** Founder name — used in legal pages */
  founderName: 'John Betes',

  /** Monthly price (AUD) */
  priceMonthly: 497,

  /** Formatted price string */
  get priceFormatted() { return `$${this.priceMonthly}/month` },
  get priceShort() { return `$${this.priceMonthly}/mo` },

  /** Setup timeframe */
  setupTimeframe: '48 hours',

  /** Average plumbing job value (AUD) — basis for loss calculations */
  avgJobValue: 320,

  /** Weekly revenue loss figure (AUD) */
  weeklyLoss: 700,

  /** Annual loss = weeklyLoss × 52 */
  get annualLoss() { return this.weeklyLoss * 52 },

  /** Text-back specific annual recovery estimate (AUD) */
  textBackAnnualRecovery: 14560,
} as const
