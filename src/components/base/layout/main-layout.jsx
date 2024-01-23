import React, { useState, useEffect, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'

import SideBar from '../side-bar/side-bar'
import Header from '../header/header'

function MainLayout() {
  const { i18n } = useTranslation()
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.dir(i18n.language))
  }, [i18n])

  const handleSideBarToggle = () => {
    setIsSideBarExpanded(!isSideBarExpanded)
  }

  return (
    <Box>
      <SideBar
        isSidebarExpanded={isSideBarExpanded}
        onSidebarExpanded={handleSideBarToggle}
      />
      <Header />
      <Box className="page-route">
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  )
}

export default MainLayout
