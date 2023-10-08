import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

interface LanguageSwitcherProps {
  short: boolean
}
export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { short } = props
  const { t, i18n } = useTranslation()

  const onToggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button variant='clear' onClick={onToggle}>
      {short ? t('Короткая версия') : t('Язык')}
    </Button>
  )
}
