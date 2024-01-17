import { useTranslation } from 'react-i18next'

function Profile() {
  const { t } = useTranslation()

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('profile:title')}</div>
    </div>
  )
}

export default Profile
