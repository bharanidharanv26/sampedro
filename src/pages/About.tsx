import { motion } from 'framer-motion'
import {
  AudioLines,
  Briefcase,
  Dna,
  FlaskConical,
  GraduationCap,
  MicVocal,
  Microscope,
  Music,
  PenLine,
  Trophy,
  Goal,
  Volleyball,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionTitle from '@/components/SectionTitle'
import { images, profile, timeline } from '@/data/profile'
import { itemFadeUp, stagger } from '@/lib/motion'
import { useSeo } from '@/lib/useSeo'

interface InterestItem {
  icon: LucideIcon
  name: string
}

const interestGroups: { label: string; title: string; blurb: string; items: InterestItem[] }[] = [
  {
    label: '01',
    title: 'Music & Creativity',
    blurb: 'The part of the day measured in melodies instead of minutes.',
    items: [
      { icon: MicVocal, name: 'Singing' },
      { icon: Music, name: 'Music' },
      { icon: PenLine, name: 'Songwriting' },
      { icon: AudioLines, name: 'Music composition' },
    ],
  },
  {
    label: '02',
    title: 'Sports',
    blurb: 'Team, timing and the joy of playing for the love of the game.',
    items: [
      { icon: Trophy, name: 'Cricket' },
      { icon: Goal, name: 'Football' },
      { icon: Volleyball, name: 'Volleyball' },
    ],
  },
  {
    label: '03',
    title: 'Professional Passion',
    blurb: 'Science as a craft — curious, careful and always learning.',
    items: [
      { icon: FlaskConical, name: 'Laboratory technology' },
      { icon: Microscope, name: 'Medical laboratory science' },
      { icon: Dna, name: 'Scientific learning' },
    ],
  },
]

export default function About() {
  useSeo(
    'About Sam — Lab Technologist & Singer',
    'Sam is a Lab Technologist who studied at Loyola College of Arts and Science and Madras Medical College, and currently works at ESI Hospital — with a deep passion for singing and music.',
  )

  return (
    <>
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div
          aria-hidden
          className="orb absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(216,185,138,0.12),transparent_65%)] blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-end gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemFadeUp} className="label-caps text-champagne">
              About
            </motion.p>
            <motion.h1
              variants={itemFadeUp}
              className="mt-6 font-display text-[clamp(2.8rem,7vw,5rem)] leading-[0.98] tracking-[-0.02em] text-ivory"
            >
              The story
              <br />
              so far.
            </motion.h1>
            <motion.div variants={itemFadeUp} className="mt-10 max-w-xl space-y-5 text-[1.05rem] leading-relaxed text-mist">
              {profile.introduction.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </motion.div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] glass p-2">
              <img
                src={images.aboutPortrait}
                alt="Portrait of Sam, Lab Technologist and singer"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption className="mt-5 flex items-center justify-between px-2">
              <span className="font-display text-lg italic text-ivory">Sam</span>
              <span className="label-caps text-mist-dim">
                Lab Technologist · Singer
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36">
        <SectionTitle
          label="Path"
          title="Education & experience"
          intro="A vertical timeline of where Sam studied and where he has worked — presented as it is, without invented dates or titles."
        />

        <div className="relative mt-16">
          <div aria-hidden className="timeline-spine absolute bottom-4 left-5 top-2 w-px sm:left-[1.4rem]" />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-12"
          >
            {timeline.map((item) => {
              const isEducation = item.type === 'education'
              return (
                <motion.li
                  key={item.id}
                  variants={itemFadeUp}
                  className="relative flex gap-6 pl-0 sm:gap-8"
                >
                  <span
                    aria-hidden
                    className={`relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      isEducation
                        ? 'border-champagne/40 bg-ink text-champagne'
                        : 'border-white/15 bg-ink text-ivory/80'
                    }`}
                  >
                    {isEducation ? (
                      <GraduationCap className="h-4 w-4" />
                    ) : (
                      <Briefcase className="h-4 w-4" />
                    )}
                  </span>
                  <div className="min-w-0 pt-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`label-caps rounded-full border px-3 py-1 text-[0.6rem] ${
                          isEducation
                            ? 'border-champagne/30 text-champagne'
                            : 'border-white/15 text-mist'
                        }`}
                      >
                        {isEducation ? 'Education' : 'Experience'}
                      </span>
                      {item.current && (
                        <span className="label-caps rounded-full border border-emerald-300/25 px-3 py-1 text-[0.6rem] text-emerald-200/90">
                          Present
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-[1.7rem] leading-tight text-ivory">
                      {item.organisation}
                    </h3>
                    <p className="mt-2 text-mist">{item.role}</p>
                    {item.detail && (
                      <p className="mt-1 text-sm text-mist-dim">{item.detail}</p>
                    )}
                  </div>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionTitle
            label="Interests"
            title="What fills the hours away from the bench"
            intro="Music, sport and science — three currents that run through Sam's everyday life."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {interestGroups.map((group) => (
              <Reveal key={group.title}>
                <article className="group h-full rounded-3xl glass p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
                  <span className="label-caps text-champagne">{group.label}</span>
                  <h3 className="mt-6 font-display text-2xl text-ivory">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-dim">{group.blurb}</p>
                  <ul className="mt-8 space-y-3">
                    {group.items.map(({ icon: Icon, name }) => (
                      <li
                        key={name}
                        className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 transition-colors duration-300 group-hover:border-white/10"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne/10 text-champagne">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-[0.95rem] text-ivory/90">{name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36">
        <SectionTitle
          label="Profile"
          title="How Sam works & lives"
          intro="Personal qualities rather than certifications — the traits people around him tend to notice."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {profile.qualities.map((quality, index) => (
            <motion.li
              key={quality}
              variants={itemFadeUp}
              className="group flex items-baseline gap-5 rounded-2xl glass px-6 py-5 transition-colors duration-300 hover:border-champagne/25"
            >
              <span className="font-display text-sm text-champagne">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[1.02rem] text-ivory/90">{quality}</span>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mt-16 text-center">
          <p className="mx-auto max-w-md font-display text-xl italic leading-relaxed text-mist">
            Curious in the laboratory. Honest in the music. Same person, both ways.
          </p>
        </Reveal>
      </section>
    </>
  )
}
