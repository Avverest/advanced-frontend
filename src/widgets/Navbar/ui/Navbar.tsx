import { FC, useCallback, useState } from 'react'
import { AppLink, Button, Modal } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onOpen = useCallback(() => setIsAuthModal(true), [])

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/about'>{t('О сайте')}</AppLink>
        <AppLink to='/'>{t('Главная')}</AppLink>
        <Button variant='clear' onClick={onOpen}>{t('Войти')}</Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        {/* eslint-disable-next-line */}
        <p>1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </Modal>
    </div>
  )
}
