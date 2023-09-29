import {FC} from 'react'
import cls from './LanguageSwitcher.module.scss'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared'

interface LanguageSwitcherProps {
}
export const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
  const {t, i18n} = useTranslation()

  const onToggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div className={cls.LanguageSwitcher}>
      <Button onClick={onToggle}>{t("Язык")}</Button>
    </div>
  )
}