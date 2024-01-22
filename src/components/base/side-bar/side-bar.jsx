import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import {
  Dashboard as DashboardIcon,
  Person2Outlined as PersonIcon,
  SettingsOutlined as SettingsIcon,
  Security as SecurityIcon,
  CalendarMonth as CalendarIcon,
  BarChart as StatsIcon,
  ExitToApp as LogoutIcon,
  NotificationsNone as NotificationIcon
} from '@mui/icons-material'

import SideBarItem from './base/side-bar-item'
import SideBarDivider from './base/side-bar-divider'

function SideBar({ isSidebarExpanded, onSidebarExpanded }) {
  const { t } = useTranslation()
  const location = useLocation()
  const [selectedIcon, setSelectedIcon] = useState('')
  const [isSidebarHovered, setIsSidebarHovered] = useState(isSidebarExpanded)

  useEffect(() => {
    const pathname = location.pathname.substring(1)
    setSelectedIcon(pathname || 'dashboard')
  }, [location.pathname])

  const handleMouseEnter = () => {
    setIsSidebarHovered(true)
    onSidebarExpanded()
  }

  const handleMouseLeave = () => {
    setIsSidebarHovered(false)
    onSidebarExpanded()
  }

  return (
    <Box
      className={`side-bar side-bar-theme ${isSidebarExpanded ? 'side-bar-expand' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {selectedIcon && (
        <div
          className="indicator"
          style={{
            top: `${document.getElementById(selectedIcon) != null ? document.getElementById(selectedIcon).offsetTop + 3 : 0}px`,
            display: `${document.getElementById(selectedIcon) != null ? 'block' : 'none'}`
          }}
        />
      )}
      <Box
        className={`side-bar-wrapper ${isSidebarHovered ? 'wrapper-expand' : ''}`}
      >
        <Box className="section">
          <SideBarItem
            id="notifications"
            to=""
            selectedIcon={selectedIcon}
            isHovered={isSidebarHovered}
            icon={<NotificationIcon />}
            label={t('sidebar:notifications')}
          />
          <SideBarDivider isHovered={isSidebarHovered} />
        </Box>
        <Box className="section">
          <Box className="section">
            <SideBarItem
              id="dashboard"
              to="/"
              selectedIcon={selectedIcon}
              isHovered={isSidebarHovered}
              icon={<DashboardIcon />}
              label={t('sidebar:dashboard')}
            />
            <SideBarItem
              id="employees"
              to="/employees"
              selectedIcon={selectedIcon}
              isHovered={isSidebarHovered}
              icon={<PersonIcon />}
              label={t('sidebar:employees')}
            />
            <SideBarItem
              id="attendance"
              to="/attendance"
              selectedIcon={selectedIcon}
              isHovered={isSidebarHovered}
              icon={<CalendarIcon />}
              label={t('sidebar:attendance')}
            />
            <SideBarItem
              id="statistics"
              to="statistics"
              selectedIcon={selectedIcon}
              isHovered={isSidebarHovered}
              icon={<StatsIcon />}
              label={t('sidebar:statistics')}
            />
          </Box>
          <SideBarDivider isHovered={isSidebarHovered} />
          <Box className="section">
            <SideBarItem
              id="settings"
              to="settings"
              selectedIcon={selectedIcon}
              isHovered={isSidebarHovered}
              icon={<SettingsIcon />}
              label={t('sidebar:settings')}
            />
            <SideBarItem
              id="policies"
              to="policies"
              selectedIcon={selectedIcon}
              isHovered={isSidebarHovered}
              icon={<SecurityIcon />}
              label={t('sidebar:policies')}
            />
          </Box>
        </Box>
        <Box className="section">
          <SideBarDivider isHovered={isSidebarHovered} />
          <SideBarItem
            id="logout"
            to=""
            selectedIcon={selectedIcon}
            isHovered={isSidebarHovered}
            icon={<LogoutIcon />}
            label={t('sidebar:logout')}
          />
        </Box>
      </Box>
    </Box>
  )
}

SideBar.propTypes = {
  isSidebarExpanded: PropTypes.bool.isRequired,
  onSidebarExpanded: PropTypes.func.isRequired
}

export default SideBar
