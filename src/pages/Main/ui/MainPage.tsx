import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { AppLink } from 'shared/ui'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      <BugButton />
      {t('Главная')}
    </div>
  )
}

export default MainPage
