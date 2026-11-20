'use client'

import { useEffect, useRef } from 'react'

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const mark = () => node.classList.add('is-visible')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) mark()
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="reveal">{children}</div>
}
