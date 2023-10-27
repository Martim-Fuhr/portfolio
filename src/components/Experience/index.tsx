import React from 'react'
import { useBreakpoints } from '@/hooks/use-breakpoints'
import { Profile } from './styles'
import { JobDescription } from './JobDescription'

export function Experiences() {
  const { isMobile } = useBreakpoints()

  console.log(!isMobile)

  return (
    <Profile>
      <h2>Experience</h2>
      <div className="exps">
        <div className="exps__date">06/2021 - 01/2022</div>
        <div className="exps__title">Frontend Developer Trainee</div>
        <JobDescription />
      </div>
      <div className="exps">
        <div className="exps__date">01/2022 - 03/2023</div>
        <div className="exps__title">Frontend Analyst I</div>
        <div className="exps__description">a fazer ainda essa bagaça</div>
      </div>
    </Profile>
  )
}

export default Experiences
