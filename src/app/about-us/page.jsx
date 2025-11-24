import React from 'react'
import About from '../components/About'
import Advisors from '../components/Advisors'
import AboutUs from '../components/AboutUs'
import VisionMissionSection from '../components/VisionMission'
import BoardDirectors from '../components/BoardDirector'

export default function page() {
  return (
    <div>
      <AboutUs />
      <VisionMissionSection />
      <Advisors />
      <BoardDirectors />
    </div>
  )
}
