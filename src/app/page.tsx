import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CoverPage = dynamic(() => import('@/pages/CoverPage'), {
  ssr: false,
})

const Experiences = dynamic(() => import('@/pages/Experience'), {
  ssr: false,
})

const About = dynamic(() => import('@/pages/About'), {
  ssr: false,
})

const Skills = dynamic(() => import('@/pages/Skills'), {
  ssr: false,
})

const Carousel = dynamic(() => import('@/pages/Carousel'), {
  ssr: false,
})

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoverPage />
      <Carousel />
      <Experiences />
      <About />
      <Skills />
    </Suspense>
  )
}
