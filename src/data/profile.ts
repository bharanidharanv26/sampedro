import heroPortrait from '@/assets/images/hero-portrait.jpg'
import aboutPortrait from '@/assets/images/about-portrait.jpg'
import labWork from '@/assets/images/lab-work.jpg'
import singing from '@/assets/images/singing.jpg'
import sports from '@/assets/images/sports.jpg'
import lifestyle from '@/assets/images/lifestyle.jpg'

export const images = {
  heroPortrait,
  aboutPortrait,
  labWork,
  singing,
  sports,
  lifestyle,
}

export const profile = {
  name: 'Sam',
  monogram: 'SAM',
  tagline: 'Science in my profession. Music in my soul.',
  concept: 'One person. Two passions. Countless memories.',
  identities: {
    professional: 'Lab Technologist',
    creative: 'Singer',
  },
  introduction: [
    "Sam is a Lab Technologist who approaches science with patience and precision, and music with the same honesty he brings to the laboratory.",
    'He studied at Loyola College of Arts and Science and Madras Medical College (MMC), and currently works as a Lab Technologist at ESI Hospital.',
    'Away from the bench, his world fills with singing, music, songwriting and composition — the creative side of a person who believes a life can hold more than one passion.',
  ],
  qualities: [
    'Laboratory knowledge',
    'Attention to detail',
    'Teamwork',
    'Communication',
    'Adaptability',
    'Creativity',
    'Dedication',
    'Passion for learning',
    'Musical creativity',
  ],
}

export interface TimelineItem {
  id: string
  type: 'education' | 'experience'
  organisation: string
  role: string
  detail?: string
  current?: boolean
}

export const timeline: TimelineItem[] = [
  {
    id: 'edu-mmc',
    type: 'education',
    organisation: 'Madras Medical College (MMC)',
    role: 'DMLT — Diploma in Medical Laboratory Technology',
  },
  {
    id: 'edu-loyola',
    type: 'education',
    organisation: 'Loyola College of Arts and Science',
    role: 'B.Sc. Advanced Zoology and Biotechnology',
  },
  {
    id: 'exp-billroth',
    type: 'experience',
    organisation: 'Billroth Hospital',
    role: 'Lab Technologist',
    detail: 'Worked for 1 year and 6 months',
  },
  {
    id: 'exp-prime',
    type: 'experience',
    organisation: 'Prime Gen Lab',
    role: 'Lab Technologist',
    detail: 'Worked for 3 months',
  },
  {
    id: 'exp-esi',
    type: 'experience',
    organisation: 'ESI Hospital',
    role: 'Lab Technologist',
    detail: 'Currently working here',
    current: true,
  },
]
