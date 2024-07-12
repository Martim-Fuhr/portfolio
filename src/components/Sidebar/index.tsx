import { Container, InfoList, SpanOverlay } from './styles'

import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

interface SidebarProps {
  active?: boolean | any
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export function Sidebar({ active, setActive }: SidebarProps) {
  const closeSidebar = () => {
    setActive(false)
  }

  return (
    <>
      <Container sidebar={active.toString()} onClick={closeSidebar}>
        <FaArrowLeft onClick={closeSidebar} />
        <InfoList>
          <Link href="#home" scroll={false}>
            Home
          </Link>
        </InfoList>
        <InfoList>
          <Link href="#about">About</Link>
        </InfoList>
        <InfoList>
          <Link href="#experience">Experience</Link>
        </InfoList>
        <InfoList>
          <Link href="#skills">Skills</Link>
        </InfoList>
        <InfoList>
          <Link href="#contact">Contact</Link>
        </InfoList>
      </Container>
      <SpanOverlay sidebar={!active.toString()} onClick={closeSidebar} />
    </>
  )
}
export default Sidebar
