/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types'

import { Close as CloseIcon } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

function OverlayForm({ title, isOpen, onClose, children }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Box>
      {isOpen && (
        <Box
          className="overlay-form overlay-form-theme"
          onClick={handleOverlayClick}
        >
          <Box className="overlay-form-wrapper overlay-form-wrapper-theme flex flex-col items-center overflow-y-auto overflow-x-hidden">
            <CloseIcon className="close-button" onClick={onClose} />
            <Typography variant="h6" component="p">
              {title}
            </Typography>
            <Box>{children}</Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

OverlayForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}

OverlayForm.defaultProps = {
  children: null,
  title: ''
}

export default OverlayForm
