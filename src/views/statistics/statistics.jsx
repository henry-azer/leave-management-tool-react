import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'

import BackButton from '../../components/common/buttons/common/back-button'

function Statistics() {
  const { t } = useTranslation()

  return (
    <Box className="statistics-page statistics-page-theme flex flex-col w-full h-full ">
      <Box className="statistics-page-wrapper flex flex-col overflow-y-auto overflow-x-hidden flex-1 p-7">
        <Box className="flex justify-between items-center">
          <BackButton text={t('statistics:title')} />
        </Box>
      </Box>
    </Box>
  )
}

export default Statistics
