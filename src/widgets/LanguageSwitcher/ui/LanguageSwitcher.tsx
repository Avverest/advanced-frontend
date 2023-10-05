import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation()

  const onToggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button variant='short' onClick={onToggle}>{t('Язык')}</Button>
  )
}
