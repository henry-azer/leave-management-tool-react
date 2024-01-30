import { useTranslation } from 'react-i18next'

import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { useSnackbar } from 'notistack'

import { Box } from '@mui/material'

import BackButton from '../../components/buttons/base/back-button'
import EmployeesTable from '../../components/tables/paginated-table'

import { getEmployees } from '../../store/actions'
import EMPLOYEE_TABLE_COLUMNS from '../../utils/helpers/tables-columns'

function Employees() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const { data: employees, isLoading } = useQuery(
    'employee',
    dispatch(getEmployees),
    {
      retry: 0,
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    }
  )

  return (
    <Box className="employees-page employees-page-theme flex flex-col w-full h-full ">
      <Box className="employees-page-wrapper flex flex-col overflow-y-auto overflow-x-hidden flex-1 p-7">
        <Box className="flex justify-between items-center">
          <BackButton text={t('employees:title')} hasBackButton />
        </Box>
        <Box
          className="employees-inner-wrapper px-8 pt-8 w-full"
          sx={{ height: '90%' }}
        >
          <EmployeesTable
            columns={EMPLOYEE_TABLE_COLUMNS}
            isLoading={isLoading}
            data={employees || []}
            hasActions
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Employees
