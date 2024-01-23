import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'
import PageRouteTitle from '../../components/buttons/base/back-button'

function Dashboard() {
  const { t } = useTranslation()

  return (
    <Box className="dashboard-page dashboard-page-theme">
      <Box className="dashboard-page-wrapper">
        <PageRouteTitle title={t('dashboard:title')} hasBackButton={false} />
      </Box>
    </Box>
  )
}

export default Dashboard
