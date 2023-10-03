import { FC, useState } from 'react'
import { Button, classNames } from 'shared'
import { LanguageSwitcher, ThemeSwitcher } from 'widgets'
import { useTranslation } from 'react-i18next'
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
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })}>
      <Button variant={collapsed ? 'short' : 'default'} onClick={onSidebarToggle}>
        {collapsed ? t('Открыть') : t('Скрыть') }
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
