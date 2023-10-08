import { FC, useState } from 'react'
import { AppLink, Button } from 'shared/ui'
import { LanguageSwitcher, ThemeSwitcher } from 'widgets'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { RoutePath } from 'shared/config'
import About from 'shared/assets/icons/about-badged.svg'
import Main from 'shared/assets/icons/main-page.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
}
export const Sidebar: FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onSidebarToggle = (): void => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })}
    >
      <Button
        data-testid='sidebar-toggle'
        variant='clear'
        onClick={onSidebarToggle}
        className={cls.toggleBtn}
        size='xl'
        theme='inverted'
        square
      >
        {collapsed ? '>' : '<' }
      </Button>
      <div className={cls.items}>
        <AppLink variant='secondary' to={RoutePath.main} title={t('Главная')}>
          <Main className={cls.icon} />
          <span>{t('Главная')}</span>
        </AppLink>
        <AppLink variant='secondary' to={RoutePath.about} title={t('О сайте')}>
          <About className={cls.icon} />
          <span>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  )
}
