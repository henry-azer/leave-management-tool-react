import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'
import BackButton from '../../components/buttons/base/back-button'

function Employees() {
  const { t } = useTranslation()

  return (
    <Box className="employees-page employees-page-theme">
      <Box className="employees-page-wrapper">
        <BackButton text={t('employees:title')} hasBackButton />
      </Box>
    </Box>
  )
}

export default Employees
