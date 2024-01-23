import React from 'react'
import { useRouteError } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { Box, Typography } from '@mui/material'

import BackButton from '../buttons/base/back-button'
import ErrorImage from '../../assets/images/error.png'

function RootError() {
  const { t } = useTranslation()
  const error = useRouteError()

  const errorMessages = {
    404: t('common:error:not_found'),
    500: t('common:error:server_error')
  }

  return (
    <Box className="root-error">
      <img src={ErrorImage} alt="error" width="400" />
      <Typography variant="h4" component="p" sx={{ fontSize: '28px' }}>
        {t('common:error:description')}
      </Typography>
      <Typography variant="h5" component="p">
        {t('common:error:title')} {error.status || 500}:{' '}
        {errorMessages[error.status] ||
          error.statusText ||
          t('common:error:unknown')}
      </Typography>
      <BackButton text={t('common:back')} hasBackButton />
    </Box>
  )
}

export default RootError
