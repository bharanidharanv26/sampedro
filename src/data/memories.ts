import labWork from '@/assets/images/lab-work.jpg'
import lifestyle from '@/assets/images/lifestyle.jpg'
import singing from '@/assets/images/singing.jpg'
import sports from '@/assets/images/sports.jpg'
import travelOne from '@/assets/images/travel-1.jpg'
import travelTwo from '@/assets/images/travel-2.jpg'
import travelThree from '@/assets/images/travel-3.jpg'

/**
 * Central photo album data.
 * To add a memory: drop the photo into `src/assets/images/`, import it above,
 * and push a new object into the `memories` array. To replace a photo, swap
 * its image path. To remove one, delete its entry — the grid adapts automatically.
 */
export interface Memory {
  id: string
  title: string
  note: string
  image: string
  alt: string
}

export const memories: Memory[] = [
  {
    id: 'memory-01',
    title: 'Somewhere New',
    note: 'A memory worth keeping forever.',
    image: travelOne,
    alt: 'Sam travelling — a scenic moment from one of his journeys',
  },
  {
    id: 'memory-02',
    title: 'Between the Notes',
    note: 'Where words fail, music speaks.',
    image: singing,
    alt: 'Sam singing — a quiet moment with music',
  },
  {
    id: 'memory-03',
    title: 'Golden Hour',
    note: 'Beautiful moments with beautiful people.',
    image: travelTwo,
    alt: 'A golden-hour travel photograph from Sam’s collection',
  },
  {
    id: 'memory-04',
    title: 'Game Day',
    note: 'Good times, unforgettable memories.',
    image: sports,
    alt: 'Sam playing sport — cricket, football and volleyball days',
  },
  {
    id: 'memory-05',
    title: 'At the Bench',
    note: 'Precision, patience, and purpose.',
    image: labWork,
    alt: 'Sam at work in the medical laboratory',
  },
  {
    id: 'memory-06',
    title: 'On the Road',
    note: 'Some moments never fade.',
    image: travelThree,
    alt: 'A travel photograph from one of Sam’s trips',
  },
  {
    id: 'memory-07',
    title: 'Off the Clock',
    note: 'Life, in no particular hurry.',
    image: lifestyle,
    alt: 'A relaxed lifestyle moment of Sam',
  },
]
