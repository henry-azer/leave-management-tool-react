import { Box } from '@mui/material'

import { useTheme } from '../../../services/theme/theme-context'

function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Box className="theme-button theme-button-theme">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
    </Box>
  )
}

export default ThemeButton
