import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography } from '@mui/material'

function SettingsCard({ title, description, icon, children }) {
  return (
    <Box className="settings-card settings-card-theme">
      <Box className="settings-card-wrapper grid grid-cols-1 gap-6 p-5 w-full h-full">
        <Box className="flex justify-between">
          <Box className="flex flex-col gap-1">
            <Typography variant="h6" component="p">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </Box>
          <Box>{React.cloneElement(icon, { className: 'circle-icon' })}</Box>
        </Box>
        <Box className="flex justify-between items-center">{children}</Box>
      </Box>
    </Box>
  )
}

SettingsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SettingsCard
