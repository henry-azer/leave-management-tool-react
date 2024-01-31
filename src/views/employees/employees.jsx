import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { Box, Button } from '@mui/material'
import { GroupAddOutlined as AddEmployeeIcon } from '@mui/icons-material'

import BackButton from '../../components/common/buttons/common/back-button'
import EmployeesTable from '../../components/views/employees/employees-table'

import { getEmployees } from '../../store/actions'

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
          <Button
            variant="contained"
            startIcon={<AddEmployeeIcon className="ml-2" />}
            onClick={() => {}}
          >
            {t('employees:add')}
          </Button>
        </Box>
        <Box
          className="employees-inner-wrapper px-8 pt-8 w-full"
          sx={{ height: '90%' }}
        >
          <EmployeesTable
            data={employees || []}
            isLoading={isLoading}
            hasActions
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Employees
