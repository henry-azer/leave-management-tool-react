import { useTranslation } from 'react-i18next'

function TranslateButton() {
  const { i18n } = useTranslation()

  return (
    <button
      type="button"
      className="button translate-button"
      onClick={() =>
        i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ar' : 'en')
      }
    >
      {i18n.resolvedLanguage === 'en' ? 'ar' : 'en'}
    </button>
  )
}

export default TranslateButton
