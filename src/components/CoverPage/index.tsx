import React from 'react'
import { IMAGES } from '@/images'
import Image from 'next/image'
import { FaHandSpock } from 'react-icons/fa'
import { Profile, ImageSection, TextParagraph } from './styles'

export function CoverPage() {
  return (
    <Profile>
      <ImageSection>
        <Image
          src={IMAGES.PROFILE}
          loading="lazy"
          width={400}
          height={400}
          alt="foto de perfil Martim Fuhr"
          className="flex rounded-full max-h-96 h-1/3"
        />

        <TextParagraph>
          <FaHandSpock className="inline-block mr-1.5" />
          Hello! I{"'"}m Martim Führ, a 25-year-old with 2 years of experience
          as a Frontend Developer. To learn more about me and my journey, you
          can click here!
        </TextParagraph>
      </ImageSection>
    </Profile>
  )
}

export default CoverPage
