import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/globalStyles'
import usePersistedState from '@/utils/usedPersistedState'

import '@/styles/themes/globals.css'
import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark'

import Header from '@/components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState('theme', light)
  // const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
