import React from 'react'
import { Container, Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'

function RootError() {
  const error = useRouteError()

  return (
    <Container maxWidth="sm">
      <Typography
        sx={{
          fontSize: '2em',
          fontWeight: 300,
          textAlign: 'center',
          '& strong': { fontWeight: 400 }
        }}
        variant="h1"
      >
        Error {error.status || 500}: {error.statusText ?? error.message}
      </Typography>
    </Container>
  )
}

export default RootError
