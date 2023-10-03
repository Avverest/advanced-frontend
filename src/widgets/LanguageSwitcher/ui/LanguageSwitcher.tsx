import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared'

interface LanguageSwitcherProps {
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
  const { t, i18n } = useTranslation()

  const onToggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button variant='short' onClick={onToggle}>{t('Язык')}</Button>
  )
}
