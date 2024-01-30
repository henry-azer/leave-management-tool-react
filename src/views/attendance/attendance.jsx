import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { Box } from '@mui/material'

import BackButton from '../../components/buttons/base/back-button'
import AttendanceTable from '../../components/tables/paginated-table'

import { getAttendance } from '../../store/actions'
import { ATTENDANCE_TABLE_COLUMNS } from '../../utils/tables/tables-columns'

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
          <BackButton text={t('attendance:title')} hasBackButton />
        </Box>
        <Box
          className="attendance-inner-wrapper px-8 pt-8 w-full"
          sx={{ height: '90%' }}
        >
          <AttendanceTable
            columns={ATTENDANCE_TABLE_COLUMNS}
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
