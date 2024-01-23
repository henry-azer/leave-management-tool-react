import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'

function BackButton({ text, hasBackButton }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleBackNavigation = () => {
    const currentPath = location.pathname
    const pathSegments = currentPath.split('/').filter(Boolean)

    if (pathSegments.length > 1) {
      const parentPath = `/${pathSegments.slice(0, -1).join('/')}`
      navigate(parentPath)
    } else {
      navigate('/')
    }
  }

  return (
    <Box className="flex items-center gap-3">
      {hasBackButton && (
        <ArrowBackIcon
          sx={{ fontSize: '19px' }}
          className="cursor-pointer"
          onClick={handleBackNavigation}
        />
      )}
      <Box className="flex flex-column content-center">
        <Typography variant="h6" component="p">
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

BackButton.propTypes = {
  text: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool.isRequired
}

export default BackButton
