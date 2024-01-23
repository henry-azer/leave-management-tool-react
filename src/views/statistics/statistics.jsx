import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'
import BackButton from '../../components/buttons/base/back-button'

function Statistics() {
  const { t } = useTranslation()

  return (
    <Box className="statistics-page statistics-page-theme">
      <Box className="statistics-page-wrapper">
        <BackButton text={t('statistics:title')} hasBackButton />
      </Box>
    </Box>
  )
}

export default Statistics
