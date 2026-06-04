/**
 * Prysmn Business Configuration
 *
 * Update these values with your real business details before deploying.
 * All components reference this single source of truth.
 */

export const businessConfig = {
  /** E.164 format for tel: links */
  phoneHref: 'tel:+61400000000',

  /** Human-readable display format */
  phoneDisplay: '0400 000 000',

  email: 'hello@prysmn.com',

  businessName: 'Prysmn',
} as const
