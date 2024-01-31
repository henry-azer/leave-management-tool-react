import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

import { Box, Typography } from '@mui/material'

import Hamburger from 'hamburger-react'

import Divider from '../../common/divider/divider'
import Logo from '../../../assets/images/emaratech-logo.svg'
import HeaderProfileInfo from './base/header-profile-info'

function Header({ isResSideBarOpen, setResSideBarOpen }) {
  const { t } = useTranslation()

  const preventDragHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Box className="header header-theme">
      <Box className="header-wrapper">
        <Box className="logo-wrapper">
          <img
            onDragStart={preventDragHandler}
            src={Logo}
            className="logo"
            alt="Profile"
          />
          <Box className="toggle-icon">
            <Hamburger
              size={26}
              toggled={isResSideBarOpen}
              toggle={setResSideBarOpen}
            />
          </Box>
        </Box>
        <Divider />
        <Box className="section">
          <Typography className="greeting" variant="body1" component="p">
            {t('header:greeting')}
          </Typography>
          <Divider />
          <HeaderProfileInfo />
        </Box>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  isResSideBarOpen: PropTypes.bool.isRequired,
  setResSideBarOpen: PropTypes.func.isRequired
}

export default Header
