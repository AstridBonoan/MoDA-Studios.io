export const BOOKING_URL =
  'https://getsquire.com/booking/book/moda-studios-garden-city'

export const INSTAGRAM_HANDLE = 'modastudiosofficial'

export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`

export const SITE_NAME = 'MODA STUDIOS'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const HERO_IMAGE = asset('hero-scissors.jpg')

export const GALLERY_ITEMS = [
  {
    id: 'chair',
    src: asset('gallery/08-chair.jpg'),
    alt: 'Premium barber chair at MODA STUDIOS',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'studio',
    src: asset('gallery/04-studio.jpg'),
    alt: 'Modern barbershop studio interior',
    span: '',
  },
  {
    id: 'cut',
    src: asset('gallery/02-cut.jpg'),
    alt: 'Precision haircut in progress',
    span: '',
  },
  {
    id: 'beard',
    src: asset('gallery/03-beard.jpg'),
    alt: 'Beard grooming and detailing',
    span: 'md:col-span-2',
  },
  {
    id: 'style',
    src: asset('gallery/06-style.jpg'),
    alt: 'Finished style and texture',
    span: '',
  },
  {
    id: 'tools',
    src: asset('gallery/05-tools.jpg'),
    alt: 'Professional barbering tools',
    span: '',
  },
  {
    id: 'detail',
    src: asset('gallery/07-detail.jpg'),
    alt: 'Close-up grooming detail',
    span: '',
  },
] as const

export const SERVICE_IMAGES = {
  moda: asset('gallery/08-chair.jpg'),
  haircutBeard: asset('gallery/02-cut.jpg'),
  fade: asset('gallery/09-haircut.jpg'),
  texture: asset('gallery/06-style.jpg'),
  grooming: asset('gallery/03-beard.jpg'),
} as const

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
    image: asset('barbers/shawn-b.png'),
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
    image: asset('barbers/patrick-g.png'),
    bookingUrl:
      'https://getsquire.com/discover/barbershop/moda-studios-garden-city/barber/patrick-garcia-3',
    bio: 'The Moda Experience — personal consultation, precision scissor work, and detailed grooming from start to finish.',
    highlights: [
      { label: 'Approach', value: 'The Moda Experience' },
      { label: 'Specialty', value: 'Precision grooming' },
    ],
  },
]
