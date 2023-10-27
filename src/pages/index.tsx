import { NextPage } from 'next'

import styled from 'styled-components'
// import TypeWrite from '../components/TypeWrite'
import Head from 'next/head'
import { CoverPage } from '../components/CoverPage'
import { About } from '@/components/About'
import { Experiences } from '@/components/Experience'
// import { Skills } from '../components/Skills'
// import { Contact } from '../components/Contact'
// import Image from 'next/image'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1520px;
  overflow-x: hidden;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Martim Führ | Portifolio</title>
      </Head>
      <Container>
        <CoverPage />
        <About />
        <Experiences />
        {/* <TypeWrite />
        <Image src="/svg.svg" alt="" width={500} height={50} />
        <About />
        <Image src="/svg.svg" alt="" width={500} height={50} />
        <Experiences />
        <Image src="/svg.svg" alt="" width={500} height={50} />
        <Skills />
        <Image src="/svg.svg" alt="" width={500} height={50} />
        <Contact />  */}
      </Container>
    </>
  )
}

export default Home
