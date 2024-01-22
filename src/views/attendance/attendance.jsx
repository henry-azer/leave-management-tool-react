import { useTranslation } from 'react-i18next'

function Attendance() {
  const { t } = useTranslation()

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('attendance:title')}</div>
    </div>
  )
}

export default Attendance
