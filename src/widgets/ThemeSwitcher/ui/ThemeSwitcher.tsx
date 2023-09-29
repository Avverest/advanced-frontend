import {FC} from 'react'
import cls from './ThemeSwitcher.module.scss'
import {Button, classNames} from 'shared'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {useTheme, Theme} from 'app/providers/ThemeProvider'

interface ThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
}