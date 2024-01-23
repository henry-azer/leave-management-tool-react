import { useTranslation } from 'react-i18next'

import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import Locales from '../../../services/localization/locales/locales'

function TranslateButton() {
  const { i18n, t } = useTranslation()

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value
    i18n.changeLanguage(newLanguage)
    document.documentElement.setAttribute('dir', i18n.dir(newLanguage))
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
      <InputLabel id="select-language-button-label">
        {t('common:language')}
      </InputLabel>
      <Select
        labelId="select-language-button-label"
        value={i18n.resolvedLanguage || ''}
        label={t('common:language')}
        onChange={handleChangeLanguage}
      >
        {Object.keys(Locales).map((locale) => (
          <MenuItem key={Locales[locale].name} value={locale}>
            {Locales[locale].name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default TranslateButton
