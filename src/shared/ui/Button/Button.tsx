import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Button.module.scss'

export type ButtonVariant = 'default' | 'clear' | 'short'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'default',
    type = 'button',
    ...passedProps
  } = props

  return (
    <button
      {...passedProps}
      type={type}
      className={
        classNames(
          cls.Button,
          {},
          [className, cls[variant]],
        )
      }
    >
      {children}
    </button>
  )
}
