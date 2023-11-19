import React from 'react'

import { useBreakpoints } from '@/hooks/use-breakpoints'

import { IconContext } from 'react-icons'
import { Profile, TextParagraph } from './styles'
import { FaReact, FaGitAlt } from 'react-icons/fa'
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { TbBrandNextjs, TbBrandNodejs } from 'react-icons/tb'
import {
  SiStyledcomponents,
  SiGoogleoptimize,
  SiGoogletagmanager,
} from 'react-icons/si'

export function Skills() {
  const { isMobile } = useBreakpoints()
  console.log(isMobile)

  return (
    <Profile id="skills'">
      <h2>Skills</h2>
      <TextParagraph>
        Here is a bit of what I know and continue to learn:
      </TextParagraph>
      <IconContext.Provider value={{ size: `${isMobile ? 60 : 100}` }}>
        <div className="flex flex-wrap w-full gap-5">
          <FaReact className="react" title="React JS" />
          <BiLogoJavascript className="js" title="JavaScript" />
          <BiLogoTypescript className="ts" title="TypeScript" />
          <TbBrandNextjs className="next" title="Next JS" />
          <SiStyledcomponents className="stc" title="Styled Components" />
          <BiLogoTailwindCss className="tw" title="TailWind CSS" />
          <FaGitAlt className="git" title="Git" />
          <TbBrandNodejs className="node" title="Node JS" />
          <SiGoogleoptimize className="go" title="Google Optimize" />
          <SiGoogletagmanager className="gtm" title="Google Tag Manager" />
        </div>
      </IconContext.Provider>
    </Profile>
  )
}

export default Skills
