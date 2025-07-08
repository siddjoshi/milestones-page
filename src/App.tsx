import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import TimelineNavigation from './components/TimelineNavigation'
import TimelineContainer from './components/TimelineContainer'
import CapabilitiesSection from './components/CapabilitiesSection'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

export type TimelineType = 'lti' | 'mindtree' | 'merger'

function App() {
  const [activeTimeline, setActiveTimeline] = useState<TimelineType>('lti')

  return (
    <div className="app">
      <BackgroundAnimation />
      <HeroSection />
      <TimelineNavigation 
        activeTimeline={activeTimeline} 
        setActiveTimeline={setActiveTimeline} 
      />
      <TimelineContainer activeTimeline={activeTimeline} />
      <CapabilitiesSection />
      <Footer />
    </div>
  )
}

export default App
