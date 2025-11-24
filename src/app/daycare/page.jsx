import React from 'react'
import FocusArea from '../components/FocusArea'
import HabitLearning from '../components/HabitLearning'
import SocializingProgram from '../components/SocializingProgram'
import DaycareCommunication from '../components/DaycareCommunication'
import DualProgramCard from '../components/DualProgramCard'

export default function page() {
  return (
    <div>
      <FocusArea />
      <HabitLearning />
      <SocializingProgram />
      <DaycareCommunication />
      <DualProgramCard />
    </div>
  )
}
