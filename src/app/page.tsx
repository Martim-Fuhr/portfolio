import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CoverPage = dynamic(() => import('@/sections/CoverPage'), {
  ssr: false,
})

const Experiences = dynamic(() => import('@/sections/Experience'), {
  ssr: false,
})

const About = dynamic(() => import('@/sections/About'), {
  ssr: false,
})

const Skills = dynamic(() => import('@/sections/Skills'), {
  ssr: false,
})

const Carousel = dynamic(() => import('@/sections/Carousel'), {
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
