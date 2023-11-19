import React from 'react'

import Link from 'next/link'
import { SocialMedias } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiMailSendFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

const SOCIAL_MEDIA = {
  LINKEDIN: 'https://www.linkedin.com/in/martim-fuhr/',
  GITHUB: 'https://github.com/Martim-Fuhr',
  INSTAGRAM: 'https://www.instagram.com/martimfuhr/',
  OUTLOOK: 'mailto:martimfuhr@hotmail.com',
}

export function Contact() {
  return (
    <SocialMedias id="skills">
      <div className="flex flex-wrap justify-between max-w-md w-full">
        <Link href={SOCIAL_MEDIA.LINKEDIN} className="linkedin" target="_blank">
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

        <Link href={SOCIAL_MEDIA.OUTLOOK} className="outlook">
          <RiMailSendFill size={38} />
        </Link>
      </div>
    </SocialMedias>
  )
}

export default Contact
