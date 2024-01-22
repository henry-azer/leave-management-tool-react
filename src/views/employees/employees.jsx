import { useTranslation } from 'react-i18next'

function Employees() {
  const { t } = useTranslation()

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('employees:title')}</div>
    </div>
  )
}

export default Employees
