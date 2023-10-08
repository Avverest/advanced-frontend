import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Button.module.scss'

export type ButtonTheme = 'primary' | 'secondary' | 'inverted' | 'auto'
export type ButtonVariant = 'clear' | 'outlined' | 'auto'
export type ButtonSize = 'm' | 'l' | 'xl' | 'auto'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  theme?: ButtonTheme
  square?: boolean
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'auto',
    type = 'button',
    size = 'auto',
    square = false,
    theme = 'auto',
    ...passedProps
  } = props

  return (
    <button
      {...passedProps}
      type={type}
      className={
        classNames(
          cls.Button,
          { [cls.square]: square },
          [className, cls[variant], cls[size], cls[theme]],
        )
      }
    >
      {children}
    </button>
  )
}
