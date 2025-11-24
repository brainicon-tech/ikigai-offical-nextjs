
import React from 'react'
import Curriculum from '../components/Curriculum'
import CurriculumModel from '../components/CurriculumModel'
import DevelopmentFocus from '../components/DevelopmentFocus'
import CommitmentTab from '../components/CommitmentTab'

export default function page() {
  return (
    <div className='bg-white-50'>
      <Curriculum />
      <CurriculumModel />
      <DevelopmentFocus />
      <CommitmentTab />
    </div>
  )
}
