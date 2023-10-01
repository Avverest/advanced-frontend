import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NotFound.module.scss'

export const NotFound: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={cls.NotFound}>
      {t('Страница не найдена')}
    </div>
  )
}
