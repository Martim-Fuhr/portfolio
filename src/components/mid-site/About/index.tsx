import React from 'react'

import { Profile, TextParagraph } from './styles'

export function About() {
  return (
    <Profile>
      <h2 id="about">About</h2>
      <TextParagraph>
        My name is Martim Fuhr, I&apos;m 25 years old, and I live in Brazil, in
        the in the state of Rio Grande do Sul. I&apos;ve been working as a
        Frontend Developer for 2 years, with a strong focus on ReactJs. I began
        my journey in the programming field with a Technical Course in
        2015/2016. However, it was in 2021 when I enrolled in a FullStack
        Development course offered by GrowDev that I gained my first
        professional experience in the industry at @Arezzo&Co through a young
        talent program. We were selected for a full-time internship program and
        were soon offered full-time positions, where I stayed until March 2023.
        Currently, I&apos;m in my 3rd semester of Analysis and Systems
        Development at the University of Vale dos Sinos (UNISINOS), in addition
        to taking extra courses from platforms like Udemy and Rocketseat.
      </TextParagraph>
    </Profile>
  )
}

export default About
