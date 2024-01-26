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

function SideBar({ isResSideBarOpen, isSidebarExpanded, onSidebarExpanded }) {
  const { t } = useTranslation()
  const location = useLocation()
  const [indicatorTop, setIndicatorTop] = useState(0)
  const [selectedIcon, setSelectedIcon] = useState('')

  useEffect(() => {
    const pathname = location.pathname.substring(1)
    setSelectedIcon(pathname || 'dashboard')
  }, [location.pathname])

  useEffect(() => {
    const updateIndicatorPosition = () => {
      if (selectedIcon) {
        const iconElement = document.getElementById(selectedIcon)
        if (iconElement) {
          setIndicatorTop(iconElement.offsetTop + 3)
        }
      }
    }

    updateIndicatorPosition()
    window.addEventListener('resize', updateIndicatorPosition)

    return () => {
      window.removeEventListener('resize', updateIndicatorPosition)
    }
  }, [selectedIcon])

  const handleMouseEnter = () => {
    onSidebarExpanded()
  }

  const handleMouseLeave = () => {
    onSidebarExpanded()
  }

  return (
    <Box
      className={`side-bar side-bar-theme ${isSidebarExpanded ? 'side-bar-expanded' : ''} ${isResSideBarOpen ? 'side-bar-open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {selectedIcon && (
        <div
          className="indicator"
          style={{
            top: `${indicatorTop}px`,
            display: `${indicatorTop !== 0 ? 'block' : 'none'}`
          }}
        />
      )}
      <Box
        className={`side-bar-wrapper ${isSidebarExpanded || isResSideBarOpen ? 'wrapper-expanded' : ''}`}
      >
        <Box className="section">
          <SideBarItem
            id="notifications"
            to=""
            selectedIcon={selectedIcon}
            isHovered={isSidebarExpanded || isResSideBarOpen}
            icon={<NotificationIcon />}
            label={t('sidebar:notifications')}
          />
          <SideBarDivider isHovered={isSidebarExpanded || isResSideBarOpen} />
        </Box>
        <Box className="section">
          <Box className="section">
            <SideBarItem
              id="dashboard"
              to="/"
              selectedIcon={selectedIcon}
              isHovered={isSidebarExpanded || isResSideBarOpen}
              icon={<DashboardIcon />}
              label={t('sidebar:dashboard')}
            />
            <SideBarItem
              id="employees"
              to="/employees"
              selectedIcon={selectedIcon}
              isHovered={isSidebarExpanded || isResSideBarOpen}
              icon={<PersonIcon />}
              label={t('sidebar:employees')}
            />
            <SideBarItem
              id="attendance"
              to="/attendance"
              selectedIcon={selectedIcon}
              isHovered={isSidebarExpanded || isResSideBarOpen}
              icon={<CalendarIcon />}
              label={t('sidebar:attendance')}
            />
            <SideBarItem
              id="statistics"
              to="statistics"
              selectedIcon={selectedIcon}
              isHovered={isSidebarExpanded || isResSideBarOpen}
              icon={<StatsIcon />}
              label={t('sidebar:statistics')}
            />
          </Box>
          <SideBarDivider isHovered={isSidebarExpanded || isResSideBarOpen} />
          <Box className="section">
            <SideBarItem
              id="settings"
              to="settings"
              selectedIcon={selectedIcon}
              isHovered={isSidebarExpanded || isResSideBarOpen}
              icon={<SettingsIcon />}
              label={t('sidebar:settings')}
            />
            <SideBarItem
              id="policies"
              to="policies"
              selectedIcon={selectedIcon}
              isHovered={isSidebarExpanded || isResSideBarOpen}
              icon={<SecurityIcon />}
              label={t('sidebar:policies')}
            />
          </Box>
        </Box>
        <Box className="section">
          <SideBarDivider isHovered={isSidebarExpanded || isResSideBarOpen} />
          <SideBarItem
            id="logout"
            to=""
            selectedIcon={selectedIcon}
            isHovered={isSidebarExpanded || isResSideBarOpen}
            icon={<LogoutIcon />}
            label={t('sidebar:logout')}
          />
        </Box>
      </Box>
    </Box>
  )
}

SideBar.propTypes = {
  isResSideBarOpen: PropTypes.bool.isRequired,
  isSidebarExpanded: PropTypes.bool.isRequired,
  onSidebarExpanded: PropTypes.func.isRequired
}

export default SideBar
