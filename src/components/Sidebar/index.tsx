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
          <Link href="#home" scroll={true}>
            Home
          </Link>
        </InfoList>

        <InfoList>
          <Link href="#entregas" scroll={true}>
            Principais entregas
          </Link>
        </InfoList>

        <InfoList>
          <Link href="#experiencia" scroll={true}>
            Experiência
          </Link>
        </InfoList>

        <InfoList>
          <Link href="#sobre" scroll={true}>
            Sobre mim
          </Link>
        </InfoList>

        <InfoList>
          <Link href="#habilidades" scroll={true}>
            Habilidades
          </Link>
        </InfoList>
      </Container>
      <SpanOverlay sidebar={!active.toString()} onClick={closeSidebar} />
    </>
  )
}
export default Sidebar
