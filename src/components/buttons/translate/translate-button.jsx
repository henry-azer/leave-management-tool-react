import { useTranslation } from 'react-i18next'

function TranslateButton() {
  const { i18n } = useTranslation()

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage)
    document.documentElement.setAttribute('dir', i18n.dir(newLanguage))
  }

  return (
    <button
      type="button"
      className="button button-theme translate-button"
      onClick={() => {
        const newLanguage = i18n.resolvedLanguage === 'en' ? 'ar' : 'en'
        changeLanguage(newLanguage)
      }}
    >
      {i18n.resolvedLanguage === 'en' ? 'ar' : 'en'}
    </button>
  )
}

export default TranslateButton
