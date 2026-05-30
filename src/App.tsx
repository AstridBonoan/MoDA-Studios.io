import { Booking } from './components/Booking'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { MeetBarber } from './components/MeetBarber'
import { Navbar } from './components/Navbar'
import { Philosophy } from './components/Philosophy'
import { Services } from './components/Services'

function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Gallery />
        <MeetBarber />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
