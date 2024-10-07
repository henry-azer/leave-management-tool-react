import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { Box, MenuItem, Typography } from '@mui/material'
import {
  ExpandMore as ArrowDownIcon,
  ExpandLess as ArrowUpIcon,
  Person2Outlined as PersonIcon,
  SettingsOutlined as SettingsIcon,
  HelpOutline as HelpIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material'

import Divider from '../../../common/divider/divider'

function HeaderProfileInfo() {
  const { t } = useTranslation()
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown)
  }

  return (
    <Box
      className="header-profile-info"
      onClick={handleToggleDropdown}
      ref={dropdownRef}
    >
      <Box className="user-info">
        <PersonIcon fontSize="large" />
        <Box>
          <Typography className="user-name" variant="subtitle1">
            Henry Azer
          </Typography>
          <Typography className="user-email" variant="subtitle2">
            henryazer@outlook.com
          </Typography>
        </Box>
        {toggleDropdown ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Box>
      <Box className={`dropdown-menu ${toggleDropdown ? 'active' : ''}`}>
        <Box className="dropdown-menu-wrapper">
          <NavLink to="/" className="prevent-drag">
            <MenuItem className="flex gap-3">
              <PersonIcon />
              <Typography variant="subtitle1" component="p">
                {t('header:profile')}
              </Typography>
            </MenuItem>
          </NavLink>

          <Divider />
          <NavLink to="/settings" className="prevent-drag">
            <MenuItem className="flex gap-3">
              <SettingsIcon />
              <Typography variant="subtitle1" component="p">
                {t('header:settings')}
              </Typography>
            </MenuItem>
          </NavLink>
          <NavLink to="/" className="prevent-drag">
            <MenuItem className="flex gap-3">
              <HelpIcon />
              <Typography variant="subtitle1" component="p">
                {t('header:help')}
              </Typography>
            </MenuItem>
          </NavLink>

          <Divider />
          <NavLink to="/" className="prevent-drag">
            <MenuItem className="flex gap-3">
              <LogoutIcon />
              <Typography variant="subtitle1" component="p">
                {t('header:logout')}
              </Typography>
            </MenuItem>
          </NavLink>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderProfileInfo
