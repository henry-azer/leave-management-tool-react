import { useTheme } from '../../../services/theme/theme-context'

function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button type="button" className="button theme-button" onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default ThemeButton
