import React from 'react'
import Contact from '../mid-site/Contact'
import styled from 'styled-components'

const Container = styled.footer`
  padding: 0 8%;
`

export function Footer() {
  return (
    <Container className="flex align-bottom justify-center flex-col">
      <Contact />
      <p id="contact" className="text-sm text-center">
        © 2023, Martim Fuhr
      </p>
    </Container>
  )
}

export default Footer
