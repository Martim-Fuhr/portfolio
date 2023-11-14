import React from 'react'

import { Profile, TextParagraph } from './styles'
import { FaReact } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { useBreakpoints } from '@/hooks/use-breakpoints'

export function Skills() {
  const { isMobile } = useBreakpoints()
  return (
    <Profile>
      <h2>Skills</h2>
      <TextParagraph>
        Here is a bit of what I know and continue to learn:
      </TextParagraph>
      <div className="flex flex-wrap">
        <FaReact size={isMobile ? 60 : 100} />
        <BiLogoJavascript size={isMobile ? 60 : 100} />
        <BiLogoSass size={isMobile ? 60 : 100} />
        <BiLogoTypescript size={isMobile ? 60 : 100} />
        <TbBrandNextjs size={isMobile ? 60 : 100} />
      </div>
    </Profile>
  )
}

export default Skills
