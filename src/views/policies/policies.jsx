import { useTranslation } from 'react-i18next'

function Policies() {
  const { t } = useTranslation()

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('policies:title')}</div>
    </div>
  )
}

export default Policies
