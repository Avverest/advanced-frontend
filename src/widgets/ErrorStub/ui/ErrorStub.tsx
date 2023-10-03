import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared'
import cls from './ErrorStub.module.scss'

export const ErrorStub: FC = () => {
  const { t } = useTranslation()
  const onReload = () => {
    window.location.reload()
  }
  return (
    <div className={cls.ErrorStub}>
      <h3 className={cls.title}>{t('Заглушка при ошибке')}</h3>
      <Button onClick={onReload} className={cls.button}>{t('Перезагрузить')}</Button>
    </div>
  )
}
