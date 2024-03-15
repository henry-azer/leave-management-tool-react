import { useTranslation } from 'react-i18next'

import {
  WebhookOutlined as WebhookIcon,
  HandshakeOutlined as HandshakeIcon,
  VolunteerActivismOutlined as HeartInHandIcon
} from '@mui/icons-material'
import { Box } from '@mui/material'

import PoliciesCard from '../../components/views/policies/policies-card'
import BackButton from '../../components/common/buttons/common/back-button'

import CoreValuesImage from '../../assets/images/core-values.png'

function Policies() {
  const { t } = useTranslation()

  return (
    <Box className="policies-page policies-page-theme flex flex-col w-full h-full ">
      <Box className="policies-page-wrapper flex flex-col overflow-y-auto overflow-x-hidden flex-1 p-7">
        <BackButton text={t('policies:title')} />
        <Box className="flex items-center justify-center h-[85%]">
          <Box className="policies-inner-wrapper">
            <Box className="core-values flex items-center justify-center">
              <img src={CoreValuesImage} alt="error" />
            </Box>
            <Box className="flex flex-col gap-4 p-6">
              <PoliciesCard
                title={t('policies:card:empowerment:title')}
                description={t('policies:card:empowerment:description')}
                icon={<WebhookIcon />}
              />
              <PoliciesCard
                title={t('policies:card:collaborative:title')}
                description={t('policies:card:collaborative:description')}
                icon={<HandshakeIcon />}
              />
              <PoliciesCard
                title={t('policies:card:pioneering:title')}
                description={t('policies:card:pioneering:description')}
                icon={<HeartInHandIcon />}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Policies
