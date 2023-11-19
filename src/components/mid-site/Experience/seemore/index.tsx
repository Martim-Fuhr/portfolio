import React, { ReactNode, useState } from 'react'
import AccordionStyle from './styled'

interface AccordionProps {
  title: string
  children: ReactNode
}

export default function SeeMore({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionStyle>
      <button
        className={`accordion-title ${isOpen ? 'open' : 'close'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="accordion-name-title">{title}</h3>
      </button>
      <ul className={`accordion-content ${isOpen ? 'show' : ''}`}>
        {children}
      </ul>
    </AccordionStyle>
  )
}
