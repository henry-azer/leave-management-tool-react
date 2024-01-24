import { useTranslation } from 'react-i18next'

import {
  PeopleAltOutlined as EmployeesIcon,
  LightModeOutlined as EarlyIcon,
  AssignmentTurnedInOutlined as AttendanceIcon,
  AssignmentLateOutlined as AbsentIcon,
  AccessTimeOutlined as OnTimeIcon,
  DepartureBoardOutlined as LateIcon
} from '@mui/icons-material'
import { Box } from '@mui/material'

import WeatherCard from '../../components/cards/weather-card'
import DashboardCard from '../../components/cards/dashboard-card'

function Dashboard() {
  const { t } = useTranslation()

  return (
    <Box className="dashboard-page dashboard-page-theme flex flex-col w-full h-full ">
      <Box className="dashboard-page-wrapper overflow-auto flex-1 p-4">
        <Box className="cards-wrapper flex gap-8 w-full">
          <WeatherCard />
          <Box className="cards-inner-wrapper flex flex-wrap gap-6">
            <DashboardCard
              count={6127}
              title={t('dashboard:card:employees:title')}
              description={t('dashboard:card:employees:description')}
              icon={<EmployeesIcon />}
            />
            <DashboardCard
              count={230}
              title={t('dashboard:card:attendance:title')}
              description={t('dashboard:card:attendance:description')}
              icon={<AttendanceIcon />}
            />
            <DashboardCard
              count={23}
              title={t('dashboard:card:absent:title')}
              description={t('dashboard:card:absent:description')}
              icon={<AbsentIcon />}
            />
            <DashboardCard
              count={11}
              title={t('dashboard:card:onTime:title')}
              description={t('dashboard:card:onTime:description')}
              icon={<OnTimeIcon />}
            />
            <DashboardCard
              count={412}
              title={t('dashboard:card:late:title')}
              description={t('dashboard:card:late:description')}
              icon={<LateIcon />}
            />
            <DashboardCard
              count={78}
              title={t('dashboard:card:early:title')}
              description={t('dashboard:card:early:description')}
              icon={<EarlyIcon />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
