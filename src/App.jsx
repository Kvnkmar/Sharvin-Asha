import { useScrollAnimation } from './utils/hooks'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Family from './components/Family'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicToggle from './components/MusicToggle'

function getGuestName() {
  const params = new URLSearchParams(window.location.search)
  return params.get('name') || ''
}

export default function App() {
  // Initialize scroll-triggered animations
  useScrollAnimation()

  const guestName = getGuestName()

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero guestName={guestName} />
      <Story />
      <Family />
      <Countdown />
      <EventDetails />
      <Gallery />
      <RSVP guestName={guestName} />
      <Footer />
      <MusicToggle />
    </div>
  )
}
