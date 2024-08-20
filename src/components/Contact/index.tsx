'use client'

import Link from 'next/link'
import { SocialMedias } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const SOCIAL_MEDIA = {
  LINKEDIN: 'https://www.linkedin.com/in/martim-fuhr/',
  GITHUB: 'https://github.com/Martim-Fuhr',
  INSTAGRAM: 'https://www.instagram.com/martimfuhr/',
}

export function Contact() {
  return (
    <SocialMedias>
      <div className="flex gap-10 md:gap-5">
        <Link
          href={SOCIAL_MEDIA.LINKEDIN}
          className="linkedin "
          target="_blank"
        >
          <FaLinkedinIn size={38} />
        </Link>

        <Link href={SOCIAL_MEDIA.GITHUB} className="github" target="_blank">
          <AiFillGithub size={38} />
        </Link>

        <Link
          href={SOCIAL_MEDIA.INSTAGRAM}
          className="instagram"
          target="_blank"
        >
          <BsInstagram size={38} />
        </Link>
      </div>
    </SocialMedias>
  )
}

export default Contact
