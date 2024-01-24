import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography } from '@mui/material'

function DashboardCard({ count, title, description, icon }) {
  return (
    <Box className="dashboard-card dashboard-card-theme">
      <Box className="dashboard-card-wrapper grid grid-cols-1 gap-2 p-5 w-full h-full">
        <Box className="flex justify-between">
          <Box className="flex flex-col gap-1">
            <Typography variant="h4" component="p" style={{ fontSize: '28px' }}>
              {count}
            </Typography>
          </Box>
          <Box>{React.cloneElement(icon, { className: 'circle-icon' })}</Box>
        </Box>
        <Box>
          <Typography variant="h6" component="p">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

DashboardCard.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default DashboardCard
