import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { Box, Avatar, MenuItem, Typography } from '@mui/material'
import {
  ExpandMore as ArrowDownIcon,
  ExpandLess as ArrowUpIcon,
  Person2Outlined as PersonIcon,
  SettingsOutlined as SettingsIcon,
  HelpOutline as HelpIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material'
import Divider from '../../../divider/divider'

function HeaderProfileInfo() {
  const { t } = useTranslation()
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const preventDragHandler = (event) => {
    event.preventDefault()
  }

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown)
  }

  return (
    <Box className="header-profile-info" onClick={handleToggleDropdown}>
      <Box className="user-info">
        <Avatar
          onDragStart={preventDragHandler}
          sx={{ width: 45, height: 45 }}
          src="https://paloaltoheadshots.com/wp-content/uploads/2023/06/linkedIn-headshot.jpg"
          alt="someone"
        />
        <Box>
          <Typography className="user-name" variant="subtitle1">
            Alex Williams
          </Typography>
          <Typography className="user-email" variant="subtitle2">
            someone@emaratech.ae
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
