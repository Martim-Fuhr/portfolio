import React, { useState, useContext } from 'react'
import Sidebar from '../Sidebar'
import Switch from 'react-switch'
import { useBreakpoints } from '../../hooks/use-breakpoints'
import { ThemeContext } from 'styled-components'

import {
  HeaderSection,
  ProfileInfo,
  SpanName,
  SpanDesk,
  HamburgerIcon,
} from './style'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const [sidebar, setSidebar] = useState(false)
  const { isMobile } = useBreakpoints()
  const { colors, title } = useContext(ThemeContext)

  const showSideBar = () => setSidebar(!sidebar)
  return (
    <HeaderSection>
      <HamburgerIcon
        className={sidebar ? 'icon iconActive' : 'icon'}
        onClick={showSideBar}
      >
        <div className="hamburger hamburgerIcon" />
      </HamburgerIcon>
      <ProfileInfo>
        <SpanName>
          {'Martim Führ'}
          <SpanDesk>Web Developer</SpanDesk>
        </SpanName>
      </ProfileInfo>
      <Switch
        className={'switchClass'}
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={isMobile ? 35 : 40}
        height={isMobile ? 15 : 15}
        handleDiameter={25}
        offColor={colors.secondary}
        onColor={colors.primary}
      />
      {sidebar && <Sidebar active={setSidebar} />}
    </HeaderSection>
  )
}

export default Header
