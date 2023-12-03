import {
  FC, useEffect, useMemo, useState,
} from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initTheme?: Theme
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initTheme }) => {
  const [theme, setTheme] = useState<Theme>(initTheme ?? defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  useEffect(
    () => {
      const removeTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
      document.body.classList.remove(removeTheme)
      document.body.classList.add(theme)
      console.log(theme)
    },
    [theme],
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
