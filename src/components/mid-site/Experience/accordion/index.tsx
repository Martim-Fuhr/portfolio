'use client'

import React, { ReactNode, useState } from 'react'
import AccordionStyle from './styled'

interface AccordionProps {
  title: ReactNode
  children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionStyle>
      <button
        className={`accordion-title ${isOpen ? 'open' : 'close'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="accordion-name-title w-full">{title}</h3>
      </button>
      <ul className={`accordion-content ${isOpen ? 'show' : ''}`}>
        {children}
      </ul>
    </AccordionStyle>
  )
}
