import { FC } from 'react'
import { AppLink, AppLinkTheme, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>{t('О сайте')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>{t('Главная')}</AppLink>
      </div>
    </div>
  )
}
