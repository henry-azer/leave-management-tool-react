import { useTranslation } from 'react-i18next'

function Dashboard() {
  const { t } = useTranslation()

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('dashboard:title')}</div>
    </div>
  )
}

export default Dashboard
