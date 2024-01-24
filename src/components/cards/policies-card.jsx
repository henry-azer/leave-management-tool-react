import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography } from '@mui/material'

function PoliciesCard({ title, description, icon }) {
  return (
    <Box className="policies-card policies-card-theme">
      <Box className="policies-card-wrapper">
        <Box className="flex items-center gap-2">
          {React.cloneElement(icon, { className: 'circle-icon' })}{' '}
          <Typography variant="h6" component="p">
            {title}
          </Typography>
        </Box>
        <Box className="p-3">
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

PoliciesCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PoliciesCard
