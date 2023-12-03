import { FC } from 'react'
import { classNames } from 'shared/lib'
import { LinkProps, Link } from 'react-router-dom'
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
  className?: string
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    ...passedProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className])}
      {...passedProps}
    >
      {children}
    </Link>
  )
}
