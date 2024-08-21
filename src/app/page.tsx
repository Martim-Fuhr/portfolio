import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CoverPage = dynamic(() => import('@/layouts/CoverPage'), {
  ssr: false,
})

const Experiences = dynamic(() => import('@/layouts/Experience'), {
  ssr: false,
})

const About = dynamic(() => import('@/layouts/About'), {
  ssr: false,
})

const Skills = dynamic(() => import('@/layouts/Skills'), {
  ssr: false,
})

const Carousel = dynamic(() => import('@/layouts/Carousel'), {
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
