import React, { useState } from 'react'
import AccordionStyle from './styled'

interface AccordionProps {
  title: string
  children: string
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionStyle>
      <button
        className={`accordion-title ${isOpen ? 'open' : 'close'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="accordion-name-title">{title}</h3>
      </button>
      <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
        <p>{children}</p>
      </div>
    </AccordionStyle>
  )
}
