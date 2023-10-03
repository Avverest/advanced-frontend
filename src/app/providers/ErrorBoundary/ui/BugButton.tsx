import { FC, useEffect, useState } from 'react'
import { Button } from 'shared/ui'

// TODO: Удалить компонент после окончания тестирования
export const BugButton: FC = () => {
  const [error, setError] = useState(false)

  const onThrow = () => setError(true)

  useEffect(
    () => {
      if (error) {
        throw new Error()
      }
    },
    [error],
  )
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={onThrow}>Call throw!</Button>
  )
}
