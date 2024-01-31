import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { Box, Button } from '@mui/material'
import { PostAddOutlined as AddHolidayIcon } from '@mui/icons-material'

import BackButton from '../../components/common/buttons/common/back-button'
import AttendanceTable from '../../components/views/attendance/attendance-table'

import { getAttendance } from '../../store/actions'

function Attendance() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const { data: attendance, isLoading } = useQuery(
    'attendance',
    dispatch(getAttendance),
    {
      retry: 0,
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    }
  )

  return (
    <Box className="attendance-page attendance-page-theme flex flex-col w-full h-full ">
      <Box className="attendance-page-wrapper flex flex-col overflow-y-auto overflow-x-hidden flex-1 p-7">
        <Box className="flex justify-between items-center">
          <BackButton text={t('attendance:title')} />
          <Button
            variant="contained"
            startIcon={<AddHolidayIcon className="ml-2" />}
            onClick={() => {}}
          >
            {t('attendance:holiday:add')}
          </Button>
        </Box>
        <Box
          className="attendance-inner-wrapper px-8 pt-8 w-full"
          sx={{ height: '90%' }}
        >
          <AttendanceTable
            data={attendance || []}
            isLoading={isLoading}
            hasActions
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Attendance
