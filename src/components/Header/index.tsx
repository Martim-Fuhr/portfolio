'use client'

import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Sidebar from '../Sidebar'

import {
  HeaderSection,
  ProfileInfo,
  SpanName,
  SpanDesk,
  HamburgerIcon,
  ThemeButton,
} from './styles'

export function Header() {
  const [sidebar, setSidebar] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const current = document.documentElement.dataset.theme
    setTheme(current === 'light' ? 'light' : 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

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
        transition:
          'transform 0.3s ease-in-out, background-color 0.45s ease, color 0.45s ease',
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
          <SpanDesk>FullStack Developer</SpanDesk>
        </SpanName>
      </ProfileInfo>
      <ThemeButton
        type="button"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      >
        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
      </ThemeButton>
      {sidebar && <Sidebar setActive={setSidebar} active={sidebar} />}
    </HeaderSection>
  )
}

export default Header
