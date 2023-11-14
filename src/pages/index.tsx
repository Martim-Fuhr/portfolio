import { NextPage } from 'next'

import styled from 'styled-components'
// import TypeWrite from '../components/TypeWrite'
import Head from 'next/head'
import { CoverPage } from '@/components/mid-site/CoverPage'
import { About } from '@/components/mid-site/About'
import { Experiences } from '@/components/mid-site/Experience'
import { Skills } from '@/components/mid-site/Skills'

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
        <Skills />
      </Container>
    </>
  )
}

export default Home
