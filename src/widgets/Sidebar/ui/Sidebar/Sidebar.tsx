import { FC, useState } from 'react'
import { Button } from 'shared/ui'
import { LanguageSwitcher, ThemeSwitcher } from 'widgets'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
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
      <div />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <Button
          data-testid='sidebar-toggle'
          variant={collapsed ? 'short' : 'default'}
          onClick={onSidebarToggle}
        >
          {collapsed ? t('Открыть') : t('Скрыть') }
        </Button>
      </div>
    </div>
  )
}
