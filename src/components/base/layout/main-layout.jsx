import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import SideBar from '../side-bar/side-bar'

function MainLayout() {
  return (
    <Box>
      <SideBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  )
}

export default MainLayout
