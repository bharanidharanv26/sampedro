/**
 * Central contact configuration.
 * Replace the placeholder values below with Sam's real details:
 *  - email: full address (used in mailto:)
 *  - phone: full number in international format (used in tel:)
 *  - instagramUsername / linkedinUrl / whatsappNumber
 * Nothing here is invented — every value is an obvious placeholder until updated.
 */
export interface Connection {
  id: 'gmail' | 'phone' | 'instagram' | 'whatsapp' | 'linkedin'
  label: string
  displayValue: string
  href: string
  description: string
  external: boolean
}

const PLACEHOLDER_EMAIL = 'your.email@gmail.com' // TODO: replace with Sam's Gmail address
const PLACEHOLDER_PHONE_DISPLAY = '+91 00000 00000' // TODO: replace with Sam's phone number
const PLACEHOLDER_PHONE_TEL = '+910000000000' // TODO: keep digits + country code only
const INSTAGRAM_URL = 'https://www.instagram.com/' // TODO: append Sam's username
const WHATSAPP_URL = 'https://wa.me/' // TODO: append digits-only number after the slash
const LINKEDIN_URL = 'https://www.linkedin.com/' // TODO: append Sam's profile path

export const connections: Connection[] = [
  {
    id: 'gmail',
    label: 'Gmail',
    displayValue: PLACEHOLDER_EMAIL,
    href: `mailto:${PLACEHOLDER_EMAIL}`,
    description: 'For anything thoughtful, formal or long-form.',
    external: false,
  },
  {
    id: 'phone',
    label: 'Phone',
    displayValue: PLACEHOLDER_PHONE_DISPLAY,
    href: `tel:${PLACEHOLDER_PHONE_TEL}`,
    description: 'A call, when words are better spoken.',
    external: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    displayValue: '@instagram',
    href: INSTAGRAM_URL,
    description: 'Photographs, moments and everyday chapters.',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    displayValue: 'Message on WhatsApp',
    href: WHATSAPP_URL,
    description: 'The fastest way to say hello.',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    displayValue: 'Connect on LinkedIn',
    href: LINKEDIN_URL,
    description: 'Professional journeys and laboratory science.',
    external: true,
  },
]
