import { motion } from 'framer-motion'
import { ease, fadeUp } from '@/lib/motion'

interface SectionTitleProps {
  label: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({ label, title, intro, align = 'left' }: SectionTitleProps) {
  const centered = align === 'center'

  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <p className="label-caps text-champagne">{label}</p>
      <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.06] tracking-[-0.01em] text-ivory">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-[1.05rem] leading-relaxed text-mist">
          {intro}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease, delay: 0.2 }}
        className={`mt-8 h-px w-24 origin-left bg-gradient-to-r from-champagne/70 to-transparent ${centered ? 'mx-auto' : ''}`}
      />
    </motion.header>
  )
}
