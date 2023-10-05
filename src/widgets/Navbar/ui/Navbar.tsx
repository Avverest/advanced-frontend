import { FC } from 'react'
import { AppLink } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
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
        <AppLink variant='secondary' to='/about'>{t('О сайте')}</AppLink>
        <AppLink variant='secondary' to='/'>{t('Главная')}</AppLink>
      </div>
    </div>
  )
}
