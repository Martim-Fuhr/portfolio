import React from 'react'
import { IMAGES } from '@/images'
import Image from 'next/image'
import { FaHandSpock } from 'react-icons/fa'
import { Contact } from '@/components/mid-site/Contact'
import { Profile, ImageSection, TextParagraph } from './styles'
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
          <FaHandSpock className="inline-block mr-1.5" />
          Hello! I{"'"}m Martim Führ, a 25-year-old with 2 years of experience
          as a Frontend Developer. To learn more about me and my journey, you
          can{' '}
          <Link href="#experience" scroll={false}>
            click here!
          </Link>
          <Contact />
        </TextParagraph>
      </ImageSection>
    </Profile>
  )
}

export default CoverPage
