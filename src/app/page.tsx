import { CoverPage } from '@/components/sections/CoverPage'
import { Carousel } from '@/components/sections/Carousel'
import { Experiences } from '@/components/sections/Experience'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Reveal } from '@/components/motion/Reveal'

export default function Home() {
  return (
    <main>
      <Reveal>
        <CoverPage />
      </Reveal>
      <Reveal>
        <Carousel />
      </Reveal>
      <Reveal>
        <Experiences />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
    </main>
  )
}
