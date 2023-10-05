import { FC } from 'react'
import { classNames } from 'shared/lib'
import { LinkProps, Link } from 'react-router-dom'
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
  className?: string
  variant: 'primary' | 'secondary'
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    variant = 'primary',
    ...passedProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[variant]])}
      {...passedProps}
    >
      {children}
    </Link>
  )
}
