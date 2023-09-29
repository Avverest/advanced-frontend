import {ButtonHTMLAttributes, FC} from 'react'
import {classNames} from 'shared'
import cls from './Button.module.scss'

export enum ButtonTheme {
  TEST = 'test'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme= ButtonTheme.TEST,
    ...passedProps
  } = props

  return (
    <button
      {...passedProps}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  )
}