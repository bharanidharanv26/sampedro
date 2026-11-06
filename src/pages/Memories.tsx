import MemoryCard from '@/components/MemoryCard'
import SectionTitle from '@/components/SectionTitle'
import { memories } from '@/data/memories'
import { useSeo } from '@/lib/useSeo'

export default function Memories() {
  useSeo(
    'Memories — Sam',
    'A photo album of moments worth keeping — photographs and notes from Sam’s journey.',
  )

  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      <div
        aria-hidden
        className="orb absolute left-[-12%] top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(216,185,138,0.1),transparent_65%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-32 sm:px-8">
        <SectionTitle
          label="Memories"
          title="Moments worth keeping"
          intro="A small album of photographs and the notes behind them. Tap or click any card to turn it over."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory, index) => (
            <MemoryCard key={memory.id} memory={memory} index={index} />
          ))}
        </ul>

        <p className="mt-16 text-center text-sm text-mist-dim">
          Some moments never fade.
        </p>
      </div>
    </section>
  )
}
