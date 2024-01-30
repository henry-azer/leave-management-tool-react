import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import moment from 'moment'

import { Box, Button } from '@mui/material'
import { PostAddOutlined as AddHolidayIcon } from '@mui/icons-material'

import BackButton from '../../components/buttons/base/back-button'
import AttendanceTable from '../../components/tables/paginated-table'

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

  const tableColumnsHeaders = [
    {
      field: 'id',
      headerName: t('attendance:table:header:id'),
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'name',
      headerName: t('attendance:table:header:name'),
      editable: true
    },
    {
      field: 'status',
      headerName: t('attendance:table:header:status'),
      editable: true,
      type: 'singleSelect',
      valueOptions: [
        'Work From Office',
        'Early Departure',
        'Work From Home',
        'Late Arrival',
        'Sick Leave',
        'Absent'
      ]
    },
    {
      field: 'checkinTime',
      headerName: t('attendance:table:header:checkinTime'),
      type: 'dateTime',
      editable: true,
      valueFormatter: (params) => moment(params?.value).format('hh:mm A')
    },
    {
      field: 'checkoutTime',
      headerName: t('attendance:table:header:checkoutTime'),
      type: 'dateTime',
      editable: true,
      valueFormatter: (params) => moment(params?.value).format('hh:mm A')
    },
    {
      field: 'workHours',
      headerName: t('attendance:table:header:workHours'),
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      editable: true
    }
  ]

  return (
    <Box className="attendance-page attendance-page-theme flex flex-col w-full h-full ">
      <Box className="attendance-page-wrapper flex flex-col overflow-y-auto overflow-x-hidden flex-1 p-7">
        <Box className="flex justify-between items-center">
          <BackButton text={t('attendance:title')} hasBackButton />
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
            columns={tableColumnsHeaders}
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
