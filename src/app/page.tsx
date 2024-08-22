import dynamic from 'next/dynamic'

// const CoverPage = dynamic(() => import('@/components/sections/CoverPage'), {
//   ssr: false,
// })

// const Carousel = dynamic(() => import('@/components/sections/Carousel'), {
//   ssr: false,
// })

const Experiences = dynamic(() => import('@/components/sections/Experience'), {
  ssr: false,
})

const About = dynamic(() => import('@/components/sections/About'), {
  ssr: false,
})

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  ssr: false,
})

import { CoverPage } from '@/components/sections/CoverPage'
import { Carousel } from '@/components/sections/Carousel'
 
export default function Home() {
  return (
    <><CoverPage /><Carousel /><Experiences /><About /><Skills /></>
  )
}
