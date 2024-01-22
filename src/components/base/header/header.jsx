import { useTranslation } from 'react-i18next'

import { Box, Typography } from '@mui/material'

import Divider from '../../divider/divider'
import Logo from '../../../assets/images/emaratech-logo.svg'

import HeaderProfileInfo from './base/header-profile-info'

function Header() {
  const { t } = useTranslation()
  const preventDragHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Box className="header header-theme">
      <Box className="header-wrapper">
        <Box className="section">
          <img
            onDragStart={preventDragHandler}
            src={Logo}
            className="logo"
            alt="Profile"
          />
        </Box>
        <Box className="section">
          <Typography variant="body1" component="p">
            {t('header:greeting')}
          </Typography>
          <Divider />
          <HeaderProfileInfo />
        </Box>
      </Box>
    </Box>
  )
}
export default Header
