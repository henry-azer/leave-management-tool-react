import { useTranslation } from 'react-i18next'

function Settings() {
  const { t } = useTranslation()

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('settings:title')}</div>
    </div>
  )
}

export default Settings
