export const BOOKING_URL =
  'https://getsquire.com/booking/book/moda-studios-garden-city'

export const INSTAGRAM_URL = 'https://www.instagram.com/modastudiosofficial/'

export const SITE_NAME = 'MODA STUDIOS'

export const LOCATION = {
  name: 'MoDA Studios',
  area: 'Garden City, NY',
  address: 'Garden City, New York',
  hours: [
    { days: 'Tuesday – Saturday', time: 'By appointment' },
    { days: 'Sunday – Monday', time: 'Closed' },
  ],
}

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48347.5!2d-73.634!3d40.7268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27f8b8b8b8b8b%3A0x0!2sGarden%20City%2C%20NY!5e0!3m2!1sen!2sus!4v1'

export type Barber = {
  name: string
  image: string
  bookingUrl: string
  bio: string
  highlights: { label: string; value: string }[]
}

export const BARBERS: Barber[] = [
  {
    name: 'Shawn B',
    image: `${import.meta.env.BASE_URL}barbers/shawn-b.png`,
    bookingUrl:
      'https://getsquire.com/booking/book/moda-studios-garden-city/barber/shaun-blends/services',
    bio: 'Precision fades, modern textures, and consultation-first cuts tailored to your look and lifestyle.',
    highlights: [
      { label: 'Approach', value: 'Consultation-led' },
      { label: 'Specialty', value: 'Fades & texture' },
    ],
  },
  {
    name: 'Patrick G',
    image: `${import.meta.env.BASE_URL}barbers/patrick-g.png`,
    bookingUrl:
      'https://getsquire.com/discover/barbershop/moda-studios-garden-city/barber/patrick-garcia-3',
    bio: 'The Moda Experience — personal consultation, precision scissor work, and detailed grooming from start to finish.',
    highlights: [
      { label: 'Approach', value: 'The Moda Experience' },
      { label: 'Specialty', value: 'Precision grooming' },
    ],
  },
]
