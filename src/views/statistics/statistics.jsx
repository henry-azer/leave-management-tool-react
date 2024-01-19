import { useTranslation } from 'react-i18next'

function Statistics() {
  const { t } = useTranslation()

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('statistics:title')}</div>
    </div>
  )
}

export default Statistics
