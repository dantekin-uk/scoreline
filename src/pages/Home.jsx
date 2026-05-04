import React from 'react'
import Hero from '../components/Hero'
import StatsFloatingDock from '../components/StatsFloatingDock'
import Partners from '../components/Partners'
import Services from '../components/Services'
import { Shield, CheckCircle2, ArrowRight, Users, Briefcase, Heart } from 'lucide-react'

const Home = () => {
  return (
    <main>
      <Hero />

      {/* Floating Dock Stats */}
      <section className="relative pt-0 pb-0 bg-neutral">
        <StatsFloatingDock />
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Recommended Services Section */}
      <Services />

      {/* Features/Stats Section */}
    </main>
  )
}

export default Home
