import { motion } from 'framer-motion'
import { images, profile } from '@/data/profile'
import { itemFadeUp, stagger } from '@/lib/motion'
import { useSeo } from '@/lib/useSeo'

export default function Home() {
  useSeo(
    'Sam — Lab Technologist · Singer',
    'The personal website of Sam — Lab Technologist and Singer. Science in his profession, music in his soul.',
  )

  return (
    <section className="relative flex h-[100svh] w-full flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb absolute -top-40 left-[-12%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(216,185,138,0.14),transparent_65%)] blur-2xl" />
        <div
          className="orb absolute bottom-[-15%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(120,150,200,0.12),transparent_65%)] blur-2xl"
          style={{ animationDelay: '-7s' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(8,9,11,0.85)_100%)]" />
      </div>

      <div
        aria-hidden
        className="hero-portrait-mask pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block"
      >
        <img
          src={images.heroPortrait}
          alt=""
          className="h-full w-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-28 text-center sm:pb-32 lg:items-start lg:text-left"
      >
        <motion.h1
          variants={itemFadeUp}
          className="font-display text-[clamp(4.5rem,17vw,12.5rem)] font-light leading-[0.85] tracking-[-0.03em] text-ivory"
        >
          SAM
          <span className="text-champagne">.</span>
        </motion.h1>

        <motion.div
          variants={itemFadeUp}
          className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:gap-8"
        >
          <p className="font-display text-[clamp(1.35rem,4.2vw,2.4rem)] leading-tight text-ivory">
            {profile.identities.professional}
          </p>
          <span
            aria-hidden
            className="h-10 w-px bg-gradient-to-b from-transparent via-champagne/70 to-transparent sm:h-12 sm:bg-gradient-to-r sm:from-transparent sm:via-champagne/70 sm:to-transparent"
          />
          <p className="font-display text-[clamp(1.35rem,4.2vw,2.4rem)] italic leading-tight text-champagne-soft">
            {profile.identities.creative}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
