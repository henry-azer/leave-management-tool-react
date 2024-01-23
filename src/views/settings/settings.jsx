import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'
import BackButton from '../../components/buttons/base/back-button'

function Settings() {
  const { t } = useTranslation()

  return (
    <Box className="settings-page settings-page-theme">
      <Box className="settings-page-wrapper">
        <BackButton text={t('settings:title')} hasBackButton />
      </Box>
    </Box>
  )
}

export default Settings
