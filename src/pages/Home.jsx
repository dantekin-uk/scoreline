import React from 'react'
import Hero from '../components/Hero'
import WordingPlane from '../components/WordingPlane'
import Pillers from '../components/Pillers'
import Technology from '../components/Technology'
import CTA from '../components/CTA'
import Globe from '../components/Globe'
import Services from '../components/Services'

const Home = () => {
  return (
    <main>
      <Hero />

      <WordingPlane />

      {/* Pillers Section */}
      <Pillers />

      {/* Recommended Services Section */}
      <Services />

      {/* Globe Section */}
      <Globe />

      {/* Technology Section */}
      <Technology />

      {/* CTA Section */}
      <CTA />

      {/* Features/Stats Section */}
    </main>
  )
}

export default Home
