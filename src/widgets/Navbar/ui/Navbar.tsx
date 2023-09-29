import {FC} from 'react'
import {AppLink, AppLinkTheme, classNames} from 'shared'
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from 'widgets'


interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps>  = (props) => {
  const { className } = props
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Main</AppLink>
      </div>
    </div>
  )
}
