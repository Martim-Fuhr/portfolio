import { useState, useEffect } from 'react'

function usePersistedState(key: string, initialTheme: any) {
  const [state, setState] = useState(initialTheme)

  useEffect(() => {
    const stored = localStorage.getItem(key)
    setState(stored ? JSON.parse(stored) : initialTheme)
  }, [initialTheme, key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
