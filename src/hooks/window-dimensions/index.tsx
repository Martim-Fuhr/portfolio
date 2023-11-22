import { Props } from 'next/script'
import { createContext, FC, useContext, useEffect, useState } from 'react'

// import { browserUtils } from '@/utils'
const browserUtils = () => typeof window === 'undefined'

type WindowDimensionsContextState = {
  width: number
  height: number
}

const initialState = {
  width: !browserUtils() ? window.innerWidth : 0,
  height: !browserUtils() ? window.innerHeight : 0,
}

const WindowDimensionsContext =
  createContext<WindowDimensionsContextState>(initialState)

const WindowDimensionsProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>(initialState)

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      setIsLoading(false)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!browserUtils() && isLoading) {
    return null
  }

  return (
    <WindowDimensionsContext.Provider value={windowSize}>
      {children}
    </WindowDimensionsContext.Provider>
  )
}

const useWindowDimensions = () => useContext(WindowDimensionsContext)

export { useWindowDimensions, WindowDimensionsProvider }
