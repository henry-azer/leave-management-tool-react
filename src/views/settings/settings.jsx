import { useTranslation } from 'react-i18next'

import {
  DarkMode as ThemeIcon,
  GTranslate as LanguageIcon
} from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { useTheme } from '../../services/theme/theme-context'
import ThemeButton from '../../components/buttons/theme/theme-button'

import BackButton from '../../components/buttons/base/back-button'
import SettingsCard from '../../components/cards/settings-card'
import TranslateButton from '../../components/buttons/translate/translate-button'

function Settings() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Box className="settings-page settings-page-theme flex flex-col w-full h-full">
      <BackButton text={t('settings:title')} hasBackButton />
      <Box className="settings-page-wrapper overflow-auto flex-1">
        <Box className="flex flex-wrap gap-5 p-6">
          <SettingsCard
            title={t('settings:card:language:title')}
            description={t('settings:card:language:description')}
            icon={<LanguageIcon />}
          >
            <Typography variant="subtitle1" component="p">
              {t('settings:card:language:title')}
            </Typography>
            <TranslateButton />
          </SettingsCard>
          <SettingsCard
            title={t('settings:card:theme:title')}
            description={t('settings:card:theme:description')}
            icon={<ThemeIcon />}
          >
            <Typography variant="subtitle1" component="p">
              {theme === 'dark'
                ? t('settings:card:theme:dark')
                : t('settings:card:theme:light')}
            </Typography>
            <ThemeButton />
          </SettingsCard>
        </Box>
      </Box>
    </Box>
  )
}

export default Settings
