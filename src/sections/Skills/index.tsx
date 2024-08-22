'use client'

import { useBreakpoints } from '@/hooks/use-breakpoints'

import { IconContext } from 'react-icons'
import { SkillSection, TextParagraph } from './styles'
import { FaReact, FaGitAlt, FaLaravel } from 'react-icons/fa'
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { TbBrandNextjs, TbBrandNodejs } from 'react-icons/tb'
import {
  SiPhp,
  SiStyledcomponents,
  SiGoogleoptimize,
  SiGoogletagmanager,
} from 'react-icons/si'

export function Skills() {
  const { isMobile } = useBreakpoints()

  return (
    <SkillSection id="skills">
      <h2>Skills</h2>
      <TextParagraph>
        E aqui se encontra um pouco daquilo que sei...
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
          <SiPhp className="php" title="PHP" />
          <FaLaravel className="lrv" title="Laravel" />
          <SiGoogleoptimize className="go" title="Google Optimize" />
          <SiGoogletagmanager className="gtm" title="Google Tag Manager" />
        </div>
      </IconContext.Provider>
    </SkillSection>
  )
}

export default Skills
