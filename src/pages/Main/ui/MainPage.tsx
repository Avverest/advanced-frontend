import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { AppLink, Button, Modal } from 'shared/ui'
import { useState } from 'react'

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
