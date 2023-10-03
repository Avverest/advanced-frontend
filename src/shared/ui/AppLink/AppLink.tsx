import { FC } from 'react'
import { classNames } from 'shared'
import { LinkProps, Link } from 'react-router-dom'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  // eslint-disable-next-line no-unused-vars
  PRIMARY = 'primary',
  // eslint-disable-next-line no-unused-vars
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...passedProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...passedProps}
    >
      {children}
    </Link>
  )
}
