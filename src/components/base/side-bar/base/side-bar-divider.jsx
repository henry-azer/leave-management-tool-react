import PropTypes from 'prop-types'

function SideBarDivider({ isHovered }) {
  return <div className={`divider ${isHovered ? 'divider-expanded' : ''}`} />
}

SideBarDivider.propTypes = {
  isHovered: PropTypes.bool.isRequired
}

export default SideBarDivider
