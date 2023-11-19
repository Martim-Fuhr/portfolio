import React from 'react'
import { Container, InfoList, SpanOverlay } from './styles'

import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export function Sidebar({ active }: any) {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <>
      <Container sidebar={active} onClick={closeSidebar}>
        <FaArrowLeft onClick={closeSidebar} />
        <InfoList>
          <Link href="#home" scroll={false}>
            Home
          </Link>
        </InfoList>
        <InfoList>
          <Link href="#about" scroll={false}>
            About
          </Link>
        </InfoList>
        <InfoList>
          <Link href="#experience" scroll={false}>
            Experience
          </Link>
        </InfoList>
        <InfoList>
          <Link href="#skills'" scroll={false}>
            Skills
          </Link>
        </InfoList>
        <InfoList>
          <Link href="#contact" scroll={false}>
            Contact
          </Link>
        </InfoList>
      </Container>
      <SpanOverlay onClick={closeSidebar} />
    </>
  )
}
export default Sidebar
