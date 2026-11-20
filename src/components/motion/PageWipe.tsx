'use client'

import { useEffect } from 'react'

export function PageWipe() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href?.startsWith('#') || href.length < 2) return

      const target = document.querySelector(href)
      if (!(target instanceof HTMLElement)) return

      event.preventDefault()
      document.documentElement.classList.add('is-wiping')

      window.setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', href)
        window.setTimeout(() => {
          document.documentElement.classList.remove('is-wiping')
        }, 480)
      }, 280)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <div className="page-wipe" aria-hidden="true" />
}
