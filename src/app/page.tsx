import { About } from '@/components/mid-site/About'
import { Experiences } from '@/components/mid-site/Experience'
import { Skills } from '@/components/mid-site/Skills'

import CoverPage from '@/components/CoverPage'

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col m-auto max-w-screen-2xl overflow-x-hidden">
        <CoverPage />
        <About />
        <Experiences />
        <Skills />
      </div>
    </>
  )
}
