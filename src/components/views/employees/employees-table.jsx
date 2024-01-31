import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

import moment from 'moment'

import PaginatedTable from '../../common/tables/paginated-table'

function EmployeesTable({ data, isLoading, hasActions }) {
  const { t } = useTranslation()

  const tableColumnsHeaders = [
    {
      field: 'id',
      headerName: t('employees:table:header:id'),
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'name',
      headerName: t('employees:table:header:name'),
      editable: true
    },
    {
      field: 'age',
      headerName: t('employees:table:header:age'),
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'gender',
      headerName: t('employees:table:header:gender'),
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Male', 'Female']
    },
    {
      field: 'email',
      headerName: t('employees:table:header:email'),
      editable: true
    },
    {
      field: 'phoneNumber',
      headerName: t('employees:table:header:phoneNumber'),
      editable: true
    },
    {
      field: 'jobTitle',
      headerName: t('employees:table:header:jobTitle'),
      editable: true
    },
    {
      field: 'joinDate',
      headerName: t('employees:table:header:joinDate'),
      type: 'date',
      editable: true,
      valueFormatter: (params) => moment(params?.value).format('DD-MM-YYYY')
    }
  ]

  return (
    <PaginatedTable
      columns={tableColumnsHeaders}
      hasActions={hasActions}
      isLoading={isLoading}
      data={data || []}
    />
  )
}

EmployeesTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  hasActions: PropTypes.bool
}

EmployeesTable.defaultProps = {
  data: [],
  isLoading: false,
  hasActions: false
}

export default EmployeesTable
