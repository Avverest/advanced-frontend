import {FC, useState} from 'react'
import cls from './Sidebar.module.scss'
import {Button, classNames} from 'shared'
import {LanguageSwitcher, ThemeSwitcher} from 'widgets'

interface SidebarProps {
}
export const Sidebar: FC<SidebarProps> = () => {
  const [open, setOpen] = useState(false)

  const onSidebarToggle = (): void => {
    setOpen(prevState => !prevState)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: open })}>
      <Button variant={open ? 'short' : 'default'} onClick={onSidebarToggle}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}