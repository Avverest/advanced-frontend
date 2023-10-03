import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Button.module.scss'

export enum ButtonTheme {
  TEST = 'test'
}

export type ButtonVariant = 'default' | 'icon' | 'short'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  variant?: ButtonVariant
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.TEST,
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
          [className, cls[variant], cls[theme]],
        )
      }
    >
      {children}
    </button>
  )
}
