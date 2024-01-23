import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'
import BackButton from '../../components/buttons/base/back-button'

function Attendance() {
  const { t } = useTranslation()

  return (
    <Box className="attendance-page attendance-page-theme">
      <Box className="attendance-page-wrapper">
        <BackButton text={t('attendance:title')} hasBackButton />
      </Box>
    </Box>
  )
}

export default Attendance
