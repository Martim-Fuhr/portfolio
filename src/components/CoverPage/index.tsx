'use client'

import { IMAGES } from '@/images'
import Image from 'next/image'
import { FaHandSpock } from 'react-icons/fa'
import { Contact } from '@/components/mid-site/Contact'
import { Profile, TextWrapper } from './styles'
import { useBreakpoints } from '@/hooks/use-breakpoints'

export function CoverPage() {
  const { isMobile } = useBreakpoints()
  function renderImageSection() {
    return (
      <Image
        src={IMAGES.PROFILE}
        priority={true}
        width={isMobile ? 300 : 350}
        height={isMobile ? 300 : 350}
        alt="foto de perfil Martim Fuhr"
        className="flex rounded-full "
      />
    )
  }

  function handleDownload() {
    const userConfirmed = window.confirm(
      'Você deseja realmente baixar o arquivo?',
    )

    if (userConfirmed) {
      const link = document.createElement('a')
      link.href = '/files/Curriculo-Martim.pdf'
      link.download = 'Curriculo-Martim.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  function renderDownloadButton() {
    return (
      <button
        onClick={handleDownload}
        className="flex items-center w-[200px] h-[40px] my-5 mx-auto bg-blue-800 text-white rounded-3xl hover:bg-blue-600 transition-colors duration-300 justify-center"
      >
        Download Resume
      </button>
    )
  }

  return (
    <Profile id="home">
      {renderImageSection()}

      <TextWrapper className="w-full justify-center">
        <p className="flex items-center leading-4 font-serif text-sm sm:text-lg">
          Olá! Me chamo Martim Fuhr, sou
        </p>
        <div className="flex w-full relative">
          <h2 className="h2-function text-7xl font-bold font-sans">
            Desenvolvedor <br />
            Frontend
          </h2>
          <div className="hidden md:block absolute right-0 bottom-0">
            <Contact />
          </div>
        </div>

        <p className="text-base pt-2 normal-case leading-4">
          Sinta-se à vontade para explorar. Você também pode baixar meu
          currículo.
        </p>
        {renderDownloadButton()}
      </TextWrapper>
      <div className="block md:hidden pt-3">
        <Contact />
      </div>
    </Profile>
  )
}

export default CoverPage
