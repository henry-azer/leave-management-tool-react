import { useTranslation } from 'react-i18next'

import {
  WebhookOutlined as WebhookIcon,
  HandshakeOutlined as HandshakeIcon,
  VolunteerActivismOutlined as HeartInHandIcon
} from '@mui/icons-material'
import { Box } from '@mui/material'

import PoliciesCard from '../../components/cards/policies-card'
import BackButton from '../../components/buttons/base/back-button'

import CoreValuesImage from '../../assets/images/core-values.png'

function Policies() {
  const { t } = useTranslation()

  return (
    <Box className="policies-page policies-page-theme flex flex-col w-full h-full ">
      <BackButton text={t('policies:title')} hasBackButton />
      <Box className="policies-page-wrapper overflow-auto flex-1">
        <Box className="flex flex-col gap-4 p-6">
          <PoliciesCard
            title={t('policies:card:1:title')}
            description={t('policies:card:2:description')}
            icon={<WebhookIcon />}
          />
          <PoliciesCard
            title={t('policies:card:2:title')}
            description={t('policies:card:2:description')}
            icon={<HandshakeIcon />}
          />
          <PoliciesCard
            title={t('policies:card:3:title')}
            description={t('policies:card:3:description')}
            icon={<HeartInHandIcon />}
          />
        </Box>
        <Box className="core-values">
          <img src={CoreValuesImage} alt="error" />
        </Box>
      </Box>
    </Box>
  )
}

export default Policies
