'use client'

import { IMAGES } from '@/images'
import Image from 'next/image'
import { FaHandSpock } from 'react-icons/fa'
import { Contact } from '@/components/mid-site/Contact'
import { Profile, ImageSection, TextParagraph } from './styles'
// import './index.scss'
import Link from 'next/link'

export function CoverPage() {
  return (
    <Profile id="home">
      <ImageSection>
        <Image
          src={IMAGES.PROFILE}
          priority={true}
          width={400}
          height={400}
          alt="foto de perfil Martim Fuhr"
          className="flex rounded-full max-h-96 h-1/3"
        />

        <TextParagraph>
          <p>
            <FaHandSpock className="inline-block mr-1.5" />
            Olá! Me chamo Martim Fuhr, e sou
          </p>
          <h2>Desenvolvedor Front-End React.js</h2>
          <p>E tenho 02 anos de experiência na area</p>
          <Link href="#experience" scroll={false}>
            Pensar algo legal pra fazer aqui
          </Link>
          <Contact />
        </TextParagraph>
      </ImageSection>
    </Profile>
  )
}

export default CoverPage
