import React from 'react'
import { Container, LinkList, InfoList, SpanOverlay } from './styles'

import { FaArrowLeft } from 'react-icons/fa'

export function Sidebar({ active }: any) {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <>
      <Container sidebar={active}>
        <FaArrowLeft onClick={closeSidebar} />
        <InfoList>
          <LinkList>About</LinkList>
        </InfoList>
        <InfoList>
          <LinkList>Skills</LinkList>
        </InfoList>
        <InfoList>
          <LinkList>Experience</LinkList>
        </InfoList>
        <InfoList>
          <LinkList>Contact</LinkList>
        </InfoList>
      </Container>
      <SpanOverlay onClick={closeSidebar} />
    </>
  )
}
export default Sidebar
