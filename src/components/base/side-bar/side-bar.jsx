import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'

import {
  Dashboard as DashboardIcon,
  Person2Outlined as PersonIcon,
  SettingsOutlined as SettingsIcon,
  Security as SecurityIcon,
  CalendarMonth as CalendarIcon,
  BarChart as StatsIcon,
  Logout as LogoutIcon,
  NotificationsNone as NotificationIcon
} from '@mui/icons-material'

import SideBarItem from './base/side-bar-item'
import SideBarDivider from './base/side-bar-divider'

function SideBar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [isHovered, setIsHovered] = useState(true)

  useEffect(() => {
    const pathname = location.pathname.substring(1)
    setSelectedIcon(pathname || 'dashboard')
  }, [location.pathname])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Box
      className={`side-bar side-bar-theme ${isHovered ? 'side-bar-expand' : ''}`}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={handleMouseLeave}
    >
      {selectedIcon && (
        <div
          className="indicator"
          style={{
            top: `${document.getElementById(selectedIcon) != null ? document.getElementById(selectedIcon).offsetTop - 3 : 0}px`,
            display: `${document.getElementById(selectedIcon) != null ? 'block' : 'none'}`
          }}
        />
      )}
      <Box className={`side-bar-wrapper ${isHovered ? 'wrapper-expand' : ''}`}>
        <Box className="section">
          <SideBarItem
            id="notifications"
            to=""
            selectedIcon={selectedIcon}
            isHovered={isHovered}
            icon={<NotificationIcon />}
            label={t('sidebar:notifications')}
          />
          <SideBarDivider isHovered={isHovered} />
        </Box>
        <Box className="section">
          <Box className="section">
            <SideBarItem
              id="dashboard"
              to="/"
              selectedIcon={selectedIcon}
              isHovered={isHovered}
              icon={<DashboardIcon />}
              label={t('sidebar:dashboard')}
            />
            <SideBarItem
              id="employees"
              to="/employees"
              selectedIcon={selectedIcon}
              isHovered={isHovered}
              icon={<PersonIcon />}
              label={t('sidebar:employees')}
            />
            <SideBarItem
              id="attendance"
              to="/attendance"
              selectedIcon={selectedIcon}
              isHovered={isHovered}
              icon={<CalendarIcon />}
              label={t('sidebar:attendance')}
            />
            <SideBarItem
              id="statistics"
              to="statistics"
              selectedIcon={selectedIcon}
              isHovered={isHovered}
              icon={<StatsIcon />}
              label={t('sidebar:statistics')}
            />
          </Box>
          <SideBarDivider isHovered={isHovered} />
          <Box className="section">
            <SideBarItem
              id="settings"
              to="settings"
              selectedIcon={selectedIcon}
              isHovered={isHovered}
              icon={<SettingsIcon />}
              label={t('sidebar:settings')}
            />
            <SideBarItem
              id="policies"
              to="policies"
              selectedIcon={selectedIcon}
              isHovered={isHovered}
              icon={<SecurityIcon />}
              label={t('sidebar:policies')}
            />
          </Box>
        </Box>
        <Box className="section">
          <SideBarDivider isHovered={isHovered} />
          <SideBarItem
            id="logout"
            to=""
            selectedIcon={selectedIcon}
            isHovered={isHovered}
            icon={<LogoutIcon />}
            label={t('sidebar:logout')}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SideBar
