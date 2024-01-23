import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'
import BackButton from '../../components/buttons/base/back-button'

function Policies() {
  const { t } = useTranslation()

  return (
    <Box className="policies-page policies-page-theme">
      <Box className="policies-page-wrapper">
        <BackButton text={t('policies:title')} hasBackButton />
      </Box>
    </Box>
  )
}

export default Policies
