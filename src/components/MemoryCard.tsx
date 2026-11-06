import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { useState } from 'react'
import type { Memory } from '@/data/memories'
import { ease } from '@/lib/motion'

interface MemoryCardProps {
  memory: Memory
  index: number
}

export default function MemoryCard({ memory, index }: MemoryCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease, delay: (index % 3) * 0.08 }}
      className="group"
    >
      <div className="memory-scene">
        <button
          type="button"
          onClick={() => setFlipped((value) => !value)}
          aria-pressed={flipped}
          aria-label={
            flipped
              ? `${memory.title} — show photograph again`
              : `${memory.title} — turn the card over to read the note`
          }
          className={`memory-card ${flipped ? 'is-flipped' : ''}`}
        >
          <div className="memory-face memory-front">
            <img
              src={memory.image}
              alt={memory.alt}
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
              <div>
                <p className="label-caps text-champagne">0{(index % 9) + 1}</p>
                <h3 className="mt-2 font-display text-2xl text-ivory">{memory.title}</h3>
              </div>
              <span className="label-caps shrink-0 rounded-full border border-white/15 bg-ink/50 px-3 py-1.5 text-[0.6rem] text-mist backdrop-blur-md transition-colors group-hover:border-champagne/40 group-hover:text-champagne-soft">
                Turn over
              </span>
            </div>
          </div>

          <div className="memory-face memory-back glass flex flex-col items-center justify-center gap-5 p-8 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/30 text-champagne">
              <RotateCcw className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <h3 className="font-display text-2xl text-ivory">{memory.title}</h3>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />
            <p className="max-w-[26ch] font-display text-lg italic leading-relaxed text-champagne-soft/90">
              {memory.note}
            </p>
            <span className="label-caps mt-2 text-mist-dim">Back to photo</span>
          </div>
        </button>
      </div>
    </motion.li>
  )
}
