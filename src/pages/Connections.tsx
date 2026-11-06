import { motion } from 'framer-motion'
import { ArrowUpRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { connections } from '@/data/connections'
import { itemFadeUp, stagger } from '@/lib/motion'
import { useSeo } from '@/lib/useSeo'

const iconMap: Record<string, LucideIcon> = {
  gmail: Mail,
  phone: Phone,
  instagram: Instagram,
  whatsapp: WhatsAppIcon as unknown as LucideIcon,
  linkedin: Linkedin,
}

export default function Connections() {
  useSeo(
    "Let's Connect — Sam",
    'Feel free to connect with Sam — Lab Technologist and Singer — by email, phone, Instagram, WhatsApp or LinkedIn.',
  )

  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      <div
        aria-hidden
        className="orb absolute right-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(216,185,138,0.12),transparent_65%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 pb-32 sm:px-8">
        <SectionTitle
          label="Connections"
          title="Let's Connect"
          intro="Feel free to connect with me, share a thought, or just say hello."
          align="center"
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 space-y-4"
        >
          {connections.map((connection) => {
            const Icon = iconMap[connection.id]
            return (
              <motion.li key={connection.id} variants={itemFadeUp}>
                <a
                  href={connection.href}
                  target={connection.external ? '_blank' : undefined}
                  rel={connection.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-5 rounded-3xl glass px-6 py-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne/30 hover:shadow-[0_18px_60px_-24px_rgba(216,185,138,0.35)] sm:gap-7 sm:px-8"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-champagne transition-colors duration-500 group-hover:border-champagne/40 group-hover:bg-champagne/10">
                    <Icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="label-caps block text-mist-dim">
                      {connection.label}
                    </span>
                    <span className="mt-1.5 block truncate font-display text-xl text-ivory sm:text-2xl">
                      {connection.displayValue}
                    </span>
                    <span className="mt-1 block text-sm text-mist-dim">
                      {connection.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-mist-dim transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne"
                    aria-hidden
                  />
                </a>
              </motion.li>
            )
          })}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-16 max-w-md text-center font-display text-xl italic leading-relaxed text-mist"
        >
          Whether it's laboratory science, a song, or a simple hello — every
          message is welcome.
        </motion.p>
      </div>
    </section>
  )
}
