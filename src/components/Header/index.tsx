'use client'

import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'

import {
  HeaderSection,
  ProfileInfo,
  SpanName,
  SpanDesk,
  HamburgerIcon,
} from './styles'

export function Header() {
  const [sidebar, setSidebar] = useState(false)

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setIsHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 200,
      )
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const showSideBar = () => setSidebar(!sidebar)
  return (
    <HeaderSection
      style={{
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
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
      {sidebar && <Sidebar setActive={setSidebar} active={sidebar} />}
    </HeaderSection>
  )
}

export default Header
