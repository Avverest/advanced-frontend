import { FC } from 'react'
import { Button } from 'shared/ui'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant='clear'
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      size='xl'
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
}
