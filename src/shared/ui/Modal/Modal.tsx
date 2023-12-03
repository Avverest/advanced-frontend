import {
  FC, PropsWithChildren, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react'
import { classNames } from 'shared/lib'
import { Portal } from 'shared/ui'
import cls from './Modal.module.scss'

type Sizes = 'm' | 'l' | 'xl' | 'oversize'
interface Props {
  className?: string
  isOpen: boolean
  onClose: () => void
  size?: Sizes
}
type ModalProps = PropsWithChildren<Props>

const CLOSING_DELAY = 200
export const Modal: FC<ModalProps> = (props) => {
  const {
    isOpen, onClose, children, className, size = 'l',
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(
        () => {
          onClose()
          setIsClosing(false)
        },
        CLOSING_DELAY,
      )
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(
    () => {
      window.addEventListener('keydown', onKeyDown)
      return () => {
        clearTimeout(timerRef.current)
        window.removeEventListener('keydown', onKeyDown)
      }
    },
    [isOpen, onKeyDown],
  )

  const onContentClick = (e: MouseEvent): void => {
    e.stopPropagation()
  }

  return (
    <Portal>
      <div
        className={classNames(
          cls.Modal,
          {
            [cls.open]: isOpen,
            [cls.isClosing]: isClosing,
          },
          [className],
        )}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={classNames(cls.content, {}, [cls[size]])}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
