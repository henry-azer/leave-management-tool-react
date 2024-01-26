import React from 'react'
import { NavLink } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Typography, MenuItem } from '@mui/material'

function SideBarItem({ id, to, selectedIcon, isHovered, icon, label }) {
  return (
    <NavLink id={id} to={to} className="prevent-drag">
      <MenuItem
        className={`${selectedIcon === id ? 'side-bar-item-active' : ''} ${isHovered ? 'side-bar-item-expandeded' : 'side-bar-item'}`}
      >
        {React.cloneElement(icon)}
        <Typography
          variant="body2"
          component="p"
          className={`${isHovered ? 'slide-item-expandeded' : 'slide-item-text-hidden'} slide-item-text`}
        >
          {label}
        </Typography>
      </MenuItem>
    </NavLink>
  )
}

SideBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  selectedIcon: PropTypes.string.isRequired,
  isHovered: PropTypes.bool.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired
}

export default SideBarItem
