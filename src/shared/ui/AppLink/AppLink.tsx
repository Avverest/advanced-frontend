import {FC} from 'react'
import {classNames} from 'shared'
import cls from './AppLink.module.scss'
import {LinkProps, Link} from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
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
    theme= AppLinkTheme.PRIMARY,
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